
//classe abstrata
export class Conta {
    _saldo;
    _cliente;
    agencia;

    constructor(saldoInicial,cliente, agencia){
        if(this.constructor == Conta){
            throw new Error ("Você não devia instanciar um objeto tipo conta. Essa é uma classe abstrata");
        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this.agencia = agencia;
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
        this._cliente = novoValor;
        }
    }

    get cliente(){
            return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    //precisa ser sobrescrito
    sacar(valor) {
        throw new Error("Método é abstrato. Vcê deve definir o método.")
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
    }

    depositar(valor){
        if(valor <= 0){
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}