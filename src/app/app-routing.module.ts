import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modulos/home/home.module').then(m => m.HomeModule)  },
  { path: 'cliente/:id', loadChildren: () => import('./modulos/cliente/cliente.module').then(m => m.ClienteModule)},
  { path: 'cliente', loadChildren: () => import('./modulos/cliente/cliente.module').then(m => m.ClienteModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
