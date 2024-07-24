import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn} from "typeorm";
import { Contracts } from "./Contracts";

@Entity({name:"events"})
export class Events {
    @PrimaryGeneratedColumn()
    event_id!: number;

    @ManyToOne(() => Contracts)
    @JoinColumn({ name: 'contract_id' })
    contract!: Contracts;

    @Column()
    event_date!: Date;

    @Column()
    event_type!: string;

    @Column()
    comment!: string;

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;

}