import { Component, OnInit } from '@angular/core';
import {LancamentoFiltro, LancamentoService} from '../lancamento.service';
import {LazyLoadEvent} from 'primeng/api';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent implements OnInit {

  totalRegistros = 0;
  filtro = new LancamentoFiltro();
  lancamentos = [];

  ngOnInit() {
    this.aoMudarPagina();
  }

  constructor(private lancamentoService: LancamentoService) {}

  pesquisar(pagina = 0) {
    this.filtro.page = pagina;
    this.lancamentoService.pesquisar(this.filtro)
      .subscribe(resultado => {
        this.lancamentos = resultado.content;
        this.totalRegistros = resultado.totalElements;
        console.log(this.totalRegistros);
      });
  }

  // pesquisar(pagina = 0) {
  //   this.filtro.page = pagina;
  //   this.lancamentoService.pesquisar(this.filtro)
  //     .then(resultado => {
  //       this.lancamentos = resultado.content;
  //       this.totalRegistros = resultado.totalElements;
  //       console.log(this.totalRegistros);
  //     });
  // }

  aoMudarPagina(mudarPagina = 0) {
    this.pesquisar(mudarPagina);
  }

}
