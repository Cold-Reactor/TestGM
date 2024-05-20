import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable, of } from 'rxjs';
import { Caseta, Combustible, Ruta, RutaCaseta, Tarifa, TarifasTransporte, Transporte, Viaje, ViajeRuta } from '../interfaces/catalogos';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {
  apiURL: string = environment._urlApi;
  constructor(private http: HttpClient) {}
  //$ CRUD COMBUSTIBLE
  httpGetCombustible():Observable<Combustible[]>{
    return this.http.get<Combustible[]>(`${this.apiURL}/Combustibles`)
  }
  httpGetCombustibleID(id:number):Observable<Combustible>{
    return this.http.get<Combustible>(`${this.apiURL}/Combustibles/${id}`)
  }
  httpPostCombustible(combustible:Combustible){
    this.http.post(`${this.apiURL}/Combustibles`,combustible)
  }
  httpPutCombustible(combustible:Combustible){
    this.http.put(`${this.apiURL}/Combustibles/${combustible.idCombustible}`,combustible)
  }
  httpDeleteCombustible(id:number){
    this.http.delete(`${this.apiURL}/Combustibles/${id}`)
  }

  //$ CRUD TRANSPORTE
  httpGetTransporte():Observable<Transporte[]>{
    return this.http.get<Transporte[]>(`${this.apiURL}/Transportes`)
  }
  httpGetTransporteID(id:number):Observable<Transporte>{
    return this.http.get<Transporte>(`${this.apiURL}/Transportes/${id}`)
  }
  httpPostTransporte(transporte:Transporte){
    this.http.post(`${this.apiURL}/Transportes`,transporte)
  }
  httpPutTransporte(transporte:Transporte){
    this.http.put(`${this.apiURL}/Transportes/${transporte.idTransporte}`,transporte)
  }
  httpDeleteTransporte(id:number){
    this.http.delete(`${this.apiURL}/Transportes/${id}`)
  }

  //$ CRUD TARIFA
  httpGetTarifa():Observable<Tarifa[]>{
    return this.http.get<Tarifa[]>(`${this.apiURL}/Tarifas`)
  }
  httpGetTarifaID(id:number):Observable<Tarifa>{
    return this.http.get<Tarifa>(`${this.apiURL}/Tarifas/${id}`)
  }
  httpPostTarifa(tarifa:Tarifa){
    this.http.post(`${this.apiURL}/Tarifas`,tarifa)
  }
  httpPutTarifa(tarifa:Tarifa){
    this.http.put(`${this.apiURL}/Tarifas/${tarifa.idTarifa}`,tarifa)
  }
  httpDeleteTarifa(id:number){
    this.http.delete(`${this.apiURL}/Tarifas/${id}`)
  }
  //*----------
  httpGetTarifaCasetaID(idCaseta:number):Observable<TarifasTransporte>{
    return this.http.get<TarifasTransporte>(`${this.apiURL}/Tarifas/Caseta/${idCaseta}`)
  }
  //*----------


  //$ CRUD CASETA
  httpGetCaseta():Observable<Caseta[]>{
    return this.http.get<Caseta[]>(`${this.apiURL}/Casetas`)
  }
  httpGetCasetaID(id:number):Observable<Caseta>{
    return this.http.get<Caseta>(`${this.apiURL}/Casetas/${id}`)
  }
  httpPostCaseta(caseta:Caseta){
    this.http.post(`${this.apiURL}/Casetas`,caseta)
  }
  httpPutCaseta(caseta:Caseta){
    this.http.put(`${this.apiURL}/Casetas/${caseta.idCaseta}`,caseta)
  }
  httpDeleteCaseta(id:number){
    this.http.delete(`${this.apiURL}/Casetas/${id}`)
  }

  //$ CRUD RUTA_CASETA
  httpGetRuta_caseta():Observable<RutaCaseta[]>{
    return this.http.get<RutaCaseta[]>(`${this.apiURL}/Ruta_caseta`)
  }
  httpGetRuta_casetaID(id:number):Observable<RutaCaseta>{
    return this.http.get<RutaCaseta>(`${this.apiURL}/Ruta_caseta/${id}`)
  }
  httpPostRuta_caseta(ruta_caseta:RutaCaseta){
    this.http.post(`${this.apiURL}/Ruta_caseta`,ruta_caseta)
  }
  httpPutRuta_caseta(ruta_caseta:RutaCaseta){
    this.http.put(`${this.apiURL}/Ruta_caseta/${ruta_caseta.idRutaCaseta}`,ruta_caseta)
  }
  httpDeleteRuta_caseta(id:number){
    this.http.delete(`${this.apiURL}/Ruta_caseta/${id}`)
  }

  //$ CRUD RUTA
  httpGetRuta():Observable<Ruta[]>{
    return this.http.get<Ruta[]>(`${this.apiURL}/Rutas`)
  }
  httpGetRutaID(id:number):Observable<Ruta>{
    return this.http.get<Ruta>(`${this.apiURL}/Rutas/${id}`)
  }
  httpPostRuta(ruta:Ruta){
    this.http.post(`${this.apiURL}/Rutas`,ruta)
  }
  httpPutRuta(ruta:Ruta){
    this.http.put(`${this.apiURL}/Rutas/${ruta.idRuta}`,ruta)
  }
  httpDeleteRuta(id:number){
    this.http.delete(`${this.apiURL}/Rutas/${id}`)
  }

  //$ CRUD VIAJE_RUTA
  httpGetViaje_ruta():Observable<ViajeRuta[]>{
    return this.http.get<ViajeRuta[]>(`${this.apiURL}/Viaje_ruta`)
  }
  httpGetViaje_rutaID(id:number):Observable<ViajeRuta>{
    return this.http.get<ViajeRuta>(`${this.apiURL}/Viaje_ruta/${id}`)
  }
  httpPostViaje_ruta(viaje_ruta:ViajeRuta){
    this.http.post(`${this.apiURL}/Viaje_ruta`,viaje_ruta)
  }
  httpPutViaje_ruta(viaje_ruta:ViajeRuta){
    this.http.put(`${this.apiURL}/Viaje_ruta/${viaje_ruta.idViajeRuta}`,viaje_ruta)
  }
  httpDeleteViaje_ruta(id:number){
    this.http.delete(`${this.apiURL}/Viaje_ruta/${id}`)
  }

  //$ CRUD VIAJE
  httpGetViaje():Observable<Viaje[]>{
    return this.http.get<Viaje[]>(`${this.apiURL}/Viaje`)
  }
  httpGetViajeID(id:number):Observable<Viaje>{
    return this.http.get<Viaje>(`${this.apiURL}/Viaje/${id}`)
  }
  httpPostViaje(viaje:Viaje){
    this.http.post(`${this.apiURL}/Viaje`,viaje)
  }
  httpPutViaje(viaje:Viaje){
    this.http.put(`${this.apiURL}/Viaje/${viaje.idViaje}`,viaje)
  }
  httpDeleteViaje(id:number){
    this.http.delete(`${this.apiURL}/Viaje/${id}`)
  }

}
