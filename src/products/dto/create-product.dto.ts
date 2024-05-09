import { IsString, IsNotEmpty, IsOptional, IsArray } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  price: string;

  @IsString()
  @IsNotEmpty()
  href: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsOptional()
  details: string;

  @IsArray()
  @IsString({ each: true }) // Ensures each item in the array is a string
  @IsOptional() // Marks the array as optional
  highlights?: string[];

  // If you decide later to accept simple arrays of string or other basic types
  @IsArray()
  @IsOptional() // Making them optional since you may not want them on product creation
  breadcrumbs?: { id: number; name: string; href: string }[];

  @IsArray()
  @IsOptional()
  images?: { src: string; alt: string }[];

  @IsArray()
  @IsOptional()
  colors?: { name: string; class: string; selectedClass: string }[];

  @IsArray()
  @IsOptional()
  sizes?: { name: string; inStock: boolean }[];
}
