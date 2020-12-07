import { TranslateService } from '@ngx-translate/core';
import { ToastController } from '@ionic/angular';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class I18nService {

  constructor(
    private toastController: ToastController,
    private translateService: TranslateService
  ) { }

  async toast(i18n: string) {
    const toast = await this.toastController.create({
      message: await this.translateService.get(i18n).toPromise(),
      duration: 3000
    });

    return toast.present();
  }
}
