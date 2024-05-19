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
  
  onLogin():void{

    //! USUARIO Y CONTRASEÑA DE PRUEBA
    if(this.user=='admin' && this.pass=='123456789'){
      // this.authService.login(this.user, this.pass).subscribe(data =>{
      //   if(data){
      //     this.router.navigate(['./Inicio']);
      //   }
      // },err =>{
      //   this.messageService.add({ severity: 'error', detail: 'Usuario o contraseña incorrectos.' })
      //     this.user = this.pass = '';
      // }
      // )

      this.router.navigate(['./Inicio']);
    }
    else{
      this.messageService.add({ severity: 'error', summary:'Usuario y/o contraseña inválidos.' , detail: 'Intente de nuevo.' })
      this.user = this.pass = '';
    }
  }
}
