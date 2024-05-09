import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Color } from './entities/color.entity';
import { Image } from './entities/image.entity';
import { Size } from './entities/size.entity';
import { Breadcrumb } from './entities/breadcrumb.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product, Color, Image, Size, Breadcrumb]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
