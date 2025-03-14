import { Personagem } from "./Personagem";

class Mago extends Personagem {
    constructor(nome: string) {
      super(nome, 50, 10, 5); 
    }
  
    atacar(inimigo: Personagem): void {
      super.atacar(inimigo);
      console.log(`${this.nome} lança um feitiço poderoso!`);
    }
  }
  