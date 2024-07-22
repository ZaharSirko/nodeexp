import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({name:"contracts"})
export class Contracts {
    @PrimaryGeneratedColumn()
    contract_id!: number;

    @Column()
    duration!: number;

    @Column()
    distance!: number;

    @Column()
    start_date!: Date;

    @Column()
    end_date!: Date;

    @Column()
    total_price!: number;

    @Column()
    price_month!: number;

    @Column()
    odometer!: number;

    @Column()
    start_mileage!: number;

    // constructor(contract_id: number, duration: number, distance: number, start_date: Date, end_date: Date, total_price: number, price_month: number, odometer: number, start_mileage: number) {
    //     this.contract_id = contract_id;
    //     this.duration = duration;
    //     this.distance = distance;
    //     this.start_date = start_date;
    //     this.end_date = end_date;
    //     this.total_price = total_price;
    //     this.price_month = price_month;
    //     this.odometer = odometer;
    //     this.start_mileage = start_mileage;
    // }



}