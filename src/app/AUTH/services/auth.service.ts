import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(user:string, pass:string):boolean{//* AL INICIAR SESIÓN SE BUSCA AL USUARIO Y SI EXISTE, SE CONSIGUE EL TOKEN Y SE MANDA A LA PÁGINA DE INICIO
    // return this.http.post(`${this.apiURL}/api/Auth/login`,{userName: user, password: pass, token: ""}).pipe(tap(res =>{
    //   if(res){
    //     let obj = <Session>res;
    //     this.localStorageService.setUser(obj);
    //   }
    // }))
    return true;
  }
}
