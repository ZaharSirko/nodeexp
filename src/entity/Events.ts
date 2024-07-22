import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({name:"events"})
export class Events {
    @PrimaryGeneratedColumn()
    event_id!: number;

    @Column()
    type!: string;

    @Column()
    comment!: string;

    // constructor(event_id: number, type: string, comment: string) {
    //     this.event_id = event_id;
    //     this.type = type;
    //     this.comment = comment;
    // }
}