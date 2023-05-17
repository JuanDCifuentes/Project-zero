import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteComponent } from './cliente.component';
import { VisualizarItemComponent } from './visualizar-item/visualizar-item.component';
import { SugereciasComponent } from './sugerecias/sugerecias.component';
import { RegistroItemComponent } from './registro-item/registro-item.component';
import { BarraComponent } from './barra/barra.component';



@NgModule({
  declarations: [
    ClienteComponent,
    VisualizarItemComponent,
    SugereciasComponent,
    RegistroItemComponent,
    BarraComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule
  ]
})
export class ClienteModule { }
