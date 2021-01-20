import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApplicationsService } from './applications.service';
import { CreateApplicationDto } from './dto/create-application.dto';
import { UpdateApplicationDto } from './dto/update-application.dto';
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
  public create(@Body() createApplicationDto: CreateApplicationDto): void {
    return this.applicationsService.create(createApplicationDto);
  }

  @Patch(':id')
  public update(
    @Param('id') id: string,
    @Body() updateApplicationDto: UpdateApplicationDto,
  ): void {
    return this.applicationsService.update(id, updateApplicationDto);
  }

  @Delete(':id')
  public delete(@Param('id') id: string): void {
    return this.applicationsService.delete(id);
  }
}
