import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { QuestionDto } from "./dto/question.dto";
import { QuestionService } from "./question.service";

@Controller('question')
export class QuestionController {
    constructor(private readonly questionService: QuestionService){}

    @Post('add')
    addQuestion(@Body() questionDto: QuestionDto){
        return this.questionService.addQuestion(questionDto);
    }

    @Get('all')
    getAllQuestions(){
        return this.questionService.getAllQuestions();
    }

    @Get('category/:category')
    getQuestionsByCategory(@Param('category') category: string){
        return this.questionService.getCategoryQuestions(category);
    }

    @Get(':questionId')
    getQuestion(@Param('questionId') questionId: string){
        return this.questionService.getQuestion(questionId);
    }

    @Delete(':questionId')
    deleteQuestion(@Param('questionId') questionId: string){
        return this.questionService.deleteQuestion(questionId);
    }

    @Put(':questionId')
    updateQuestion(@Param('questionId') questionId: string, @Body() fieldsToUpdate: QuestionDto){
        return this.questionService.updateQuestion(questionId, fieldsToUpdate);
    }
}