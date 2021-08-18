import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity('blogs')
export class Blog {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    author: string;

    @Column()
    title: string;

    @Column()
    content: string;

}