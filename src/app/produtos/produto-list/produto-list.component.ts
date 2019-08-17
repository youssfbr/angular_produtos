import { Component, OnInit } from '@angular/core';
import { Produto } from '../shared/produto';
import { ProdutoService } from '../shared/produto.service';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements OnInit {
  title: string;
  produtos: Produto[];

  constructor(private produtoService: ProdutoService) { }

  async ngOnInit() {
    this.title =  'Produtos';

    this.listar();
  }

  listar() {
    this.produtoService.listar().subscribe(response => {
      this.produtos = response;
    });
  }
}
