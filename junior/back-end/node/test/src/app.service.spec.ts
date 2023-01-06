import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppSerrvice', () => {
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appService = app.get<AppService>(AppService);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appService.getHello()).toBe('Hello World!');
    });

    it('should return "Hello World!!"', () => {
      expect(appService.setHello('Hello World!!')).toBe('Hello World!!');
    });
  });

  describe('sum test', () => {
    it('should return 2', () => {
      expect(appService.sum(1, 1)).toBe(2);
    });

    it('should have both params', ()=> {
      expect(()=> appService.sum(null, null)).toThrowError('a or b cant be null');
    });

  });

  describe('devide test', () => {
    it('shuld return 2', () => {
      expect(appService.divide(4, 2)).toBe(2);
    });

    it('shuld return fail, division by zero', () => {
      expect(() => appService.divide(1, 0)).toThrowError('b cant be zero');
    });

    it('shuld return fail, division by zero', () => {
      expect(() => appService.divide(0, 0)).toThrowError('b cant be zero');
    });
  });
});
