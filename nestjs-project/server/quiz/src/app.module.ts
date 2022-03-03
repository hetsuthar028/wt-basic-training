import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { QuestionModule } from './question/question.module';
import { LoggerMiddleware } from './middlewares/logger.middleware';

@Module({
  imports: [ MongooseModule.forRoot('mongodb://localhost:27017/nestjs-training'), UserModule, QuestionModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
      consumer.apply(LoggerMiddleware)
      .forRoutes('user', 'question')
  }
}
