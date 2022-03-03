import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Question{
    @Prop()
    questionTitle: string;

    @Prop()
    answer: string;

    @Prop()
    questionType: string;

    @Prop()
    questionOptions: string[]

    @Prop()
    category: string;

    @Prop()
    score: number;
}

export const QuestionSchema = SchemaFactory.createForClass(Question);