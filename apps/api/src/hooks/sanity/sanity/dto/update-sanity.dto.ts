import { PartialType } from '@nestjs/mapped-types';
import { CreateSanityDto } from './create-sanity.dto';

export class UpdateSanityDto extends PartialType(CreateSanityDto) {}
