import { Pipe, PipeTransform } from '@angular/core';
import { CatalogoService } from '../../MAIN/services/catalogo.service';
import { Observable, map, of } from 'rxjs';
import { RutaCaseta } from '../../MAIN/interfaces/catalogos';

@Pipe({
  name: 'catalogo',
  standalone: true
})
export class CatalogoPipe implements PipeTransform {

  constructor(private catalogoService: CatalogoService){}

  transform(data:number,id:string, data2?:any): Observable<any> {
    let observable$:Observable<string> = new Observable<string>
    switch (id) {
      case "combustible":
        return this.catalogoService.httpGetCombustibleID(data).pipe(map((combustible)=>combustible.tipo));    
      case "transporte":
        return this.catalogoService.httpGetTransporteID(data).pipe(map((transporte)=>transporte.name));
      case "ruta":
        return this.catalogoService.httpGetRutaID(data).pipe(map((ruta)=>ruta.name));
      case "caseta":
        return this.catalogoService.httpGetCasetaID(data).pipe(map((caseta)=>caseta.name));
      case "tarifa":
        return this.catalogoService.httpGetTarifa().pipe(map((tarifa)=>
          {
            let precio:number = 0;
            tarifa.forEach((t)=>{
              if(t.idCaseta == data && t.idTransporte == data2){
                precio = t.precio;
              }
            })
            return precio;
          }))
    }
    return observable$;
  }

}
