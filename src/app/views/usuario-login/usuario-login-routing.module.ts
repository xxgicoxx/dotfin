import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioLoginPage } from './usuario-login.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioLoginPageRoutingModule {}
