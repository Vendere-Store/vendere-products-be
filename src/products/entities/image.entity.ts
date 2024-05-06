import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class Image {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    src: string;

    @Column()
    alt: string;

    @ManyToOne(() => Product, product => product.images)
    product: Product;
}
