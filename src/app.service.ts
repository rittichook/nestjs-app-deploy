import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const data = [
      {
        startTime: '2023-05-24 15:31:14.919982',
        endTime: '2023-05-24 16:50:14.919982',
        subject: 'subject',
        color: '0xFFE384DA',
    },
]
  ];

  

    // Convert the data array to a JSON string
    const jsonString = JSON.stringify(data);

    return jsonString;
  }

  
}
