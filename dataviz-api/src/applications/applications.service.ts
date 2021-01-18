import { Injectable, NotFoundException } from '@nestjs/common';
import { Application } from './entities/application.entity';

@Injectable()
export class ApplicationsService {
  private applications: Application[] = [
    {
      id: 'APP-001',
      code: 'APP-001',
      name: 'Application 1',
      components: ['COMP-001', 'COMP-002'],
    },
  ];

  public findAll(): Application[] {
    return this.applications;
  }

  public findOne(id: string): Application {
    const application = this.applications.find(
      (element: Application) => element.id === id,
    );

    if (!application) {
      throw new NotFoundException(`Application ${id} not found`);
    }

    return application;
  }

  public create(applicationDto: any): void {
    this.applications.push(applicationDto);
  }

  public update(id: string, applicationDto: any): void {
    const existingApplication = this.findOne(id);
    if (existingApplication) {
      // update the existing entity
    }
  }

  public delete(id: string): void {
    const applicationIndex = this.applications.findIndex(
      (application: Application) => application.id === id,
    );
    if (applicationIndex >= 0) {
      this.applications.splice(applicationIndex, 1);
    }
  }
}
