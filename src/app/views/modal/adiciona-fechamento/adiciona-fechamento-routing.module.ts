import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdicionaFechamentoPage } from './adiciona-fechamento.page';

const routes: Routes = [
  {
    path: '',
    component: AdicionaFechamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdicionaFechamentoPageRoutingModule {}
