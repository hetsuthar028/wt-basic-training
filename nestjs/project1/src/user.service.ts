import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

    getMyName(): string{
        return "Nest JS"
    }

    getMyAge(): number{
        return 6
    }

    getMyDetails(): {} {
        return {
            name: this.getMyName(),
            age: this.getMyAge()
        }
    }

}