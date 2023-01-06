import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  setHello(text:string): string{
    const testSonar = 1;

    if(testSonar)

    return text;
  }
}
