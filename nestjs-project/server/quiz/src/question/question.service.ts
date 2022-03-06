import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Question, QuestionSchema } from "./question.schema";
import { Model } from 'mongoose';
import { QuestionDto } from "./dto/question.dto";

@Injectable()
export class QuestionService{
    constructor(@InjectModel(Question.name) private readonly questionModel: Model<typeof QuestionSchema>){}

    async addQuestion(questionData: QuestionDto){
        let newQuestion = new this.questionModel(questionData);
        return await newQuestion.save();
    }

    async getAllQuestions(){
        return await this.questionModel.find({});
    }

    async getCategoryQuestions(category: string){
        return await this.questionModel.find({category: category});
    }

    async getQuestion(questionId: string){
        return await this.questionModel.findById(questionId);
    }

    async deleteQuestion(questionId: string){
        return await this.questionModel.deleteOne({_id: questionId});
    }

    async updateQuestion(questionId: string, fieldsToUpdate: QuestionDto){
        return await this.questionModel.findOneAndUpdate({_id: questionId}, {$set: fieldsToUpdate});
    }

    async getNextQuestion(category: string, questionNumber: number){
        return await this.questionModel.findOne({category: category}).skip(questionNumber - 1).limit(1);
    }
}