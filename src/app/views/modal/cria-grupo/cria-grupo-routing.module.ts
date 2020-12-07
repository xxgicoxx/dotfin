import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriaGrupoPage } from './cria-grupo.page';

const routes: Routes = [
  {
    path: '',
    component: CriaGrupoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriaGrupoPageRoutingModule {}
