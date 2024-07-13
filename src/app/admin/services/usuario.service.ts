import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { CreateUsuario, RespUsuarios, ResUsuarioDelete, UpdateUsuario, Usuario } from '../models/usuario.model';
import { environment } from '../../../environments/environment.prod';
import { RespRoles } from '../models/rol.model';
import { ErrorService } from '../../services/error.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl = `${environment.API_URL}/api/usuarios`;

  constructor(
    private http: HttpClient,
    private errorService:ErrorService
  ) { }

  getUsuarios(): Observable<RespUsuarios> {
    //Todo: por ahora no tiene manejo de errores
    return this.http.get<RespUsuarios>(`${this.apiUrl}`)
    .pipe(
      catchError(this.errorService.handleError)
    );

  }

  postUsuario(usuario: CreateUsuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.apiUrl}`, { ...usuario })
    .pipe(
      catchError(this.errorService.handleError)
    );
  }

  getUsuario(idUsuario: number): Observable<Usuario> {
    //Todo: por ahora no tiene manejo de errores
    return this.http.get<Usuario>(`http://localhost:8080/api/usuarios/${idUsuario}`)
    .pipe(
      catchError(this.errorService.handleError)
    );
  }

  updateUsuario(idUsuario: number, usuario: UpdateUsuario): Observable<Usuario> {
    //Todo: por ahora no tiene manejo de errores
    return this.http.put<Usuario>(`http://localhost:8080/api/usuarios/${idUsuario}`, { ...usuario })
    .pipe(
      catchError(this.errorService.handleError)
    );
  }

  getRoles(): Observable<RespRoles> {
    return this.http.get<RespRoles>("http://localhost:8080/api/roles")
    .pipe(
      catchError(this.errorService.handleError)
    );
  }

  deleteUsuario(idUsuario: number): Observable<ResUsuarioDelete> {
    return this.http.delete<ResUsuarioDelete>(`http://localhost:8080/api/usuarios/${idUsuario}`)
    .pipe(
      catchError(this.errorService.handleError)
    );
  }

  verificarCorreo(correo: string): Observable<{ estaHabilitado: boolean }> {
    return this.http.get<{ estaHabilitado: boolean }>(`http://localhost:8080/api/usuarios/validaciones/verificarCorreo`, {
      params: {
        correo
      }
    })
    .pipe(
      catchError(this.errorService.handleError)
    );
  }
}
