import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriaContaPage } from './cria-conta.page';

const routes: Routes = [
  {
    path: '',
    component: CriaContaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriaContaPageRoutingModule {}
