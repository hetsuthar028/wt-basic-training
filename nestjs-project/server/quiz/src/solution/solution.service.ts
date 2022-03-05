import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Solution, SolutionSchema } from "./solution.schema";
import { Model } from 'mongoose';
import { QuestionService } from "src/question/question.service";

const maxAttempts = 3;

@Injectable()
export class SolutionService{
    constructor(
        @InjectModel(Solution.name) private readonly solutionModel: Model<typeof SolutionSchema>
    ){}

    async addUserSolution(userEmail: string, userAnswers: {}, category: string){
        let calculatedScore = Object.keys(userAnswers).reduce((prev: number, ans: any) => {
            return prev += (userAnswers[ans].correct === true ? userAnswers[ans].score : 0);
        }, 0);
        const newSolution = new this.solutionModel({userEmail, userAnswers, category, score: calculatedScore});
        return await newSolution.save();
    }

    async getRemainingAttempts(userEmail: string, category: string){
        return maxAttempts - await this.solutionModel.find({userEmail: userEmail, category: category}).count();
    }
}