FROM node:16.18.1-alpine3.16 as builder
# hadolint ignore=DL3018
RUN apk add --no-cache g++ make python3
RUN mkdir /app && chown -R node:node /app
WORKDIR /app
RUN npm install --location=global npm@8.18.0
# https://github.com/nodejs/docker-node/blob/main/docs/BestPractices.md#non-root-user
USER node
# COPY --chown=node:node package.json package-lock.json tsconfig.json src ./
COPY --chown=node:node . ./
RUN npm ci \
 && npx nx run api:build:production

FROM node:16.18.1-alpine3.16
ENV NODE_ENV=production
EXPOSE 3333
# https://github.com/nodejs/docker-node/blob/main/docs/BestPractices.md#handling-kernel-signals
# https://github.com/krallin/tini#alpine-linux-package
RUN apk add --no-cache tini=0.19.0-r0
ENTRYPOINT ["/sbin/tini", "--"]
RUN mkdir /app && chown -R node:node /app
WORKDIR /app
RUN npm install --location=global npm@8.18.0
# https://github.com/nodejs/docker-node/blob/main/docs/BestPractices.md#non-root-user
USER node
COPY --from=builder /app/dist/apps/api /app/dist
COPY --from=builder /app/package.json /app/package-lock.json ./
RUN npm ci --omit=dev && npm cache clean --force
# https://github.com/nodejs/docker-node/blob/main/docs/BestPractices.md#cmd
CMD ["node", "dist/main.js"]
