import { Controller, Get, Post, Body, Patch, Param, Delete, Logger } from '@nestjs/common';
import { BandsawService } from './bandsaw.service';
import { CreateBandsawDto } from './dto/create-bandsaw.dto';
import { UpdateBandsawDto } from './dto/update-bandsaw.dto';

@Controller()
export class BandsawController {
  private readonly logger = new Logger(BandsawController.name);

  constructor(private readonly bandsawService: BandsawService) {}

  @Post()
  create(@Body() createBandsawDto: CreateBandsawDto, @Req() request: Request) {
    this.logger.log('Received request in badn');
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
