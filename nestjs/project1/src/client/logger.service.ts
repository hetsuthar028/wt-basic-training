import { Injectable } from "@nestjs/common";

@Injectable()
export class LoggerService {
    log(){
        console.log("User visited.")
    }
}