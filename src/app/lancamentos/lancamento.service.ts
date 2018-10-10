import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';


export interface LancamentoFiltro {
  descricao: string;
}

@Injectable()
export class LancamentoService {

  lancamentoUrl = 'http://localhost:8080/lancamentos';

  constructor(private http: HttpClient) { }

  pesquisar(filtro: LancamentoFiltro): Promise<any> {
    const headers = new HttpHeaders().append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sIm5vbWUiOiJBZG1pbmlzdHJhZG9yIiwiZXhwIjoxNTM5MTM4MzEwLCJhdXRob3JpdGllcyI6WyJST0xFX0NBREFTVFJBUl9DQVRFR09SSUEiLCJST0xFX1BFU1FVSVNBUl9QRVNTT0EiLCJST0xFX1JFTU9WRVJfUEVTU09BIiwiUk9MRV9DQURBU1RSQVJfTEFOQ0FNRU5UTyIsIlJPTEVfUEVTUVVJU0FSX0xBTkNBTUVOVE8iLCJST0xFX1JFTU9WRVJfTEFOQ0FNRU5UTyIsIlJPTEVfQ0FEQVNUUkFSX1BFU1NPQSIsIlJPTEVfUEVTUVVJU0FSX0NBVEVHT1JJQSJdLCJqdGkiOiI2ZDMxOGU2ZC0xYmU1LTQ4ZjgtYjlkNC1hNDJjZDBhNzM1ODAiLCJjbGllbnRfaWQiOiJhbmd1bGFyIn0.CXO49Zmg6FGGKp6kdESPywfeBCIUMsN90viY7IV36tU');
    let params = new HttpParams();

    if (filtro.descricao) {
      params = params.append('descricao', filtro.descricao);
    }

    console.log(params);

    return this.http.get(`${this.lancamentoUrl}?resumo`, { headers, params: params}).toPromise()
      .then(response => response);
  }
}
