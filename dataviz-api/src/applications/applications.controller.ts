import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApplicationsService } from './applications.service';
import { ApplicationDto } from './dto/application.dto';
import { Application } from './entities/application.entity';

@Controller('applications')
export class ApplicationsController {
  constructor(private readonly applicationsService: ApplicationsService) {}

  @Get()
  public findAll(@Query() paginationQuery): Application[] {
    // const { limit, offset } = paginationQuery;
    return this.applicationsService.findAll();
  }

  @Get(':id')
  public findOne(@Param('id') id: string): Application {
    return this.applicationsService.findOne(id);
  }

  @Post()
  public create(@Body() applicationDto: ApplicationDto): void {
    return this.applicationsService.create(applicationDto);
  }

  @Put(':id')
  public update(
    @Param('id') id: string,
    @Body() applicationDto: ApplicationDto,
  ): void {
    return this.applicationsService.update(id, applicationDto);
  }

  @Delete(':id')
  public delete(@Param('id') id: string): void {
    return this.applicationsService.delete(id);
  }
}
