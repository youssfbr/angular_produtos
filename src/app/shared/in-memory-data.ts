import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryData implements InMemoryDbService {

  createDb() {
    const produtos = [
      { id: 1, nome: 'Hambúrger', descricao: 'Pão, hambúrguer, salada', preco: 10.00 },
      { id: 2, nome: 'X-Búrguer', descricao: 'Pão, hambúrguer, queijo, salada', preco: 12.00 },
      { id: 3, nome: 'X-Bacon', descricao: 'Pão, hambúrguer, queijo, bacon, salada', preco: 14.00 },
      { id: 4, nome: 'X-Tudo', descricao: 'Pão, hambúrguer, queijo, bacon, salada e batata', preco: 16.00 },
    ];
    return { produtos };
  }
}
