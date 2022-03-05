import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Solution {
    @Prop()
    userEmail: string;

    @Prop({type: Object})
    userAnswers;

    @Prop({default: + new Date()})
    timestamp: number;

    @Prop()
    category: string;

    @Prop()
    score: number;
}

export const SolutionSchema = SchemaFactory.createForClass(Solution);