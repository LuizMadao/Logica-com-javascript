(function(){
    let operacao;
    let num1EmString;
    let num2EmString;
    let num1;
    let num2;
    while(operacao != "sair" || operacao != "Sair"){
        let operacao = prompt("Deseja efetuar um cálculo? (Responda '+' para adição, '-' para subtração, '/' para divisão, ou '*' para multiplicação. Caso não queira efetuar o cálculo, responda 'Sair')");
        if(operacao != "sair" && operacao != "Sair" && operacao != "+" && operacao != "-" && operacao != "/" && operacao != "*"){
           alert("Entrada inválida!");
           break;
        } 
        if(operacao === "sair" || operacao === "Sair"){
            alert("Até a próxima!");
            break;
        }

        num1EmString = prompt("Qual o primeiro número?");
        num2EmString = prompt("Qual o segundo número?");
        num1 = parseInt(num1EmString);
        num2 = parseInt(num2EmString);

        function adicao(num1, num2){
            return num1+num2;
        }
        function subtracao(num1, num2){
            return num1-num2;
        }
        function divisao(num1, num2){
            return num1/num2;
        }
        function multiplicacao(num1, num2){
            return num1*num2;
        }

        switch(operacao){
            case "+":
                alert(`O resultado é: ${adicao(num1, num2)}`)
                break;
            case "-":
                alert(`O resultado é: ${subtracao(num1, num2)}`)
                break;
            case "/":
                alert(`O resultado é: ${divisao(num1, num2)}`)
                break;
            case "*":
                alert(`O resultado é: ${multiplicacao(num1, num2)}`)
                break;
            default:
                alert("Entrada inválida!");
        }
}
}())
