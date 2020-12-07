import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaNotificacoesPage } from './lista-notificacoes.page';

const routes: Routes = [
  {
    path: '',
    component: ListaNotificacoesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaNotificacoesPageRoutingModule {}
