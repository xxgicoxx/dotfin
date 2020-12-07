import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor( ) { }

  toReal(valor: number): string {
    return valor == null ? 'R$ 0,0' : valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  }
}
