/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Alumno } from './Alumno.entity';

@Injectable()
export class AlumnosService extends TypeOrmCrudService<Alumno> {
    constructor(
        @InjectRepository(Alumno) repo
    ) { super(repo) }


}