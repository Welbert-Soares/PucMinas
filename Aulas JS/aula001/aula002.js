var avaliacoes = ["PROVA 1", "PROVA 2", "TRABALHO FINAL"];
var notaAluno = [35, 20, 15];
var somaAluno = 0;

//notaAluno[0] = 20;        //aluno é reprovado

function avaliaAluno() {
    
    for (let x = 0; x < avaliacoes.length; x++) {
        console.log (`A nota para a ${avaliacoes[x]} foi ${notaAluno[x]} `)
        somaAluno += notaAluno[x];
    } 

    if (somaAluno >= 60) {
        console.log ("Aluno Aprovado!")
    }else {
        console.log ("Aluno Reprovado!")
    }
}
notaAluno = [10, 5, 2];
avaliaAluno();
console.log(somaAluno);