import { Body, Controller, Get, Post, Param, Delete } from "@nestjs/common";
import { ProductDto } from "./dto/product.dto";
import { ProductService } from "./product.service";

@Controller('products')
export class ProductController {
    constructor(private readonly productService: ProductService){}

    @Post('add')
    addProduct(@Body() productDto: ProductDto){
        return this.productService.addProduct(productDto);
    }

    @Get('all')
    getAllProducts(){
        return this.productService.getAllProducts();
    }

    @Get(':id')
    getProduct(@Param('id') productId: string){
        return this.productService.getProduct(productId);
    }

    @Get('/manufacturer/:name')
    getProductsByManufacturer(@Param('name') manufacturer: string){
        return this.productService.getProductsByManufacturer(manufacturer);
    }

    @Delete(':id')
    deleteProduct(@Param('id') productId: string){
        return this.productService.deleteProduct(productId);
    }
}