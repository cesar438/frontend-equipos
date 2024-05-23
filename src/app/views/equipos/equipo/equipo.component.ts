import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonDirective, CardBodyComponent, CardComponent, CardHeaderComponent, ColComponent, FormControlDirective, FormLabelDirective, FormSelectDirective, RowComponent, TableActiveDirective, TableColorDirective, TableDirective, TextColorDirective } from '@coreui/angular';


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

}
