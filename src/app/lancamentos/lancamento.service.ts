import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

import * as moment from 'moment';

import {catchError, map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {_throw} from 'rxjs-compat/observable/throw';
import {SharedService} from '../shared/shared.service';


export class LancamentoFiltro {
  descricao: string;
  dataVencimentoInicio: Date;
  dataVencimentoFim: Date;
  page = 0;
  itensPorPagina = 5;
}

@Injectable()
export class LancamentoService {

  // lancamentoUrl = 'http://192.168.10.5:8081/lancamentos';
  lancamentoUrl = 'http://localhost:8080/lancamentos';

  constructor(private http: HttpClient, private sharedService: SharedService) { }

  pesquisar(filtro: LancamentoFiltro): Observable<any> {
    // const headers = new HttpHeaders().append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sIm5vbWUiOiJBZG1pbmlzdHJhZG9yIiwiZXhwIjoxNTM5MjYxNDY5LCJhdXRob3JpdGllcyI6WyJST0xFX0NBREFTVFJBUl9DQVRFR09SSUEiLCJST0xFX1BFU1FVSVNBUl9QRVNTT0EiLCJST0xFX1JFTU9WRVJfUEVTU09BIiwiUk9MRV9DQURBU1RSQVJfTEFOQ0FNRU5UTyIsIlJPTEVfUEVTUVVJU0FSX0xBTkNBTUVOVE8iLCJST0xFX1JFTU9WRVJfTEFOQ0FNRU5UTyIsIlJPTEVfQ0FEQVNUUkFSX1BFU1NPQSIsIlJPTEVfUEVTUVVJU0FSX0NBVEVHT1JJQSJdLCJqdGkiOiIwMTA0ZDI5OS0zZTJmLTQ5N2YtOWJiOC1kNTVkODFmNTZiMGIiLCJjbGllbnRfaWQiOiJhbmd1bGFyIn0.DNyw7-u3Ug3DQm2sAwD4U1AFeMNMZpPpezHgPvHLNOE');
    const headers = new HttpHeaders().append('Authorization', `Bearer ${this.sharedService.token}`);
    let params = new HttpParams().append('page', filtro.page.toString()).append('size', filtro.itensPorPagina.toString());

    if (filtro.descricao) {
      params = params.append('descricao', filtro.descricao);
    }
    if (filtro.dataVencimentoInicio) {
      params = params.append('dataVencimentoDe', moment(filtro.dataVencimentoInicio).format('YYYY-MM-DD'));
    }
    if (filtro.dataVencimentoFim) {
      params = params.append('dataVencimentoAte', moment(filtro.dataVencimentoFim).format('YYYY-MM-DD'));
    }

    return this.http.get(`${this.lancamentoUrl}?resumo`, { headers, params: params})
      .pipe(
        map(response => response),
        catchError(err => _throw(err))
      );
  }

  excluir(codigo: number): Observable<any> {
    const headers = new HttpHeaders().append('Authorization', `Bearer ${this.sharedService.token}`);

    return this.http.delete(`${this.lancamentoUrl}/${codigo}`, {headers }).pipe(map(() => null), catchError(err => _throw(err)));
  }

}
