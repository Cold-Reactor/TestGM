import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../../environments/environment.development';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiURL: string = environment._urlApi;

  constructor(private http: HttpClient) { }

  // login(user:string, pass:string):Observable<{id:number}>{//* AL INICIAR SESIÓN SE BUSCA AL USUARIO Y SI EXISTE, SE CONSIGUE EL TOKEN Y SE MANDA A LA PÁGINA DE INICIO
  //   return this.http.post<{id:number}>(`${this.apiURL}/Usuarios/login`,{name: user, pass: pass})
  // }

  
}
