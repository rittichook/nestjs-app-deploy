import { Injectable } from '@nestjs/common';
@Injectable()
export class AppService {
  getHello(): string {
    const data = [
      
      //MON
      {
        startTime: '2023-05-29 08:00:00.919982',
        endTime: '2023-05-29 11:00:00.919982',
        subject: 'วิชาเทคโนโลยียานยนต์',
        color: '0xFF7EC1DA',
      },
      {
        startTime: '2023-05-29 13:00:00.919982',
        endTime: '2023-05-29 16:00:00.919982',
        subject: 'วิชาเทคโนโลยีไฟฟ้า และระบบควบคุมอัตโนมัติ',
        color: '0xFF7EC1DA',
      },
      //TUR
      {
        startTime: '2023-05-30 09:30:00.919982',
        endTime: '2023-05-30 11:30:00.919982',
        subject: 'วิชาการจัดการโลจิสติกส์',
        color: '0xFF7EC1DA',
      },
      {
        startTime: '2023-05-30 15:30:00.919982',
        endTime: '2023-05-30 17:30:00.919982',
        subject: 'วิชาเทคโนโลยีคอมพิวเตอร์',
        color: '0xFF7EC1DA',
      },
      //WED
      {
        startTime: '2023-05-31 08:30:00.919982',
        endTime: '2023-05-31 11:30:00.919982',
        subject: 'วิชาเทคโนโลยีคอมพิวเตอร์',
        color: '0xFF7EC1DA',
      },
      //THU
      {
        startTime: '2023-06-01 08:30:00.919982',
        endTime: '2023-06-01 11:30:00.919982',
        subject: 'วิชาวิศวกรรมพลังงาน',
        color: '0xFF7EC1DA',
      },
      //FRI
      {
        startTime: '2023-06-01 13:00:00.919982',
        endTime: '2023-06-01 18:00:00.919982',
        subject: 'วิชาฟิสิกส์',
        color: '0xFF7EC1DA',
      },
    ];

    const jsonString = JSON.stringify(data);

    return jsonString;
  }
}

