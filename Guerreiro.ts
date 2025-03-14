import { Personagem } from "./Personagem";

class Guerreiro extends Personagem {
    constructor(nome: string) {
      super(nome, 100, 15, 10);
    }
  
    atacar(inimigo: Personagem): void {
      super.atacar(inimigo);
      console.log(`${this.nome} usa sua espada poderosa!`);
    }
  }
  