import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Product{
    @Prop()
    productName: string;

    @Prop()
    manufacturer: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);