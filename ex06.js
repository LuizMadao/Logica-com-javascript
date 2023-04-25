(function(){
    let listaHortifruti = [];
    let listaLaticinios = [];
    let listaDoces = [];
    let listaCarnes = [];
    let listaBebidas = [];
    let perguntaAdicionar = "Sim";
    let itemRemovido;
    let comida;
    let categoria;

    while(perguntaAdicionar != "Não" || perguntaAdicionar != "não"){
        if(listaHortifruti.length === 0 && listaLaticinios.length === 0 && listaDoces.length === 0 && listaCarnes.length === 0 && listaBebidas.length === 0){
            perguntaAdicionar = prompt("Você deseja adicionar alguma comida à sua lista de compras? Responda 'Sim' ou 'Não'");
        }
        else{
            perguntaAdicionar = prompt("Você deseja adicionar ou remover alguma comida à sua lista de compras? Para adicionar, responda 'Sim' ou 'Não', ou 'Remover' para remover um item da lista");
        }

        while (perguntaAdicionar != "sim" && perguntaAdicionar != "Sim" && perguntaAdicionar != "não" && perguntaAdicionar != "Não" && perguntaAdicionar != "remover" && perguntaAdicionar != "Remover") {
            alert("Entrada inválida!");
            perguntaAdicionar = prompt("Você deseja adicionar alguma comida à sua lista de compras? Responda 'Sim' ou 'Não'");
            }
        if(perguntaAdicionar === "Não" || perguntaAdicionar === "não"){
            alert("Certo, muito obrigado!");
            break;
        }
        if(perguntaAdicionar === "Sim" || perguntaAdicionar === "sim"){
            comida = prompt("Qual comida você deseja adicionar?");
                if(comida === null || comida === ""){
                    alert("Inválido!");
                    return;
                }
            categoria = prompt("Em qual categoria ela se encaixa? (Horti-fruti, Laticínios, doces, carnes, ou bebidas");
                if(categoria === "Horti-fruti" || categoria === "horti-fruti"){
                    listaHortifruti.push(comida);
                }
                else if(categoria === "Laticinios" || categoria === "laticinios" || categoria === "Laticínios" || categoria === "laticínios"){
                    listaLaticinios.push(comida);
                }
                else if(categoria === "Doces" || categoria === "doces"){
                    listaDoces.push(comida);
                }
                else if(categoria === "Carnes" || categoria === "carnes"){
                    listaCarnes.push(comida);
                }
                else if(categoria === "Bebidas" || categoria === "bebidas"){
                    listaBebidas.push(comida);
                }
                else{
                    alert("Categoria inválida!");
                    return;
                }   
        }
        else if(perguntaAdicionar === "Remover" || perguntaAdicionar === "remover"){

            itemRemovido = prompt("Qual item deseja remover?" + "\n" + "Sua lista de compras por enquanto está assim:" + "\n" + "\n" + `Horti-fruti: ${listaHortifruti.join(", ")}` + "\n" + `Frios: ${listaLaticinios.join(", ")}` + "\n" + `Doces: ${listaDoces.join(", ")}` + "\n" + `Carnes: ${listaCarnes.join(", ")}` + "\n" + `Bebidas: ${listaBebidas.join(", ")}`)
            if(listaHortifruti.length === 0 && listaLaticinios.length === 0 && listaDoces.length === 0 && listaCarnes.length === 0 && listaBebidas.length === 0){
                alert("Lista sem itens!");
            }else{
                if(listaHortifruti.indexOf(itemRemovido) != -1){
                    listaHortifruti.splice(listaHortifruti.indexOf(itemRemovido), 1);
                    alert(`O item ${itemRemovido} foi removido!`);
                } else if(listaLaticinios.indexOf(itemRemovido) != -1){
                    listaLaticinios.splice(listaLaticinios.indexOf(itemRemovido), 1);
                    alert(`O item ${itemRemovido} foi removido!`);
                } else if (listaDoces.indexOf(itemRemovido) != -1){
                    listaDoces.splice(listaDoces.indexOf(itemRemovido), 1);
                    alert(`O item ${itemRemovido} foi removido!`);
                } else if (listaCarnes.indexOf(itemRemovido) != -1){
                    listaCarnes.splice(listaCarnes.indexOf(itemRemovido), 1);
                    alert(`O item ${itemRemovido} foi removido!`);
                } else if (listaBebidas.indexOf(itemRemovido) != -1){
                    listaBebidas.splice(listaBebidas.indexOf(itemRemovido), 1);
                    alert(`O item ${itemRemovido} foi removido!`);
                } else {
                    alert(`Item inexistente!`)
                }
            }
        }
    }
    alert("Muito bem! Sua lista de compras ficou assim:" + "\n" + "\n" + `Horti-fruti: ${listaHortifruti.join(", ")}\nFrios: ${listaLaticinios.join(", ")}\nDoces: ${listaDoces.join(", ")}\nCarnes: ${listaCarnes.join(", ")}\nBebidas: ${listaBebidas.join(", ")}`);
}())
