import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaNotificacoesPageRoutingModule } from './lista-notificacoes-routing.module';

import { ListaNotificacoesPage } from './lista-notificacoes.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaNotificacoesPageRoutingModule,
    TranslateModule
  ],
  declarations: [ListaNotificacoesPage]
})
export class ListaNotificacoesPageModule {}
