import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({name:"users"})
export class User {
    @PrimaryGeneratedColumn()
    user_id!: number;

    @Column()
    user_name!: string;

    @Column()
    email!: string;

    @Column()
    phone!: string;

    @Column()
    street!:string;

    @Column()
    city!: string;

    // constructor(id: number, name: string, email: string,phone: string,street:string,city: string) {
    //     this.user_id = id;
    //     this.user_name = name;
    //     this.email = email;
    //     this.phone = phone;
    //     this.street = street;
    //     this.city = city;
    // }
}