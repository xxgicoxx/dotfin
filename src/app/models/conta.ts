import * as moment from 'moment';

import { UtilsService } from '../services/utils/utils.service';

export class ContaModel {

    private _id: string = null;
    private _data: string = moment().format('YYYY-MM-DD');
    private _descricao: string = null;
    private _divisao: number = 1;
    private _tipo: string = 'conta';
    private _usuario: string = null;
    private _usuarioNome: string = null;
    private _valor: number = null;
    private _referencia: string = null;
    private _quantidade: number = 1;
    private _membros: string[] = null;

    constructor(
        id: string = null,
        data: string = null,
        descricao: string = null,
        divisao: number = null,
        tipo: string = null,
        usuario: string = null,
        usuarioNome: string = null,
        valor: number = null,
        referencia: string = null,
        quantidade: number = 1,
        membros: string[] = null
    ){
        this._id = id || this._id;
        this._data = data || this._data;
        this._descricao = descricao || this._descricao;
        this._divisao = divisao || this._divisao;
        this._tipo = tipo || this._tipo;
        this._usuario = usuario || this._usuario;
        this._usuarioNome = usuarioNome || this._usuarioNome;
        this._valor = valor || this._valor;
        this._referencia = referencia || this._referencia;
        this._quantidade = quantidade || this._quantidade;
        this._membros = membros || this._membros;
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get data(): string {
        return this._data;
    }

    set data(value: string) {
        this._data = value || moment().format('YYYY-MM-DD');
    }

    get dataFormatada(): string {
        return moment(this._data, 'YYYY-MM-DD').format('DD/MM/YYYY');
    }

    get descricao(): string {
        return this._descricao;
    }

    set descricao(value: string) {
        this._descricao = value;
    }

    get divisao(): number {
        return this._divisao;
    }

    set divisao(value: number) {
        this._divisao = value || 1;
    }

    get tipo(): string {
        return this._tipo;
    }

    set tipo(value: string) {
        this._tipo = value || 'conta';
    }

    get usuario(): string {
        return this._usuario;
    }

    set usuario(value: string) {
        this._usuario = value;
    }

    get usuarioNome(): string {
        return this._usuarioNome;
    }

    set usuarioNome(value: string) {
        this._usuarioNome = value;
    }

    get valor(): number {
        return this._valor;
    }

    set valor(value: number) {
        this._valor = value || 1;
    }

    get valorFormatado(): string {
        const utils = new UtilsService();
        return utils.toReal(this._valor);
    }

    get totalFormatado(): string {
        const utils = new UtilsService();
        return utils.toReal(this._quantidade * this._valor);
    }

    get valorDividido(): number {
        return this._divisao ? (this._valor * this._quantidade) / this._divisao : this._valor * this._quantidade;
    }

    get valorDivididoFormatado(): string {
        const utils = new UtilsService();
        return utils.toReal(this._divisao ? (this._valor * this._quantidade) / this._divisao : this._valor * this._quantidade);
    }

    get referencia(): string {
        return this._referencia;
    }

    set referencia(value: string) {
        this._referencia = value;
    }

    get quantidade(): number {
        return this._quantidade;
    }

    set quantidade(value: number) {
        this._quantidade = value || 1;
    }

    get membros(): string[] {
        return this._membros;
    }

    set membros(value: string[]) {
        this._membros = value || [];
    }

    toPlainObj() {
        const obj = {
            id: this.id,
            data: this._data,
            descricao: this._descricao,
            divisao: this._divisao,
            tipo: this._tipo,
            usuario: this._usuario,
            usuarioNome: this._usuarioNome,
            valor: this._valor,
            referencia: this._referencia,
            quantidade: this._quantidade,
            membros: this._membros
        };

        return Object.entries(obj).reduce((a, [k, v]) => (v ? (a[k] = v, a) : a), {});
    }
}
