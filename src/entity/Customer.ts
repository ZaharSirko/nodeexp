import {Entity, PrimaryGeneratedColumn, Column, Unique, CreateDateColumn, UpdateDateColumn,} from "typeorm";
import {IsEmail} from "class-validator"

@Entity({name:"users"})
@Unique('customer_unique_constraint', ['email'])
export class Customer {
    @PrimaryGeneratedColumn()
    customer_id!: number;

    @Column()
    customer_name!: string;

    @Column({ unique: true })
    @IsEmail()
    email!: string;

    @Column()
    phone!: string;

    @Column()
    address!:string;

    @Column()
    city!: string;

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;
}