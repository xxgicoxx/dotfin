import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaInformacoesPage } from './lista-informacoes.page';

const routes: Routes = [
  {
    path: '',
    component: ListaInformacoesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaInformacoesPageRoutingModule {}
