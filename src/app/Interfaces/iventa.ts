import { IDetalleVenta } from './idetalle-venta';

export interface IVenta {
    idVenta: number,
    numeroDocumento: string,
    tipoPago: string,
    totalTexto: string,
    fechaRegistro: string,
    detalleVenta: IDetalleVenta[]
}
