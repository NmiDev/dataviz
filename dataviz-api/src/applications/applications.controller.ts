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
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { ApplicationsService } from './applications.service';
import { ApplicationDto } from './dto/application.dto';
import { Application } from './entities/application.entity';

@Controller('applications')
export class ApplicationsController {
  constructor(private readonly applicationsService: ApplicationsService) {}

  @Get()
  public findAll(
    @Query() paginationQuery: PaginationQueryDto
  ): Promise<Application[]> {
    return this.applicationsService.findAll(paginationQuery);
  }

  @Get(':id')
  public findOne(
    @Param('id') id: string
  ): Promise<Application> {
    return this.applicationsService.findOne(id);
  }

  @Post()
  public create(
    @Body() applicationDto: ApplicationDto
  ): Promise<Application> {
    return this.applicationsService.create(applicationDto);
  }

  @Put(':id')
  public update(
    @Param('id') id: string,
    @Body() applicationDto: ApplicationDto,
  ): Promise<Application> {
    return this.applicationsService.update(id, applicationDto);
  }

  @Delete(':id')
  public delete(
    @Param('id') id: string
  ): Promise<Application> {
    return this.applicationsService.delete(id);
  }
}
