import {HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { EquipoModel } from "../models/equipo.model";
@Injectable({
    providedIn : 'root'
})
export class EquipoService {
    //url de su api (backend)
    private API_URL = 'http://localhost:7000/equipos'
    constructor(private http: HttpClient) {

    }
    getTodosLosEquipos ():Observable<EquipoModel[]> {
        return this.http.get<EquipoModel[]>(`${this.API_URL}/mostrarEquipos`);
    }
    agregarEquipo(equipo: EquipoModel): Observable<EquipoModel> {
        return this.http.post<EquipoModel>(`${this.API_URL}/registrar`, equipo);
    }
    editarEquipo(equipo: EquipoModel): Observable<EquipoModel> {
        return this.http.put<EquipoModel>(`${this.API_URL}/modificar/${equipo._id}`, equipo);
    }
    
    eliminarEquipo(iditem: string): Observable<EquipoModel> {
        console.log(iditem);
        return this.http.delete<EquipoModel>(`${this.API_URL}/eliminar/${iditem}`);
    }

}