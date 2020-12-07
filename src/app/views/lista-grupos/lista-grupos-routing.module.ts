import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaGruposPage } from './lista-grupos.page';

const routes: Routes = [
  {
    path: '',
    component: ListaGruposPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaGruposPageRoutingModule {}
