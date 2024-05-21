import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';
import { PrimeNGModule } from '../../prime-ng/prime-ng.module';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  providers: [MessageService],
  imports: [CommonModule, RouterModule,PrimeNGModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  user:string = '';
  pass:string = '';

  constructor(private authService: AuthService, private router: Router, private messageService: MessageService){}
  
  onLogin():void{

    // if(this.user && this.pass){
    //   this.authService.login(this.user, this.pass).subscribe({
    //     next:(data)=>{
    //       console.log(data);
    //       this.router.navigate(['./Inicio']);
    //     },
    //     error:() =>{
    //       this.messageService.add({ severity: 'error', detail: 'Usuario o contraseña incorrectos.' })
    //       this.user = this.pass = '';  
    //     }
    //   })
    // }

    // //! USUARIO Y CONTRASEÑA DE PRUEBA
    if(this.user=='Admin' && this.pass=='PassGM'){
      this.router.navigate(['./inicio/catalogos']);
    }
    else{
      this.messageService.add({ severity: 'error', summary:'Usuario y/o contraseña inválidos.' , detail: 'Intente de nuevo.' })
      this.user = this.pass = '';
    }
  }
}
