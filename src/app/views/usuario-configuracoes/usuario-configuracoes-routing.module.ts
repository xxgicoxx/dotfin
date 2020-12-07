import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioConfiguracoesPage } from './usuario-configuracoes.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioConfiguracoesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioConfiguracoesPageRoutingModule {}
