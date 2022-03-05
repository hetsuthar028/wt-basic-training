import { Body, Controller, Param, Post, Get } from "@nestjs/common";
import { SolutionService } from "./solution.service";

@Controller('solution')
export class SolutionController {
    constructor(private readonly solutionService: SolutionService){}

    @Post('add')
    addUserSolution(@Body('userEmail') userEmail: string, @Body('userAnswers') userAnswers: {}, @Body('category') category: string){
        console.log("GOT FOR SOLUTION", userEmail, userAnswers, category);
        return this.solutionService.addUserSolution(userEmail, userAnswers, category);
    }

    @Get('attempts/:category/:userEmail')
    getRemainingAttempts(@Param('category') category: string, @Param('userEmail') userEmail: string){
        return this.solutionService.getRemainingAttempts(userEmail, category);
    }
}