import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose';
import { ProductDto } from "./dto/product.dto";
import { Product, ProductSchema } from "./product.schema";

@Injectable()
export class ProductService {
    constructor(@InjectModel(Product.name) private readonly productModel: Model<typeof ProductSchema>) {}

    async addProduct(productData: ProductDto){
        let newProduct = new this.productModel(productData);
        return await newProduct.save();
    }

    async getAllProducts(){
        return await this.productModel.find({});
    }

    async getProduct(productId: string){
        return await this.productModel.findById(productId);
    }

    async getProductsByManufacturer(manufacturer: string){
        let data = await this.productModel.find({"manufacturer": manufacturer}, {"productName": 1, _id: 0})
        return data;
    }

    async deleteProduct(productId: string){
        return await this.productModel.deleteOne({_id: productId});
    }
}