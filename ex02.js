//Este código funciona apenas através do console do navegador pois a função prompt não roda no node.js.

(function(){
    const nome = prompt("Qual o seu nome? ");
        if(nome === null || nome === ""){
            return;
        }
    const anos = prompt("Quantos anos você tem? ");
        if(anos === null || anos === ""){
            return;
        }
    const linguagem = prompt("Qual linguagem de programação você está estudando? ");
        if(linguagem === null || linguagem === ""){
            return;
        }

    const mensagem = `Olá ${nome}, você tem ${anos} anos e já está aprendendo ${linguagem}!`;
    alert(mensagem);

    const respostaProgramacao = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 0 para NÃO.`);
        if(respostaProgramacao === null || respostaProgramacao === ""){
            return;
        }

    if(respostaProgramacao == 1){
        alert("Muito bom! Continue estudando e você terá muito sucesso!")
    }

    if(respostaProgramacao == 0){
        alert("Ahh que pena . . . Já tentou aprender outras linguagens?")
    }
}())
