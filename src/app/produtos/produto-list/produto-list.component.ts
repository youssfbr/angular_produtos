import { Component, OnInit } from '@angular/core';
import { Produto } from '../shared/produto';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements OnInit {
  title: string;
  produtos: Produto[];

  constructor() { }

  ngOnInit() {
    this.title =  'Produtos';
    this.produtos = [
      { id: 1, nome: 'Hambúrger', descricao: 'Pão, hambúrguer, salada', preco: 10.00 },
      { id: 2, nome: 'X-Búrguer', descricao: 'Pão, hambúrguer, queijo, salada', preco: 12.00 },
      { id: 3, nome: 'X-Bacon', descricao: 'Pão, hambúrguer, queijo, bacon, salada', preco: 14.00 },
      { id: 4, nome: 'X-Tudo', descricao: 'Pão, hambúrguer, queijo, bacon, salada e batata', preco: 16.00 },
    ];
  }

}
