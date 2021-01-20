import { IsString } from 'class-validator';

export class CreateApplicationDto {
  @IsString()
  readonly code: string;

  @IsString()
  readonly name: string;

  @IsString({ each: true })
  readonly components: string[];
}
