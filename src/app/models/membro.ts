export class MembroModel {

    private _id: string = null;
    private _email: string = null;
    private _criador: boolean = null;

    constructor(
        id: string = null,
        email: string = null,
        criador: boolean = null
    ){
        this._id = id || this._id;
        this._email = email || this._email;
        this._criador = criador || this._criador;
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get criador(): boolean {
        return this._criador;
    }

    set criador(value: boolean) {
        this._criador = value;
    }

    toPlainObj() {
        const obj = {
            id: this._id,
            email: this._email,
            criador: this._criador
        };

        return Object.entries(obj).reduce((a, [k, v]) => (v ? (a[k] = v, a) : a), {});
    }
}
