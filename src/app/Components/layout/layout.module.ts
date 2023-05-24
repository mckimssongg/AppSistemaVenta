import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { ReporteComponent } from './Pages/reporte/reporte.component';
import { UsuarioComponent } from './Pages/usuario/usuario.component';
import { HistorialVentaComponent } from './Pages/historial-venta/historial-venta.component';
import { DashBoardComponent } from './Pages/dash-board/dash-board.component';
import { ProductoComponent } from './Pages/producto/producto.component';
import { VentaComponent } from './Pages/venta/venta.component';
import { SharedModule } from 'src/app/Reusable/shared/shared.module';


@NgModule({
  declarations: [
    ReporteComponent,
    UsuarioComponent,
    HistorialVentaComponent,
    DashBoardComponent,
    ProductoComponent,
    VentaComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule,
  ]
})
export class LayoutModule { }
