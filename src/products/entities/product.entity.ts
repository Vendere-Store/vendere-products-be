import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Breadcrumb } from './breadcrumb.entity';
import { Image } from './image.entity';
import { Color } from './color.entity';
import { Size } from './size.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: string;

  @Column()
  href: string;

  @Column('text')
  description: string;

  @OneToMany(() => Breadcrumb, (breadcrumb) => breadcrumb.product)
  breadcrumbs: Breadcrumb[];

  @OneToMany(() => Image, (image) => image.product)
  images: Image[];

  @OneToMany(() => Color, (color) => color.product)
  colors: Color[];

  @OneToMany(() => Size, (size) => size.product)
  sizes: Size[];
}
