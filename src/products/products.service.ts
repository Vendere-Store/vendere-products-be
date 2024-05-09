import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    console.log('Creating a new product:', createProductDto);

    try {
      const newProduct = this.productRepository.create(createProductDto);
      return await this.productRepository.save(newProduct);
    } catch (error) {
      // Handle errors appropriately
      console.error('Failed to create product:', error);
      throw new Error(`Error creating product: ${error.message}`);
    }
  }

  async findAll() {
    return await this.productRepository.find({
      relations: ['images'],
      order: {
        name: 'ASC', // Sorting products by name in ascending order
      },
    });
  }

  async findOne(id: number) {
    console.log('find one id', id);
    return await this.productRepository.findOne({
      where: {
        id: id,
      },
      relations: ['images', 'sizes', 'breadcrumbs', 'colors'],
      order: {
        name: 'ASC', // Sorting products by name in ascending order
      },
    });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
