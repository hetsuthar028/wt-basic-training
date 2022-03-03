import { Module } from '@nestjs/common';
import { MongoDemoController } from './mongodemo.controller';
import { MongoDemoService } from './mongodemo.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Client, ClientSchema } from './mongodemo.schema';

@Module({
    imports: [ MongooseModule.forFeature([{ name: Client.name, schema: ClientSchema }]) ],
    controllers: [MongoDemoController],
    providers: [MongoDemoService],
})
export class MongoDemoModule{}