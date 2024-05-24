import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonDirective, CardBodyComponent, CardComponent, CardHeaderComponent, ColComponent, FormControlDirective, FormLabelDirective, FormSelectDirective, RowComponent, TableActiveDirective, TableColorDirective, TableDirective, TextColorDirective } from '@coreui/angular';
import { EquipoModel} from '../models/equipo.model';
import { EquipoService } from '../services/equipo.service';

@Component({
  selector: 'app-equipo',
  standalone: true,
  imports: [RowComponent, ColComponent, CardComponent, CardHeaderComponent, 
            CardBodyComponent, FormsModule, FormSelectDirective,
            FormSelectDirective, FormLabelDirective, FormControlDirective, ButtonDirective,
            NgStyle, TextColorDirective, ReactiveFormsModule, TableDirective,
          TableColorDirective, TableActiveDirective],
  templateUrl: './equipo.component.html',
  styleUrl: './equipo.component.scss'
})
export class EquipoComponent {
  listaEquipos : EquipoModel[] = [];
  equipoModelo : EquipoModel = new EquipoModel();
  constructor(private equipoService: EquipoService){
    this.mostrarEquipos();
    

  }
  mostrarEquipos(){
    this.equipoService.getTodosLosEquipos().subscribe({
      next : (respuesta) => {
        console.log(respuesta);
        this.listaEquipos = respuesta;
      },
      error: (error) =>{
        console.log(error);
      }
    })
  }
  guardarEquipo(){
    console.log(this.equipoModelo);
    if (this.equipoModelo._id == ''){
      console.log("guardar", this.equipoModelo);
      this.agregarEquipo();

    } else{
      console.log("editar", this.equipoModelo);
      this.editarEquipo();

    }
  }
  agregarEquipo(){
    this.equipoService.agregarEquipo(this.equipoModelo).subscribe({
      next : (respuesta) => {
        console.log("se guardo existosamente",respuesta);
        this.mostrarEquipos();
        this.equipoModelo = new EquipoModel();
      },
      error: (error) => {
        console.log(error);
      }
      
    })
  }
  eliminarEquipo(item: EquipoModel) {
    console.log("item para eliminar", item)
    this.equipoService.eliminarEquipo(item._id).subscribe({
      next : (respuesta) => {
        console.log("se elimino existosamente",respuesta);
        this.mostrarEquipos();
        this.equipoModelo = new EquipoModel();
      },
      error: (error) => {
        console.log(error);
      }
      
    })

  }
  verEquipo(item: EquipoModel){
    this.equipoModelo = item;

  }
  editarEquipo(){
    //this.equipoModelo = item;
    this.equipoService.editarEquipo(this.equipoModelo).subscribe({
      next : (respuesta) => {
        console.log("se edito existosamente",respuesta);
        this.mostrarEquipos();
        this.equipoModelo = new EquipoModel();
      },
      error: (error) => {
        console.log(error);
      }
      
    })

  }

}
