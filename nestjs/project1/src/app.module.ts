import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './client/client.module';
import { StudentService } from './students.service';
import { UserService } from './user.service';

@Module({
  imports: [ClientModule],
  controllers: [AppController],
  providers: [AppService, UserService, StudentService],
})
export class AppModule {}
