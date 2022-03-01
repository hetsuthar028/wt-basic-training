import { Injectable } from "@nestjs/common";

@Injectable()
export class GlobalLoggerService {

    logAction(action: string, module: string){
        console.log(`LOG: [${action}] -- ${module} module`)
    }

}