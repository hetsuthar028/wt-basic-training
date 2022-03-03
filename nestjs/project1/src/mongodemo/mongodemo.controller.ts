import { Controller, Get, Post, Body, Param, Delete } from "@nestjs/common";
import { ClientDto } from "./dto/client.dto";
import { MongoDemoService } from "./mongodemo.service";

@Controller('mongodemo')
export class MongoDemoController {
    constructor( private readonly mongodemoService: MongoDemoService ) {}

    @Get()
    sayHello(): string{
        return this.mongodemoService.sayHello();
    }

    @Get('all')
    async getAllClients(){
        return this.mongodemoService.getAllClient();
    }

    @Get('id/:id')
    async getClient(@Param('id') clientId: string){
        return this.mongodemoService.getClient(clientId);
    }

    @Post('add')
    async addClientData(@Body() clientDto: ClientDto){
        return this.mongodemoService.addClient(clientDto);
    }

    @Delete('id/:id')
    async deleteClient(@Param('id') clientId: string){
        return this.mongodemoService.deleteClient(clientId);
    }

}
