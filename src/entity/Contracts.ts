import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
    CreateDateColumn,
    UpdateDateColumn
} from "typeorm";
import {Customer} from "./Customer";
import {Vehicles} from "./Vehicles";
import {IsNotEmpty} from "class-validator";

@Entity({name:"contracts"})
export class Contracts {
    @PrimaryGeneratedColumn()
    contract_id!: number;

    @ManyToOne(() => Customer)
    @JoinColumn({ name: 'customer_id' })
    @IsNotEmpty()
    customer!: Customer;
  
    @ManyToOne(() => Vehicles)
    @JoinColumn({ name: 'vehicle_id' })
    @IsNotEmpty()
    vehicles!: Vehicles;

    @Column()
    @IsNotEmpty()
    start_date!: Date;

    @Column()
    @IsNotEmpty()
    end_date!: Date;

    @Column()
    @IsNotEmpty()
    duration!: number;

    @Column()
    @IsNotEmpty()
    distance!: number;

    @Column()
    @IsNotEmpty()
    total_price!: number;

    @Column()
    @IsNotEmpty()
    price_month!: number;

    @Column()
    @IsNotEmpty()
    odometer!: number;

    @Column()
    @IsNotEmpty()
    start_mileage!: number;

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;

}