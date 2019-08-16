import { Component, OnInit } from '@angular/core';
import { Produto } from '../shared/produto';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent implements OnInit {
  produto: Produto;
  title: string;

  constructor() { }

  ngOnInit() {
    this.title = 'Novo produto';
    this.produto = new Produto();
  }

}
