import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Client {
    @Prop()
    clientName: string;

    @Prop()
    address: string;

    @Prop()
    city: string;

    @Prop()
    contact: number
}

export const ClientSchema = SchemaFactory.createForClass(Client);