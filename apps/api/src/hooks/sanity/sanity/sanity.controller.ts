import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SanityService } from './sanity.service';
import { CreateSanityDto } from './dto/create-sanity.dto';
import { UpdateSanityDto } from './dto/update-sanity.dto';

@Controller('sanity')
export class SanityController {
  constructor(private readonly sanityService: SanityService) {}

  @Post()
  create(@Body() createSanityDto: CreateSanityDto) {
    return this.sanityService.create(createSanityDto);
  }

  @Get()
  findAll() {
    return this.sanityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sanityService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSanityDto: UpdateSanityDto) {
    return this.sanityService.update(+id, updateSanityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sanityService.remove(+id);
  }
}
