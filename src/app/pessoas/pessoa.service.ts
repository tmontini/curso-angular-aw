import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {_throw} from 'rxjs-compat/observable/throw';
import {SharedService} from '../shared/shared.service';


export class PessoaFiltro {
  nome: string;
  page = 0;
  itensPorPagina = 5;
}


@Injectable()
export class PessoaService {

  pessoaUrl = `${this.sharedService.server}/pessoas`;

  constructor(private http: HttpClient, private sharedService: SharedService) { }

  pesquisar(filtro: PessoaFiltro): Observable<any> {
    const headers = new HttpHeaders().append('Authorization', this.sharedService.token);
    let params = new HttpParams().set('page', filtro.page.toString()).append('size', filtro.itensPorPagina.toString());

    if (filtro.nome) {
      params = params.append('nome', filtro.nome);
    }

    return this.http.get(this.pessoaUrl, { headers, params: params})
      .pipe(
        map(response => response),
        catchError(err => _throw(err))
      );
  }

  listarTodas(): Observable<any> {
    const headers = new HttpHeaders().append('Authorization', this.sharedService.token);
    return this.http.get(this.pessoaUrl, {headers})
      .pipe(
        map(response => response),
        catchError(err => _throw(err))
      );
  }

  excluir(codigo: number): Observable<any> {
    const headers = new HttpHeaders().append('Authorization', this.sharedService.token);

    return this.http.delete(`${this.pessoaUrl}/${codigo}`, { headers }).pipe(map(() => null), catchError(err => _throw(err)));
  }

  alterarStatus(codigo: number, ativo: boolean): Observable<any> {

    const headers = new HttpHeaders()
      .append('Authorization', this.sharedService.token)
      .append('Content-Type', 'application/json');

    return this.http.put(`${this.pessoaUrl}/${codigo}/ativo`, ativo, {headers})
      .pipe(
        map(() => null),
        catchError(err => _throw(err))
      );
  }
}
