import { Injectable } from "@nestjs/common";
import { CLientDto } from "./dto/client.dto";

@Injectable()
export class ClientService {
    getAllClients(): string {
        return 'This is /clients route'
    }

    newClient: CLientDto = {
        clientName: 'A1 Pvt. Ltd',
        address: 'Mumbai, Maharashtra',
        phone: 123,
        areacode: 400020
    }

    addClient(): CLientDto{
        // let newClient = new CLientDto()
        // newClient.clientName = 'A1 Pvt. Ltd';
        // newClient.address = "Mumbai, Maharashtra"
        // newClient.phone = 123345456,
        // newClient.areacode = 400020

        return this.newClient
    }
}