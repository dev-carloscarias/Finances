import { DecimalPipe } from "@angular/common";

export interface Transaction {
    fecha: number;
    tipo: number;
    cantidad: number;
    detalle: string;
    source: string;
}