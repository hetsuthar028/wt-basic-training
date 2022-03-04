import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserService } from "./user.service";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('add')
    createUser(@Body() createUserDto: CreateUserDto){
        return this.userService.creatUser(createUserDto);
    }

    @Get(':email')
    getUser(@Param('email') userEmail: string){
        return this.userService.getUser(userEmail);
    }

    @Get('all')
    getAllUsers(){
        return this.userService.getAllUsers();
    }

    @Post('login')
    loginUser(@Body('email') userEmail: string, @Body('password') userPassword: string){
        return this.userService.loginUser(userEmail, userPassword);
    }

    @Delete(':email')
    deleteUser(@Param('email') email: string){
        return this.userService.deleteUser(email);
    }
}