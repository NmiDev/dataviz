import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApplicationsModule } from './applications/applications.module';

@Module({
  imports: [
    ApplicationsModule,
    MongooseModule.forRoot('mongodb://localhost:27017/dataviz'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
