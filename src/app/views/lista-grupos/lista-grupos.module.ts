import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaGruposPageRoutingModule } from './lista-grupos-routing.module';

import { ListaGruposPage } from './lista-grupos.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaGruposPageRoutingModule,
    TranslateModule
  ],
  declarations: [ListaGruposPage]
})
export class ListaGruposPageModule {}
