/*
ser autenticavel significa ter o método autenticar
*/

export class SistemaAutenticacao {
    static login(autenticavel,senha){
        if (SistemaAutenticacao.trueAutenticavel(autenticavel)){
        return autenticavel.autenticar(senha);
        }
        return false;
    }
    static trueAutenticavel(autenticavel){
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function;
    }
}