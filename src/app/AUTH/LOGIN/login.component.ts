import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';
import { PrimeNGModule } from '../../prime-ng/prime-ng.module';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  providers: [CommonModule, RouterModule, MessageService],
  imports: [PrimeNGModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LOGINComponent {

  user:string = '';
  pass:string = '';

  constructor(private authService: AuthService, private router: Router, private messageService: MessageService){}
  
  onLogin():boolean{
    if(this.user && this.pass){
      // this.authService.login(this.user, this.pass).subscribe(data =>{
      //   if(data){
      //     this.router.navigate(['./Inicio']);
      //   }
      // },err =>{
      //   this.messageService.add({ severity: 'error', detail: 'Usuario o contraseña incorrectos.' })
      //     this.user = this.pass = '';
      // }
      // )

      //! USUARIO Y CONTRASEÑA DE PRUEBA
      return this.user=='admin' && this.pass=='abcde123';
    }
    else{ return false}
  }
}
