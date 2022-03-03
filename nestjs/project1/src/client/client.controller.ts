import { Controller, Get, Post } from "@nestjs/common";
import { ClientService } from "./client.service";
import { CLientDto } from "./dto/client.dto";
import { LoggerService } from "./logger.service";

@Controller('client')
export class ClientController {
    constructor(private readonly clientService: ClientService, private readonly loggerService: LoggerService) {}

    @Get()
    homeRoute(): string{
        this.loggerService.log();
        return this.clientService.getAllClients();
    }

    @Post()
    homeRoutePost(): CLientDto{
        this.loggerService.log();
        return this.clientService.addClient();
    }
}