// Estrutura Condicional
var notaAluno = 85;

const MIN_APROVACAO = 60;

if (notaAluno >= MIN_APROVACAO) {
    console.log ("Aluno aprovado.")
}
else {
    console.log ("Aluno Reprovado.")
}

// Estrutura de Repetição (while)
var avaliacoes = ["PROVA 1, PROVA 2, TRABALHO FINAL"];
var cont = 0;

while (cont < avaliacoes.length)  {       //condicao
    console.log (avaliacoes[cont]);       //comando da repeticao;

    cont ++;                              //alteracao da condicao
}

// Estrutura de Repetição (for)
var avaliacoesFor = ["EXAME 1, EXAME 2, DEVER FINAL"];
for (let x = 0; x < avaliacoesFor.length; x ++) {     //(inicializacao; condicao; alteracao)
    console.log (avaliacoesFor[x]);                                                  //comando da repeticao;
}
