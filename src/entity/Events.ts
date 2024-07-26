import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn} from "typeorm";
import { Contracts } from "./Contracts";
import {IsNotEmpty} from "class-validator";

@Entity({name:"events"})
export class Events {
    @PrimaryGeneratedColumn()
    event_id!: number;

    @ManyToOne(() => Contracts)
    @JoinColumn({ name: 'contract_id' })
    @IsNotEmpty()
    contract!: Contracts;

    @Column()
    @IsNotEmpty()
    event_date!: Date;

    @Column()
    @IsNotEmpty()
    event_type!: string;

    @Column()
    @IsNotEmpty()
    comment!: string;

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;

}