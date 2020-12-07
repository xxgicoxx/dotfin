import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdicionaGrupoPage } from './adiciona-grupo.page';

const routes: Routes = [
  {
    path: '',
    component: AdicionaGrupoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdicionaGrupoPageRoutingModule {}
