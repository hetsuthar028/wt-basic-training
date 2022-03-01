import { Module } from '@nestjs/common';
import { ClientController } from './client.controller';
import { ClientService } from './client.service';
import { LoggerService } from './logger.service';


@Module({
    imports: [],
    controllers: [ClientController],
    providers: [ClientService, LoggerService],
})
export class ClientModule {}