import * as firebase from 'firebase/app';
import * as moment from 'moment';

export class NotificacaoModel {

    private _id: string = null;
    private _convite: boolean = null;
    private _grupo: string = null;
    private _grupoNome: string = null;
    private _titulo: string = 'Notificação';
    private _mensagem: string = null;
    private _data: firebase.firestore.Timestamp = null;

    constructor(
        id: string = null,
        convite: boolean = false,
        grupo: string = null,
        grupoNome: string = null,
        titulo: string = null,
        mensagem: string = null,
        data: firebase.firestore.Timestamp = null
    ) {
        this._id = id;
        this._convite = convite;
        this._grupo = grupo;
        this._grupoNome = grupoNome || this._grupoNome;
        this._titulo = titulo || 'Notificação';
        this._mensagem = mensagem;
        this._data = data || this._data;
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get convite(): boolean {
        return this._convite;
    }

    set convite(value: boolean) {
        this._convite = value;
    }

    get grupo(): string {
        return this._grupo;
    }

    set grupo(value: string) {
        this._grupo = value;
    }

    get grupoNome(): string {
        return this._grupoNome;
    }

    set grupoNome(value: string) {
        this._grupoNome = value;
    }

    get titulo(): string {
        return this._titulo;
    }

    set titulo(value: string) {
        this._titulo = value || 'Notificação';
    }

    get mensagem(): string {
        return this._mensagem;
    }

    set mensagem(value: string) {
        this._mensagem = value;
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
            convite: this._convite,
            grupo: this._grupo,
            mensagem: this._mensagem,
            data: this._data
        };

        return Object.entries(obj).reduce((a, [k, v]) => (v ? (a[k] = v, a) : a), {});
    }
}
