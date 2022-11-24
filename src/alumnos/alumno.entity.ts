/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjsx/crud/lib/crud";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Alumno {

    @PrimaryGeneratedColumn()
    id: number; 

    @ApiProperty()
    @Column()
    firstName: string;

    @ApiProperty()
    @Column()
    lastName: string;
}
