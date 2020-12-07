import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaContasFechadasPage } from './lista-contas-fechadas.page';

const routes: Routes = [
  {
    path: '',
    component: ListaContasFechadasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaContasFechadasPageRoutingModule {}
