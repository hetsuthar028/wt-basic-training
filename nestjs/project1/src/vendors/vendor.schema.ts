import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';

@Schema()
export class Vendor{
    @Prop()
    vendorName: string;

    @Prop()
    address: string;

    @Prop()
    contact: number;

    @Prop()
    manufacturer: string;

    @Prop()
    productsList: string[]
}

export const VendorSchema = SchemaFactory.createForClass(Vendor);