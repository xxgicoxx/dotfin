import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';

import { UsuarioConfiguracoesPageRoutingModule } from './usuario-configuracoes-routing.module';
import { UsuarioConfiguracoesPage } from './usuario-configuracoes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UsuarioConfiguracoesPageRoutingModule,
    TranslateModule
  ],
  declarations: [UsuarioConfiguracoesPage]
})
export class UsuarioConfiguracoesPageModule {}
