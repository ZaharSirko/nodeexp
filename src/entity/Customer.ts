import {Entity, PrimaryGeneratedColumn, Column, Unique, CreateDateColumn, UpdateDateColumn,} from "typeorm";
import {IsEmail, IsNotEmpty} from "class-validator"

@Entity({name:"users"})
@Unique('customer_unique_constraint', ['email'])
export class Customer {
    @PrimaryGeneratedColumn()
    customer_id!: number;

    @Column()
    @IsNotEmpty()
    customer_name!: string;

    @Column({ unique: true })
    @IsEmail()
    email!: string;

    @Column()
    @IsNotEmpty()
    phone!: string;

    @Column()
    @IsNotEmpty()
    address!:string;

    @Column()
    @IsNotEmpty()
    city!: string;

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;
}