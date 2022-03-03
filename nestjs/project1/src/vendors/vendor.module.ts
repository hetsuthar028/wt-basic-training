import { Module } from '@nestjs/common';
import { VendorController } from './vendor.controller';
import { VendorService } from './vendor.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Vendor, VendorSchema } from './vendor.schema';
import { Model } from 'mongoose';
import { ProductModule } from 'src/product/product.module';
import { ProductService } from 'src/product/product.service';

@Module({
    imports: [ProductModule, MongooseModule.forFeature([{name: Vendor.name, schema: VendorSchema}])],
    controllers: [VendorController],
    providers: [VendorService]
})
export class VendorModule {}
