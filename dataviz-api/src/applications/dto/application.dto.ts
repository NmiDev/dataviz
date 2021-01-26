import { IsDateString, IsNumber, IsString } from 'class-validator';

export class ApplicationDto {
  @IsString()
  readonly code: string;

  @IsString()
  readonly name: string;

  @IsString()
  readonly version: string;

  @IsDateString()
  readonly createdAt: Date;

  @IsString()
  readonly status: string;

  @IsString({ each: true })
  readonly components: string[];

  @IsNumber()
  readonly businessValue: number;

  @IsNumber()
  readonly technicalHealth: number;

  @IsNumber()
  readonly complexity: number;

  @IsString()
  readonly criticality: string;
}
