import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const data = [
      {
        startTime: '2023-06-01 08:00:00.919982',
        endTime: '2023-06-01 11:00:00.919982',
        subject: 'วิชาเทคโนโลยียานยนต์',
        color: '0xFF7EC1DA',
      },
            {
        startTime: '2023-06-02 08:00:00.919982',
        endTime: '2023-06-02 11:00:00.919982',
        subject: 'วิชาเทคโนโลยียานยนต์',
        color: '0xFF7EC1DA',
      },
//       {
//         startTime: '2023-06-01 13.00:00.919982',
//         endTime: '2023-06-01 14:00:00.919982',
//         subject: 'วิชาเทคโนโลยีไฟฟ้า และระบบควบคุมอัตโนมัติ',
//         color: '0xFF7EC1DA',
//       },
//       {
//         startTime: '2023-06-02 10.00:00.919982',
//         endTime: '2023-06-02 12:00:00.919982',
//         subject: 'วิชาการจัดการโลจิสติกส์',
//         color: '0xFF7EC1DA',
//       },
//       {
//         startTime: '2023-06-03 00.00:00.919982',
//         endTime: '2023-06-03 23.59:00:00.919982',
//         subject: 'วันวิสาขบูชา',
//         color: '0xFFE384DA',
//       },
//       {
//         startTime: '2023-06-03 00.00:00.919982',
//         endTime: '2023-06-03 23.59:00:00.919982',
//         subject: 'วันวิสาขบูชา',
//         color: '0xFFE384DA',
//       },
    ];

    const jsonString = JSON.stringify(data);

    return jsonString;
  }
}

