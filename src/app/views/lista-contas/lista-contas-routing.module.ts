import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaContasPage } from './lista-contas.page';

const routes: Routes = [
  {
    path: '',
    component: ListaContasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaContasPageRoutingModule {}
