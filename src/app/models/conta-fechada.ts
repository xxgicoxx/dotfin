import * as firebase from 'firebase/app';
import * as moment from 'moment';

import { UtilsService } from '../services/utils/utils.service';

export class ContaFechadaModel {

    private _id: string = null;
    private _descricao: string = null;
    private _total: number = null;
    private _data: firebase.firestore.Timestamp = null;

    constructor(
        id: string = null,
        descricao: string = null,
        total: number = null,
        data: firebase.firestore.Timestamp = null
    ) {
        this._id = id || this._id;
        this._descricao = descricao || this._descricao;
        this._total = total || this._total;
        this._data = data || this._data;
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get descricao(): string {
        return this._descricao;
    }

    set descricao(value: string) {
        this._descricao = value;
    }

    get total(): number {
        return this._total;
    }

    set total(value: number) {
        this._total = value || 1;
    }

    get totalFormatado(): string {
        const utils = new UtilsService();
        return utils.toReal(this._total);
    }

    get data(): firebase.firestore.Timestamp {
        return this._data;
    }

    set data(value: firebase.firestore.Timestamp) {
        this._data = value;
    }

    get dataFormatada(): string {
        return moment(this._data.seconds * 1000).format('DD/MM/YYYY');
    }

    toPlainObj() {
        const obj = {
            id: this._id,
            descricao: this._descricao,
            total: this._total,
            data: this._data
        };

        return Object.entries(obj).reduce((a, [k, v]) => (v ? (a[k] = v, a) : a), {});
    }
}
