import { IsString } from 'class-validator';

export class ApplicationDto {
  @IsString()
  readonly code: string;

  @IsString()
  readonly name: string;

  @IsString({ each: true })
  readonly components: string[];
}
