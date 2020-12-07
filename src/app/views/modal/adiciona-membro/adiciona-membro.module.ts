import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdicionaMembroPageRoutingModule } from './adiciona-membro-routing.module';

import { AdicionaMembroPage } from './adiciona-membro.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AdicionaMembroPageRoutingModule,
    TranslateModule
  ],
  declarations: [AdicionaMembroPage]
})
export class AdicionaMembroPageModule {}
