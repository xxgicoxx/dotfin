import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaMembrosPageRoutingModule } from './lista-membros-routing.module';

import { ListaMembrosPage } from './lista-membros.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaMembrosPageRoutingModule,
    TranslateModule
  ],
  declarations: [ListaMembrosPage]
})
export class ListaMembrosPageModule {}
