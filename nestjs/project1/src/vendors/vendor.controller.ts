import { Controller, Get, Post, Body, Param, Delete } from "@nestjs/common";
import { VendorDto } from "./dto/vendor.dto";
import { VendorService } from "./vendor.service";

@Controller('vendor')
export class VendorController {
    constructor(private readonly vendorService: VendorService){}

    @Post('add')
    addVendor(@Body() vendorDto: VendorDto){
        return this.vendorService.addVendor(vendorDto);
    }

    @Get('all')
    getAllVendors(){
        return this.vendorService.getAllVendors();
    }

    @Get(':id')
    getVendor(@Param('id') vendorId: string){
        return this.vendorService.getVendor(vendorId);
    }

    @Delete(':id')
    deleteVendor(@Param('id') vendorId: string){
        return this.vendorService.deleteVendor(vendorId);
    }
}