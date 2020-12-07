export class UsuarioModel {

    private _uid: string = null;
    private _nome: string = null;
    private _email: string = null;
    private _senha: string = null;
    private _verificado: boolean = false;

    constructor(
        uid: string = null,
        nome: string = null,
        email: string = null,
        senha: string = null,
        verificado: boolean = false
    ){
        this._uid = uid || this.uid;
        this._nome = nome || this._nome;
        this._email = email || this._email;
        this._senha = senha || this._senha;
        this._verificado = verificado || this._verificado;
    }

    get uid(): string {
        return this._uid;
    }

    set uid(value: string) {
        this._uid = value;
    }

    get nome(): string {
        return this._nome;
    }

    set nome(value: string) {
        this._nome = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get senha(): string {
        return this._senha;
    }

    set senha(value: string) {
        this._senha = value;
    }

    get verificado(): boolean {
        return this._verificado;
    }

    set verificado(value: boolean) {
        this._verificado = value;
    }

    toPlainObj() {
        const obj = {
            uid: this._uid,
            nome: this._nome,
            email: this._email,
            senha: this._senha,
            verificado: this._verificado
        };

        return Object.entries(obj).reduce((a, [k, v]) => (v ? (a[k] = v, a) : a), {});
    }
}
