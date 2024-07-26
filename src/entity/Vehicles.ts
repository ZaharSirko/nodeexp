import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    Unique,
    UpdateDateColumn, CreateDateColumn
} from "typeorm";

@Entity({name:"vehicles"})
@Unique('vehicles_unique_constraint', ['vin','license_plate'])
export class Vehicles {
    @PrimaryGeneratedColumn()
    vehicle_id!: number;

    @Column({ unique: true })
    vin!: string;

    @Column({ unique: true })
    license_plate!: string;

    @Column()
    brand!: string;

    @Column()
    model!: string;
    
    @Column()
    year!: string;
    
    @Column()
    fuel_type !: string;

    @Column()
    power!: number;

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;
}