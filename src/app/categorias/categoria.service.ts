import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SharedService} from '../shared/shared.service';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {_throw} from 'rxjs-compat/observable/throw';

@Injectable()
export class CategoriaService {

  categoriasUrl =`${ this.sharedService.server}/categorias`;


  constructor(private http: HttpClient, private sharedService: SharedService) { }


  listarTodas(): Observable<any> {

    const headers = new HttpHeaders().append('Authorization', `${this.sharedService.token}`);

    return this.http.get(this.categoriasUrl, {headers})
      .pipe(
        map(response => response),
        catchError(err => _throw(err))
      );

  }
}
