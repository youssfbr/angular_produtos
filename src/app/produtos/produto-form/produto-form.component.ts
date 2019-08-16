import { Component, OnInit } from '@angular/core';
import { Produto } from '../shared/produto';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent implements OnInit {
  produto: Produto;
  title: string;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.title = 'Novo produto';
    this.produto = new Produto();

    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
  }

  onSubmit() {
    console.log(this.produto);
    this.router.navigate(['/produtos']);
  }

}
