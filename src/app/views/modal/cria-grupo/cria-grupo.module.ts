import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriaGrupoPageRoutingModule } from './cria-grupo-routing.module';

import { CriaGrupoPage } from './cria-grupo.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CriaGrupoPageRoutingModule,
    TranslateModule
  ],
  declarations: [CriaGrupoPage]
})
export class CriaGrupoPageModule {}
