import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteComponent } from './cliente.component';
import { VisualizarItemComponent } from './visualizar-item/visualizar-item.component';
import { SugereciasComponent } from './sugerecias/sugerecias.component';
import { RegistroItemComponent } from './registro-item/registro-item.component';
import { BarraComponent } from './barra/barra.component';
import { VisualizarProjectsComponent } from './visualizar-projects/visualizar-projects.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ClienteComponent,
    VisualizarItemComponent,
    SugereciasComponent,
    RegistroItemComponent,
    BarraComponent,
    VisualizarProjectsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ClienteRoutingModule
  ],
  exports: [
    VisualizarItemComponent,
    FormsModule
  ]
})
export class ClienteModule { }
