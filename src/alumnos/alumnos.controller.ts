/* eslint-disable prettier/prettier */
import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Alumno } from './Alumno.entity';
import { AlumnosService } from './Alumnos.service';

@Crud({
    model: {
        type: Alumno
    }
})
@Controller('Alumnos')
export class AlumnosController implements CrudController<Alumno>{
  
    constructor(public service: AlumnosService) {}
  
}
