/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alumno } from './Alumno.entity';
import { AlumnosController } from './Alumnos.controller';
import { AlumnosService } from './Alumnos.service';

@Module({
  imports: [TypeOrmModule.forFeature([Alumno])],
  controllers: [AlumnosController],
  providers: [AlumnosService]
})
export class AlumnosModule {}