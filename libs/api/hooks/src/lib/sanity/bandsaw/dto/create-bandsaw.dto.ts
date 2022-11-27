import { IsUrl, IsInt, IsBoolean, IsDefined, IsString, Equals, IsOptional } from 'class-validator';

export class CreateBandsawDto {
  @IsOptional()
  @IsInt()
  dustPorts: number;

  @IsDefined()
  @Equals('bandsaw')
  _type: 'bandsaw';
  amps220: number;

  @IsOptional()
  @IsString()
  voltage: string;

  @IsDefined()
  @Equals('bandsaw')
  toolType: 'bandsaw';

  @IsOptional()
  @IsBoolean()
  bladeBrake: boolean;

  @IsOptional()
  weightShippingPounds: number;

  @IsOptional()
  bladeLengthInches: number;

  @IsDefined()
  @IsString()
  manufacturerName: string;

  @IsOptional()
  amps110: number;

  @IsOptional()
  motorHp220v: number;

  @IsDefined()
  @IsString()
  model: string;

  @IsDefined()
  @IsString()
  _id: string;

  @IsOptional()
  @IsString()
  bladeGuides: string;

  @IsDefined()
  @IsBoolean()
  active: boolean;

  @IsDefined()
  @IsUrl()
  website: string;

  @IsOptional()
  bladeMinSize: number;

  @IsOptional()
  motorHp110v: number;

  @IsOptional()
  resawCapacityInches: number;

  @IsOptional()
  bladeMaxSize: number;

  @IsDefined()
  size: number;

  @IsDefined()
  @IsUrl()
  manufacturerWebsite: string;
}
