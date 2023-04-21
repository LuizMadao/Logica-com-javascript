(function(){

let numeroPensado = Math.floor(Math.random() * (11 - 0 + 1) + 0);
let numeroDeOutrasTentativas = 1;
let outrasTentativas;

const primeiraTentativa = prompt("Qual o número que você deseja chutar? (Tem que ser entre 0 e 10!)");

if(primeiraTentativa == numeroPensado){
    alert(`Parabéns, você acertou! O número ${primeiraTentativa} era o que eu tinha pensado!`);
    return;
}
else if(primeiraTentativa === null || primeiraTentativa === ""){
    alert("Número inválido!");
    return;
}
else{
    do{
        outrasTentativas = prompt("Tente de novo com outro número (entre 0 e 10!)");
        numeroDeOutrasTentativas++;
        if(outrasTentativas == numeroPensado){
            alert(`Parabéns, você acertou! O número ${outrasTentativas} era o que eu tinha pensado!`);
            return;
        }
        else if(outrasTentativas === null || outrasTentativas === ""){
            alert("Número inválido!");
            return;
        }
    } while(numeroDeOutrasTentativas < 3)

    if(numeroDeOutrasTentativas >= 3){
        alert(`Que pena, você não conseguiu adivinhar! O número que eu pensado era ${numeroPensado}!`);
        return;
    }
}
}())