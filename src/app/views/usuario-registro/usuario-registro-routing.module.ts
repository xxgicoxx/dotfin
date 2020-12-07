import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioRegistroPage } from './usuario-registro.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioRegistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioRegistroPageRoutingModule {}
