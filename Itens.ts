import { Personagem } from "./Personagem";

export class Item {
    nome: string;
    efeito: (personagem: Personagem) => void;
  
    constructor(nome: string, efeito: (personagem: Personagem) => void) {
      this.nome = nome;
      this.efeito = efeito;
    }
  }
  
  const poçãoDeCura = new Item("Poção de Cura", (personagem: Personagem) => {
    personagem.vida += 20;
    console.log(`${personagem.nome} recuperou 20 de vida!`);
  });
  