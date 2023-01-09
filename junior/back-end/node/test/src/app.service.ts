import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  setHello(text: string): string {
    return text;
  }

  sum(a: number, b: number): number {
    if(!a || !b) throw new Error('a or b cant be null');

    return a + b;
  }

  divide(a: number, b: number): number {
    if (b === 0) throw new Error('b cant be zero');

    if(!a || !b) throw new Error('a or b cant be null');

    //TODO: Dummy change

    return a / b;
  }

  newBuggyfunction(a: number, b: number): number {
    return null;
  }
}
