import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({name:"vehicles"})
export class Vehicles {
    @PrimaryGeneratedColumn()
    vehicle_id!: number;

    @Column()
    model!: string;

    @Column()
    number!: number;

    @Column()
    date!: string;

    @Column()
    flue_type!: string;

    @Column()
    engine_power!:string;

    @Column()
    serial_number!: string;

    // constructor(vehicle_id: number, model: string, number: number, date: string, flue_type: string, engine_power: string, serial_number: string) {
    //     this.vehicle_id = vehicle_id;
    //     this.model = model;
    //     this.number = number;
    //     this.date = date;
    //     this.flue_type = flue_type;
    //     this.engine_power = engine_power;
    //     this.serial_number = serial_number;
    // }


}