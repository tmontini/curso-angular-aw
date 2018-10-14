import { Component, OnInit } from '@angular/core';
import {PessoaFiltro, PessoaService} from '../pessoa.service';
import {LazyLoadEvent} from 'primeng/api';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent implements  OnInit {

  totalRegistro = 0;
  pessoas = [];
  filtro = new PessoaFiltro();

  constructor(private pessoaService: PessoaService) {}

  ngOnInit(): void {
    // this.pesquisar();
  }

  pesquisar(pagina = 0) {
    this.filtro.page = pagina;
    this.pessoaService.pesquisar(this.filtro).subscribe(response => {
      this.pessoas = response.content;
      this.totalRegistro = response.totalElements;
    });
  }

  aoMudarPagina(event: LazyLoadEvent) {
    console.log(event);
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

}
