import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const data = [{
      name: "aaa",
      email: "aaa@mail",
      tt: "test"
    }];

    // Convert the data array to a JSON string
    const jsonString = JSON.stringify(data);

    return jsonString;
  }
}
