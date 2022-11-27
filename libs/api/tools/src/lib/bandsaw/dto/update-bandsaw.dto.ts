import { PartialType } from '@nestjs/mapped-types';
import { CreateBandsawDto } from './create-bandsaw.dto';

export class UpdateBandsawDto extends PartialType(CreateBandsawDto) {}
