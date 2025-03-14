import * as readlineSync from 'readline-sync';

class Cena {
  descricao: string;
  escolhas: { texto: string, acao: () => void }[];

  constructor(descricao: string) {
    this.descricao = descricao;
    this.escolhas = [];
  }

  adicionarEscolha(texto: string, acao: () => void): void {
    this.escolhas.push({ texto, acao });
  }

  exibirCena(): void {
    console.log(this.descricao);
    this.escolhas.forEach((escolha, index) => {
      console.log(`${index + 1}. ${escolha.texto}`);
    });
    const escolha = parseInt(readlineSync.question("Escolha uma acao: ")) - 1;
    this.escolhas[escolha].acao();
  }
}

class Personagem {
  nome: string;
  vida: number;
  itens: { nome: string }[];

  constructor(nome: string, vida: number) {
    this.nome = nome;
    this.vida = vida;
    this.itens = [];
  }

  atacar(inimigo: Personagem): void {
    console.log(`${this.nome} ataca ${inimigo.nome}!`);
    inimigo.vida -= 10;
    console.log(`${inimigo.nome} tem ${inimigo.vida} de vida.`);
  }

  usarItem(item: { nome: string }): void {
    console.log(`${this.nome} usou o item: ${item.nome}`);
    this.vida += 20;
    console.log(`${this.nome} agora tem ${this.vida} de vida.`);
  }
}

function combate(jogador: Personagem, inimigo: Personagem): void {
  console.log(`${jogador.nome} encontra o inimigo ${inimigo.nome}.`);
  
  while (jogador.vida > 0 && inimigo.vida > 0) {
    console.log(`O que ${jogador.nome} fara?`);
    console.log("1. Atacar");
    console.log("2. Usar item");
    const escolha = readlineSync.question("Escolha uma acao: ");
    
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

const jogador = new Personagem("Herói", 100);
jogador.itens.push({ nome: "Poção de Cura" }); 

const inimigo = new Personagem("Goblin", 50);

const cenaDeIntroducao = new Cena("Você se encontra em uma encruzilhada. O que deseja fazer?");
cenaDeIntroducao.adicionarEscolha("Ir para a floresta.", () => {
  console.log("Você segue em direção à floresta.");
});
cenaDeIntroducao.adicionarEscolha("Ir para a cidade.", () => {
  console.log("Você vai para a cidade.");
});
cenaDeIntroducao.adicionarEscolha("Enfrentar o inimigo.", () => {
  combate(jogador, inimigo);
});

cenaDeIntroducao.exibirCena();
