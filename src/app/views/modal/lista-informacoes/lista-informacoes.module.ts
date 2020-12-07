import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaInformacoesPageRoutingModule } from './lista-informacoes-routing.module';

import { ListaInformacoesPage } from './lista-informacoes.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaInformacoesPageRoutingModule,
    TranslateModule
  ],
  declarations: [ListaInformacoesPage]
})
export class ListaInformacoesPageModule {}
