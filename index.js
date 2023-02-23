import {Cliente} from "./Cliente.js"
import { Gerente } from "./Funcionario/Gerente.js"
import { Diretor } from "./Funcionario/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";
// import { Conta } from "./Conta/Conta.js";
// import {ContaCorrente} from "./Conta/ContaCorrente.js"
// import {ContaPoupanca } from "./Conta/ContaPoupanca.js";



// const cliente1 = new Cliente("Alan", 11122233301);
// const conta1 = new ContaCorrente(cliente1, 1001);


// const ContaPoupanca1 = new ContaPoupanca(50, cliente1, 1001);

// conta1.depositar(500);
// console.log(conta1.saldo)
// conta1.sacar(100);
// console.log(conta1.saldo)

// // console.log(ContaPoupanca1.saldo);

const diretor = new Diretor("Allan", 10000, 1234567899);
diretor.cadastrarSenha("123456789")
const gerente = new Gerente("Mateus",5000, 11112345678);
gerente.cadastrarSenha("12345")

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456789");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "12345");
console.log(diretorEstaLogado);
console.log(gerenteEstaLogado);
