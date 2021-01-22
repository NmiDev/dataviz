import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ApplicationDto } from './dto/application.dto';
import { Application } from './entities/application.entity';

@Injectable()
export class ApplicationsService {
  constructor(
    @InjectModel(Application.name)
    private readonly applicationModel: Model<Application>,
  ) { }
  
  public findAll() {
    return this.applicationModel.find().exec();
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
    const existingApplication = await this.applicationModel
      .findOneAndUpdate(
        { _id: id },
        { $set: applicationDto },
        { new: true },
      )
      .exec();

    if (!existingApplication) {
      throw new NotFoundException(`Application #${id} not found`);
    }
    return existingApplication;
  }

  public async delete(id: string) {
    const application = await this.findOne(id);
    return application.remove();
  }
}
