export interface Combustible {
    idCombustible: number;
    tipo: string;
    precio: number;
}
export interface Transporte {
    idTransporte: number;
    name: string;
    idCombustible: number;
    ejes: number;
}
export interface Tarifa {
    idTarifa: number;
    idTransporte: number;
    idCaseta: number;
    precio: number;
}
export interface Caseta {
    idCaseta: number;
    name: string;
}
export interface RutaCaseta {
    idRutaCaseta: number;
    idRuta: number;
    idCaseta: number;
}
export interface Ruta {
    idRuta: number;
    name: string;
    kilometros: number;
}
export interface ViajeRuta {
    idViajeRuta: number;
    idViaje: number;
    idRuta: number;
    ida?: number;
    regreso?: number;
}
export interface Viaje {
    idViaje: number;
    fechaPartida: string;
    fechaRegreso?: string;
    tipo: number;
    viaticos: number;
    pasajeros: number;
}

export interface Usuario {
    idUsuario: number;
    name: string;
    pass: string;
}