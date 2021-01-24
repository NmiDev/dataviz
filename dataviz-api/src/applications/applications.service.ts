import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { ApplicationDto } from './dto/application.dto';
import { Application } from './entities/application.entity';

@Injectable()
export class ApplicationsService {
  constructor(
    @InjectModel(Application.name)
    private readonly applicationModel: Model<Application>,
  ) {}

  public findAll(paginationQuery: PaginationQueryDto) {
    const { limit, offset } = paginationQuery;
    return this.applicationModel
      .find()
      .skip(offset)
      .limit(limit)
      .exec();
  }

  public async findOne(id: string) {
    const application = await this.applicationModel.findById(id).exec();

    if (!application) {
      throw new NotFoundException(`Application ${id} not found`);
    }

    return application;
  }

  public create(applicationDto: ApplicationDto) {
    const application = new this.applicationModel(applicationDto);
    return application.save();
  }

  public async update(id: string, applicationDto: ApplicationDto) {
    const updatedApplication = await this.applicationModel
      .findOneAndUpdate({ _id: id }, { $set: applicationDto }, { new: true })
      .exec();

    if (!updatedApplication) {
      throw new NotFoundException(`Application #${id} not found`);
    }

    return updatedApplication;
  }

  public async delete(id: string) {
    const application = await this.applicationModel.findById(id).exec();

    if (!application) {
      throw new NotFoundException(`Application ${id} not found`);
    }

    return application.remove();
  }
}
