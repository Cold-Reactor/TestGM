import { Pipe, PipeTransform } from '@angular/core';
import { CatalogoService } from '../../MAIN/services/catalogo.service';
import { Observable, map, of } from 'rxjs';

@Pipe({
  name: 'catalogo',
  standalone: true
})
export class CatalogoPipe implements PipeTransform {

  constructor(private catalogoService: CatalogoService){}

  transform(data:number,id: string,data2?:number): Observable<any> {
    let observable$:Observable<string> = new Observable<string>
    switch (id) {
      case "combustible":
        return this.catalogoService.httpGetCombustibleID(data).pipe(map((combustible)=>combustible.tipo));   
      case "combustiblePrecio":
        return this.catalogoService.httpGetCombustibleID(data).pipe(map((combustible)=>combustible.precio));   
        
      case "transporte":
        return this.catalogoService.httpGetTransporte().pipe(map((transporte)=>transporte.map((t)=>t.name)));
        // console.log(data);
        // this.catalogoService.httpGetTarifaCasetaID(data).subscribe((tarifa)=>{console.log(tarifa)});
        // return this.catalogoService.httpGetTarifaCasetaID(data);
        // return this.catalogoService.httpGetTarifaCasetaID(data).pipe(map((transporte)=>transporte.tarifasTransporte.map((t)=>t.idTransporte)));
      case "transporteName":
        return this.catalogoService.httpGetTransporteID(data).pipe(map((transporte)=>transporte.name));
      case "transporteCombustible":
        return this.catalogoService.httpGetTransporteID(data).pipe(map((transporte)=>transporte.idCombustible));
      // case "d":
      //   return "Unidades";
      // case "s":
      //   return "Precio Combustible";
      case "ruta":
        return this.catalogoService.httpGetRutaID(data).pipe(map((ruta)=>ruta.name));
      case "rutakm":
        return this.catalogoService.httpGetRutaID(data).pipe(map((ruta)=>ruta.kilometros));
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
