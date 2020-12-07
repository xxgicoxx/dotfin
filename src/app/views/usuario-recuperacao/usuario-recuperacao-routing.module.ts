import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioRecuperacaoPage } from './usuario-recuperacao.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioRecuperacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioRecuperacaoPageRoutingModule {}
