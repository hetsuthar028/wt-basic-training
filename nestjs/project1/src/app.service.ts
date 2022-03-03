import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getFullName(): string {
    return "I'm Nest JS";
  }

  getAge(): number {
    return 21;
  }
}
