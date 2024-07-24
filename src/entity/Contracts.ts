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

@Entity({name:"contracts"})
export class Contracts {
    @PrimaryGeneratedColumn()
    contract_id!: number;

    @ManyToOne(() => Customer)
    @JoinColumn({ name: 'user_id' })
    customer!: Customer;
  
    @ManyToOne(() => Vehicles)
    @JoinColumn({ name: 'vehicle_id' })
    vehicles!: Vehicles;

    @Column()
    start_date!: Date;

    @Column()
    end_date!: Date;

    @Column()
    duration!: number;

    @Column()
    distance!: number;

    @Column()
    total_price!: number;

    @Column()
    price_month!: number;

    @Column()
    odometer!: number;

    @Column()
    start_mileage!: number;

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;

}