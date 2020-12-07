import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaMembrosPage } from './lista-membros.page';

const routes: Routes = [
  {
    path: '',
    component: ListaMembrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaMembrosPageRoutingModule {}
