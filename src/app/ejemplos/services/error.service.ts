import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente o de red
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // El switch-case iría en este punto
      switch (error.status) {
        case 400:
          errorMessage = 'Solicitud incorrecta. Por favor verifica los datos.';
          break;
        case 401:
          errorMessage = 'No autorizado. Por favor inicia sesión.';
          break;
        case 403:
          errorMessage = 'Prohibido. No tienes permiso para realizar esta acción.';
          break;
        case 404:
          errorMessage = 'No encontrado. El recurso solicitado no existe.';
          break;
        case 500:
          errorMessage = 'Error del servidor. Por favor intenta nuevamente más tarde.';
          break;
        default:
          errorMessage = `Error inesperado: ${error.statusText}`;
          break;
      }

    }
    // Devolver un observable con un mensaje de error
    return throwError(() => errorMessage);
  }



}
