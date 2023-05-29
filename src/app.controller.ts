import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/test')
  findAll(){
    return [
      {
        id:1,
        startDate:'2017-08-22T06:11:00.000Z',
        endDate:'2017-08-22T06:11:00.000Z'
      }
    ];
  }
}
