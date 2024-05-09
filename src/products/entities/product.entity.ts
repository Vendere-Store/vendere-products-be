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

  @Column({ type: 'text', nullable: true })
  details?: string;

  @Column('text', { array: true, nullable: true })
  highlights: string[];

  @OneToMany(() => Breadcrumb, (breadcrumb) => breadcrumb.product, {
    cascade: true,
  })
  breadcrumbs: Breadcrumb[];

  @OneToMany(() => Image, (image) => image.product, { cascade: true })
  images: Image[];

  @OneToMany(() => Color, (color) => color.product, {
    cascade: ['insert', 'update'],
  })
  colors: Color[];

  @OneToMany(() => Size, (size) => size.product, {
    cascade: ['insert', 'update'],
  })
  sizes: Size[];
}
