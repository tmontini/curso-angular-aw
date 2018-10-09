import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class LancamentoService {

  lancamentoUrl = 'https://localhost:8080/lancamentos'

  constructor(private http: HttpClient) { }

  pesquisar(): Promise<any> {
    return this.http.get(`${this.lancamentoUrl}?resumo`)
      .toPromise()
      .then(response => response);
  }
}
