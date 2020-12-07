import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdicionaGrupoPageRoutingModule } from './adiciona-grupo-routing.module';

import { AdicionaGrupoPage } from './adiciona-grupo.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AdicionaGrupoPageRoutingModule,
    TranslateModule
  ],
  declarations: [AdicionaGrupoPage]
})
export class AdicionaGrupoPageModule {}
