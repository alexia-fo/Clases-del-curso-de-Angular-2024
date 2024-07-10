import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateUsuario, RespUsuarios, ResUsuarioDelete, UpdateUsuario, Usuario } from '../models/usuario.model';
import { catchError, Observable } from 'rxjs';
import { RespRoles } from '../models/roles.model';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient, private errorService: ErrorService
  ) { }

  getUsuarios(): Observable<RespUsuarios> {
    //Todo: por ahora no tiene manejo de errores
    return this.http.get<RespUsuarios>("http://localhost:8080/api/usuarios")
      .pipe(
        catchError(this.errorService.handleError)
      );
    ;
  }

  postUsuario(usuario: CreateUsuario): Observable<Usuario> {
    return this.http.post<Usuario>("http://localhost:8080/api/usuarios", { ...usuario });
  }


  getUsuario(idUsuario: number): Observable<Usuario> {
    //Todo: por ahora no tiene manejo de errores
    return this.http.get<Usuario>(`http://localhost:8080/api/usuarios/${idUsuario}`);
  }

  updateUsuario(idUsuario: number, usuario: UpdateUsuario): Observable<Usuario> {
    //Todo: por ahora no tiene manejo de errores
    return this.http.put<Usuario>(`http://localhost:8080/api/usuarios/${idUsuario}`, { ...usuario });
  }

  updateContra(idUsuario: number, contra: string): Observable<Usuario> {
    //Todo: por ahora no tiene manejo de errores
    return this.http.put<Usuario>(`http://localhost:8080/api/usuarios/cambioContra/${idUsuario}`, { contra });
  }

  getRoles(): Observable<RespRoles> {
    return this.http.get<RespRoles>("http://localhost:8080/api/roles");
  }

  deleteUsuario(idUsuario: number): Observable<ResUsuarioDelete> {
    return this.http.delete<ResUsuarioDelete>(`http://localhost:8080/api/usuarios/${idUsuario}`)
  }

  //para verificar si un correo se encuentra disponible
  verificarCorreo(correo: string): Observable<{ estaHabilitado: boolean }> {
    return this.http.get<{ estaHabilitado: boolean }>(`http://localhost:8080/api/usuarios/validaciones/verificarCorreo`, {
      params: {
        correo
      }
    })
  }


}
