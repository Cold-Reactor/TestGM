import { Component } from '@angular/core';
import { PrimeNGModule } from '../../prime-ng/prime-ng.module';
import { Router, RouterModule } from '@angular/router';
import { MenuComponent } from '../../COMMONS/menu/menu.component';
import { MenuItem } from 'primeng/api';
import { CatalogoService } from '../services/catalogo.service';
import { Observable } from 'rxjs';
import { Combustible, Transporte, Viaje, ViajeRuta } from '../interfaces/catalogos';
import { CommonModule } from '@angular/common';
import { CatalogoPipe } from '../../COMMONS/pipes/catalogo.pipe';


@Component({
    selector: 'app-inicio',
    standalone: true,
    providers: [RouterModule],
    templateUrl: './inicio.component.html',
    styleUrl: './inicio.component.css',
    imports: [CommonModule, PrimeNGModule, MenuComponent, CatalogoPipe]
})
export class InicioComponent {
  items: MenuItem[] | undefined;//$ OBJETOS DEL MENÚ QUE CONTIENEN ENLACES A OTRAS PÁGINAS
  activeItem: MenuItem | undefined;//$ ES LA PÁGINA ACTUAL
  option:number = 1;//$ OPCIONES DEL MENÚ
  _observable$: Observable<any> = new Observable();
  _transporte$: Observable<any> = new Observable();
  _rutaCaseta$: Observable<any> = new Observable();
  _ruta$: Observable<any> = new Observable();
  presupuesto:boolean=false;
  calculo:boolean=false;
  fechas:string[] = [];
  viaje: Viaje = {idViaje:0,fechaPartida:'',fechaRegreso:'',tipo:0,viaticos:0,pasajeros:1};
  viajeRuta:ViajeRuta= {idViajeRuta:0,idViaje:0,idRuta:0,ida:0,regreso:0};
  transporte!:number
  offset:number;
  viatico:number = 0;

  tipoViaje:{name:string,id:number}[] = [{name:'Una Direccion',id:0},{name:'Redondo',id:1}];
  constructor(private router: Router,private catalogoService: CatalogoService) {
    this._transporte$ = this.catalogoService.httpGetTransporte();
    this._ruta$ = this.catalogoService.httpGetRuta();
    this._rutaCaseta$ = this.catalogoService.httpGetRuta_caseta();
    this._observable$ = this.catalogoService.httpGetRuta()
    this.offset = (new Date().getTimezoneOffset())
  }

  ngOnInit() {
    this.items = [
      { label: 'Rutas', icon: 'pi pi-calendar', command: () =>{this.option=1;this._observable$ = this.catalogoService.httpGetRuta()}},
      { label: 'Casetas', icon: 'pi pi-fw pi-chart-bar',command: () =>{this.option=2;this._observable$ = this.catalogoService.httpGetCaseta()}},
      { label: 'Unidades', icon: 'pi pi-fw pi-check', command: () =>{this.option=3;this._observable$ = this.catalogoService.httpGetTransporte()}},
      { label: 'Precio Combustible', icon: 'pi pi-fw pi-users',command: () =>{this.option=4;this._observable$ = this.catalogoService.httpGetCombustible()}}    
    ];
  }

  cambiarFormatoFechaPartida(){//* AGREGA LA FECHASOLICITUD AL OBJETO DE TIEMPO EXTRA
    this.viaje.fechaPartida =  new Date(this.fechas[0]).toISOString().slice(0, -1);
    console.log(this.viaje.fechaPartida);

  }
  cambiarFormatoFechaRegreso(){
      this.viaje.fechaRegreso = new Date(this.fechas[1]).toISOString().slice(0, -1);
      this.viatico = (new Date(this.fechas[1]).getTime() - new Date(this.fechas[0]).getTime()) / (1000 * 60 * 60 * 24) * (375*6)
      console.log(this.viaje.fechaRegreso);
    }
}
