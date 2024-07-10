import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateUsuario, RespUsuarios, UpdateUsuario, Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(
    private http: HttpClient
  ) { }

  getUsuarios(): Observable<RespUsuarios> {
    //Todo: por ahora no tiene manejo de errores
    return this.http.get<RespUsuarios>("http://localhost:8080/api/usuarios");
  }

  postUsuario(usuario: CreateUsuario): Observable<Usuario> {
    return this.http.post<Usuario>("http://localhost:8080/api/usuarios", { ...usuario });
  }

  getUsuario(idUsuario:number):Observable<Usuario>{
    //Todo: por ahora no tiene manejo de errores
    return this.http.get<Usuario>(`http://localhost:8080/api/usuarios/${idUsuario}`);
  }

  updateUsuario(idUsuario:number, usuario:UpdateUsuario):Observable<Usuario>{
    //Todo: por ahora no tiene manejo de errores
    return this.http.put<Usuario>(`http://localhost:8080/api/usuarios/${idUsuario}`, {...usuario});
  }


}
