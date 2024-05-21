import { Component } from '@angular/core';
import { PrimeNGModule } from '../../prime-ng/prime-ng.module';
import { Router, RouterModule } from '@angular/router';
import { MenuComponent } from '../../COMMONS/menu/menu.component';
import { MenuItem } from 'primeng/api';
import { CatalogoService } from '../services/catalogo.service';
import { Observable, tap } from 'rxjs';
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
  _tarifa$: Observable<any> = new Observable();
  _rutaCaseta$: Observable<any> = new Observable();
  _ruta$: Observable<any> = new Observable();
  _combustibleTotal$: Observable<any> = new Observable();
  _kilometrosTotal$: Observable<any> = new Observable();
  _kilometros$: Observable<any> = new Observable();
  _CombustibleLitro$: Observable<any> = new Observable();
  
  fechas:Date[] = [];
  viaje: Viaje = {idViaje:0,fechaPartida:'',fechaRegreso:'',tipo:0,viaticos:0,pasajeros:1};
  viajeRuta:ViajeRuta= {idViajeRuta:0,idViaje:0,idRuta:0,ida:0,regreso:0};
  viajeRutaIda: ViajeRuta = {idViajeRuta:0,idViaje:0,idRuta:0,ida:0,regreso:0};
  viajeRutaRegreso: ViajeRuta = {idViajeRuta:0,idViaje:0,idRuta:0,ida:0,regreso:0};

  tipoViaje:{name:string,id:number}[] = [{name:'Una Direccion',id:0},{name:'Redondo',id:1}];
  transporte!:number
  offset:number;
  viatico:number = 0;
  presupuesto:boolean=false;
  calculo:boolean=false;


  
  constructor(private router: Router,private catalogoService: CatalogoService) {
    this._transporte$ = this.catalogoService.httpGetTransporte();
    this._tarifa$ = this.catalogoService.httpGetTarifa();
    this._ruta$ = this.catalogoService.httpGetRuta();
    this._rutaCaseta$ = this.catalogoService.httpGetRuta_caseta();
    this._observable$ = this.catalogoService.httpGetRuta()
    this.offset = (new Date().getTimezoneOffset())
  }

  ngOnInit() {
    this.items = [
      { label: 'Rutas', icon: 'pi pi-map', command: () =>{this.option=1;this._observable$ = this.catalogoService.httpGetRuta()}},
      { label: 'Casetas', icon: 'pi pi-fw pi-building-columns',command: () =>{this.option=2;this._observable$ = this.catalogoService.httpGetCaseta()}},
      { label: 'Unidades', icon: 'pi pi-fw pi-car', command: () =>{this.option=3;this._observable$ = this.catalogoService.httpGetTransporte()}},
      { label: 'Precio Combustible', icon: 'pi pi-fw pi-dollar',command: () =>{this.option=4;this._observable$ = this.catalogoService.httpGetCombustible()}}    
    ];
  }

  cambiarFormatoFechaPartida(){//$ AGREGA LA FECHASPARTIDA AL OBJETO DE VIAJE
    this.viaje.fechaPartida = new Date(this.fechas[0].getTime() - (new Date().getTimezoneOffset() * 60000)).toISOString();
  }
  cambiarFormatoFechaRegreso(){//$ AGREGA LA FECHASREGRESO AL OBJETO DE VIAJE
      this.viaje.fechaRegreso = new Date(this.fechas[1].getTime() - (new Date().getTimezoneOffset() * 60000)).toISOString();
      this.viatico = ((this.fechas[1].getTime() - this.fechas[0].getTime()) / (24 * 60 * 60 * 1000)) * (375*6)
  }

  calculador(){ //$ FUNCION QUE CALCULA EL PRESUPUESTO DE UN VIAJE
    this.postDeViajes()
    this._combustibleTotal$ = this.catalogoService.httpGetCombustibleTotal(this.viajeRuta.ida!,this.viajeRuta.regreso!.toString(),this.transporte)
    this._kilometrosTotal$ = this.catalogoService.httpGetKilometrosPrecio(this.viajeRuta.ida!,this.viajeRuta.regreso!,this.transporte)
    this._CombustibleLitro$ = this.catalogoService.httpGetCombustiblePrecio(this.transporte)
    this._kilometros$ = this.catalogoService.httpGetRutaKm(this.viajeRuta.ida!,this.viajeRuta.regreso!)
  }

  postDeViajes(){ //$ FUNCION QUE GUARDA LOS VIAJES EN LA BASE DE DATOS
    // console.log(this.viaje)
    // this.catalogoService.httpPostViaje(this.viaje).pipe(tap(data=>{
    //   if(data && data.id){
    //     console.log(data)
    //     this.viajeRutaIda.idViaje = data.id
    //     this.viajeRutaIda.idRuta = this.viajeRuta.ida!
    //     this.viajeRutaRegreso.ida = 1
    //     this.catalogoService.httpPostViaje_ruta(this.viajeRutaIda)
    //     if(this.viajeRuta.regreso){
    //       this.viajeRutaRegreso.idViaje = data.id
    //       this.viajeRutaRegreso.idRuta = this.viajeRuta.ida!
    //       this.viajeRutaRegreso.regreso = 1
    //       this.catalogoService.httpPostViaje_ruta(this.viajeRutaRegreso)
    //     }
    //   }
    // })).subscribe()
  }

  onPrint() {//$ FUNCIÓN QUE SE LLAMA AL HACER CLICK EN EL BOTÓN DE IMPRIMIR
    const printContents = document.getElementById('imprimir')!.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    this.router.navigate([`./dashboard/3/gafetes`])
    window.location.reload();
  }
}
