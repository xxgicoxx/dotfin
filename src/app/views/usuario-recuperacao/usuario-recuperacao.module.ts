import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';

import { UsuarioRecuperacaoPageRoutingModule } from './usuario-recuperacao-routing.module';
import { UsuarioRecuperacaoPage } from './usuario-recuperacao.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UsuarioRecuperacaoPageRoutingModule,
    TranslateModule
  ],
  declarations: [UsuarioRecuperacaoPage]
})
export class UsuarioRecuperacaoPageModule {}
