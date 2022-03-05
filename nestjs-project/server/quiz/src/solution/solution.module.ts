import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionModule } from 'src/question/question.module';
import { SolutionController } from './solution.controller';
import { Solution, SolutionSchema } from './solution.schema';
import { SolutionService } from './solution.service';

@Module({
    imports: [MongooseModule.forFeature([{name: Solution.name, schema: SolutionSchema}])],
    controllers: [SolutionController],
    providers: [SolutionService]
})
export class SolutionModule {
    constructor(){}
}