import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdicionaMembroPage } from './adiciona-membro.page';

const routes: Routes = [
  {
    path: '',
    component: AdicionaMembroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdicionaMembroPageRoutingModule {}
