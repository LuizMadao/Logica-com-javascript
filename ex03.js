(function(){
    let respostaLinguagem;
    const respostaArea = prompt("Você tem interesse em estudar qual área da Programação: Back-end ou front-end?");
    
    if(respostaArea === "Back-end" || respostaArea === "back-end" || respostaArea === "Back end" || respostaArea === "back end"){
        let respostaLinguagem = prompt("Neste caso, você deseja aprender sobre qual destas linguagens: C# ou Java?");

        if(respostaLinguagem === "C#" || respostaLinguagem === "Java" || respostaLinguagem === "java" || respostaLinguagem === "c#"){
            alert("Muito bem!");
        }
        else{
            alert("Resposta inválida!");
            return;
        }
    } 
    else if(respostaArea === "Front-end" || respostaArea === "front-end" || respostaArea === "Front end" || respostaArea === "front end"){
        let respostaLinguagem = prompt("Neste caso, você deseja aprender sobre qual destas linguagens: React ou Vue?");

        if(respostaLinguagem === "React" || respostaLinguagem === "Vue" || respostaLinguagem === "react" || respostaLinguagem === "vue"){
            alert("Muito bem!");
        }
        else{
            alert("Resposta inválida!");
            return;
        }
    }
    else{
        alert("Resposta inválida!");
        return;
    }

    const respostaFullstack = prompt("Você pretende seguir se especializando na área escolhida ou se desenvolvendo como Fullstack (com conhecimento sobre tanto Back-end como Front-end)? Aperte 1 para a primeira opção e 2 para a segunda.");

    if(respostaFullstack == 1){
        alert(`Você escolheu ${respostaArea} como a área para se especializar no ramo da Programação! Busque aprender mais linguagens sobre a sua área!`);
    }

    if(respostaFullstack == 2){
        alert("Você escolheu desenvolver-se como Fullstack, lidando tanto com questões sobre Back-end quanto sobre Front-end!");
    }

    if(respostaFullstack != 1 && respostaFullstack != 2){
        alert("Resposta inválida!")
        return;
    }

    if(respostaFullstack === null || respostaFullstack === ""){
        alert("Resposta inválida!")
        return;
    }

    
    let perguntaTecnologia = prompt("Tem mais alguma tecnologia que você gostaria de aprender? (Escreva 'Sim' caso tenha ou 'Não' caso não tenha)");
    
    if(perguntaTecnologia === "Não" || perguntaTecnologia === "nao"){
        alert("Certo! Muito obrigado!");
        return;
    }
    if(perguntaTecnologia === null || perguntaTecnologia === ""){
        alert("Resposta inválida!");
        return;
    }
      
    while(perguntaTecnologia === "Sim" || perguntaTecnologia === "sim"){
            let respostaOpcao = prompt("Qual tecnologia você gostaria de aprender?");

            if(respostaOpcao === null || respostaOpcao === ""){
                alert("Resposta inválida!");
                return;
            }

            alert(`Interessante! ${respostaOpcao} parece bem legal!`);

            perguntaTecnologia = prompt("Tem mais alguma tecnologia que você gostaria de aprender? (Escreva 'Sim' caso tenha ou 'Não' caso não tenha)");

            if(perguntaTecnologia === "Não" || perguntaTecnologia === "nao"){
                alert("Certo! Muito obrigado!");
            }
                else if(perguntaTecnologia === null || perguntaTecnologia === ""){
                    alert("Resposta inválida!");
                    return;
                }
        }
}())



