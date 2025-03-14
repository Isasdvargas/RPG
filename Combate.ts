import * as readlineSync from 'readline-sync';
import { Personagem } from './Personagem';

function combate(jogador: Personagem, inimigo: Personagem): void {
    console.log(`${jogador.nome} encontra o inimigo ${inimigo.nome}.`);
    
    while (jogador.vida > 0 && inimigo.vida > 0) {
      console.log(`O que ${jogador.nome} fará?`);
      console.log("1. Atacar");
      console.log("2. Usar item");
      const escolha = prompt("Escolha uma ação: ");
      
      if (escolha === "1") {
        jogador.atacar(inimigo);
      } else if (escolha === "2") {
        if (jogador.itens.length > 0) {
          console.log("Escolha um item para usar:");
          jogador.itens.forEach((item, index) => {
            console.log(`${index + 1}. ${item.nome}`);
          });
          const itemEscolhido = parseInt(readlineSync.question("Escolha um item: ")) - 1;
          jogador.usarItem(jogador.itens[itemEscolhido]);
        } else {
          console.log("Você não tem itens no inventário.");
        }
      }
  
      if (inimigo.vida > 0) {
        inimigo.atacar(jogador);
      }
    }
  
    if (jogador.vida <= 0) {
      console.log(`${jogador.nome} foi derrotado!`);
    } else {
      console.log(`${inimigo.nome} foi derrotado!`);
    }
  }
  