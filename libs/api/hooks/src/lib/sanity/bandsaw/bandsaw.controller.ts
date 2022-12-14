import { Controller, Get, Post, Body, Patch, Param, Delete, Logger, Req } from '@nestjs/common';
import { CreateBandsawDto, UpdateBandsawDto } from '@woodtoolsearch/api-tools';
import { Request } from 'express';
import { BandsawService } from './bandsaw.service';

@Controller()
export class BandsawController {
  private readonly logger = new Logger(BandsawController.name);

  constructor(private readonly bandsawService: BandsawService) {}

  @Post()
  create(@Body() createBandsawDto: CreateBandsawDto, @Req() request: Request) {
    this.logger.log('Received request in bandsaw POST route');
    console.dir(createBandsawDto, { depth: 2 });
    return this.bandsawService.create(createBandsawDto);
  }

  @Get()
  findAll() {
    return this.bandsawService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bandsawService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBandsawDto: UpdateBandsawDto) {
    return this.bandsawService.update(+id, updateBandsawDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bandsawService.remove(+id);
  }
}
