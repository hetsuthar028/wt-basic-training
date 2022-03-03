import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { CreateUserDto } from "./dto/create-user.dto";
import { User, UserSchema } from "./user.schema";
import { Model } from 'mongoose';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private readonly userModel: Model<typeof UserSchema>) {}

    async creatUser(userData: CreateUserDto){
        let newUser = new this.userModel(userData);
        return await newUser.save();
    }

    async getUser(email: string){
        return await this.userModel.findOne({email: email});
    }

    async getAllUsers(){
        return await this.userModel.find({});
    }

    async loginUser(email: string, password: string){
        let user : any = await this.getUser(email);
        if(user.password === password){
            return true;
        }
        return false;
    }

}