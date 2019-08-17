import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private URL = '/api/produtos';

  constructor(private http: HttpClient) { }
}
