export class FechamentoModel {

    private _id: string = null;
    private _descricao: string = null;

    constructor(
        id: string = null,
        descricao: string = null
    ){
        this._id = id || this._id;
        this._descricao = descricao || this._descricao;
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

    toPlainObj() {
        const obj = {
            id: this._id,
            descricao: this._descricao
        };

        return Object.entries(obj).reduce((a, [k, v]) => (v ? (a[k] = v, a) : a), {});
    }
}
