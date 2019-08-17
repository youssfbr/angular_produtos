import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private URL = '/api/produtos';

  constructor(private http: HttpClient) { }

  listar() {

  }

  buscar(id: number) {

  }

  salvar(produto: Produto) {

  }

  editar(produto: Produto) {

  }

  deletar(id: number) {

  }
}
