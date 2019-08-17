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
    this.produtos = [];
  }

}
