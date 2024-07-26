import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    Unique,
    UpdateDateColumn, CreateDateColumn
} from "typeorm";
import {IsNotEmpty} from "class-validator";

@Entity({name:"vehicles"})
@Unique('vehicles_unique_constraint', ['vin','license_plate'])
export class Vehicles {
    @PrimaryGeneratedColumn()
    vehicle_id!: number;

    @Column({ unique: true })
    @IsNotEmpty()
    vin!: string;

    @Column({ unique: true })
    @IsNotEmpty()
    license_plate!: string;

    @Column()
    @IsNotEmpty()
    brand!: string;

    @Column()
    @IsNotEmpty()
    model!: string;
    
    @Column()
    @IsNotEmpty()
    year!: string;
    
    @Column()
    @IsNotEmpty()
    fuel_type !: string;

    @Column()
    @IsNotEmpty()
    power!: number;

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;
}