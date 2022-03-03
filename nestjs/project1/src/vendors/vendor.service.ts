import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Vendor, VendorSchema } from "./vendor.schema";
import { Model } from 'mongoose';
import { VendorDto } from "./dto/vendor.dto";
import { ProductService } from "src/product/product.service";

@Injectable()
export class VendorService{
    constructor(
        @InjectModel(Vendor.name) private readonly vendorModel: Model<typeof VendorSchema>,
        private readonly productService: ProductService
    ){}

    async getAllVendors(){
        return await this.vendorModel.find({});
    }

    async addVendor(vendorData: VendorDto){
        let productsList: any = this.productService.getProductsByManufacturer(vendorData.manufacturer)
        let newVendor = new this.vendorModel({...vendorData, "productsList": (await productsList).map((product) => product.productName)});
        return await newVendor.save();
    }

    async getVendor(vendorId: string){
        return await this.vendorModel.findById(vendorId);
    }

    async deleteVendor(vendorId: string){
        return await this.vendorModel.deleteOne({_id: vendorId});
    }

    async updateVendor(vendorId: string, data: VendorDto){
        return await this.vendorModel.updateOne({_id: vendorId}, {$set: data})
    }
}