import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ApplicationsModule } from './applications/applications.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ApplicationsModule,
    MongooseModule.forRoot(`${process.env.DATABASE_URI}`),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
