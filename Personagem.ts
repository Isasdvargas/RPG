import { Item } from "./Itens";

export class Personagem {
    nome: string;
    vida: number;
    forca: number;
    defesa: number;
    itens: Item[];
  
    constructor(nome: string, vida: number, forca: number, defesa: number) {
      this.nome = nome;
      this.vida = vida;
      this.forca = forca;
      this.defesa = defesa;
      this.itens = [];
    }
  
    atacar(inimigo: Personagem): void {
      const dano = Math.max(this.forca - inimigo.defesa, 0); 
      console.log(`${this.nome} atacou ${inimigo.nome} e causou ${dano} de dano.`);
      inimigo.receberDano(dano);
    }
  
    receberDano(dano: number): void {
      this.vida -= dano;
      if (this.vida <= 0) {
        console.log(`${this.nome} foi derrotado!`);
      } else {
        console.log(`${this.nome} tem ${this.vida} de vida restante.`);
      }
    }
  
    usarItem(item: Item): void {
      console.log(`${this.nome} usou o item ${item.nome}.`);
      item.efeito(this); 
    }
  
    adicionarItem(item: Item): void {
      this.itens.push(item);
      console.log(`${item.nome} foi adicionado ao inventário de ${this.nome}.`);
    }
  }
  