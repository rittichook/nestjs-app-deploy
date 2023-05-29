import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const data = [
      {
      id: "1",
      subject: "เทคโนโลยีปรับอากาศ",
      dateStart: "08:00:00",
      dateEnd: "12:00:00",
      teacher: "A.Jarukit",
      room: "ROOM A"
    }
    {
      id: "2",
      subject: "เทคโนโลยีปรับอากาศ",
      dateStart: "08:00:00",
      dateEnd: "12:00:00",
      teacher: "A.Jarukit",
      room: "ROOM A"
    }
    {
      id: "3",
      subject: "เทคโนโลยีปรับอากาศ",
      dateStart: "08:00:00",
      dateEnd: "12:00:00",
      teacher: "A.Jarukit",
      room: "ROOM A"
    }
    {
      id: "4",
      subject: "เทคโนโลยีปรับอากาศ",
      dateStart: "08:00:00",
      dateEnd: "12:00:00",
      teacher: "A.Jarukit",
      room: "ROOM A"
    }
    {
      id: "5",
      subject: "เทคโนโลยีปรับอากาศ",
      dateStart: "08:00:00",
      dateEnd: "12:00:00",
      teacher: "A.Jarukit",
      room: "ROOM A"
    }
  ];

    // Convert the data array to a JSON string
    const jsonString = JSON.stringify(data);

    return jsonString;
  }
}
