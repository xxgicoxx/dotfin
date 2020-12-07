export class GrupoModel {

    private _id: string = null;
    private _referencia: string = null;
    private _nome: string = null;

    constructor(
        id: string = null,
        referencia: string = null,
        nome: string = null
    ){
        this._id = id || this._id;
        this._referencia = referencia || this._referencia;
        this._nome = nome || this._nome;
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get referencia(): string {
        return this._referencia;
    }

    set referencia(value: string) {
        this._referencia = value;
    }

    get nome(): string {
        return this._nome;
    }

    set nome(value: string) {
        this._nome = value;
    }

    toPlainObj() {
        const obj = {
            id: this._id,
            referencia: this._referencia,
            nome: this._nome
        };

        return Object.entries(obj).reduce((a, [k, v]) => (v ? (a[k] = v, a) : a), {});
    }
}
