import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
import { ClientDto } from "./dto/client.dto";
import { Client, ClientSchema } from "./mongodemo.schema";

@Injectable()
export class MongoDemoService {

    constructor(@InjectModel(Client.name) private clientModel: Model<typeof ClientSchema>) {}

    sayHello(): string{
        return 'Hi from MongoDB service';
    }

    async getAllClient(){
        const results = await this.clientModel.find({})
        return results;
    }

    async addClient(clientData: ClientDto){
        const someRecord = new this.clientModel(clientData)
        const writeResult = await someRecord.save()
        return writeResult;
    }

    async getClient(clientId: string){
        return await this.clientModel.findById(clientId);
    }

    async deleteClient(clientId: string){
        return await this.clientModel.deleteOne({_id: clientId});
    }
}