import { Component, OnInit } from '@angular/core';
import {LancamentoFiltro, LancamentoService} from '../lancamento.service';
import {LazyLoadEvent} from 'primeng/api';
import {Table} from 'primeng/table';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent implements OnInit {

  totalRegistros = 0;
  filtro = new LancamentoFiltro();
  lancamentos = [];
  tabela: Table;

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
      });
  }

  excluir(lancamento: any) {
    console.log(lancamento);
    this.tabela = lancamento.tabela;
    this.lancamentoService.excluir(lancamento.lancamento.codigo).subscribe(() => { this.tabela.first = 0; this.pesquisar(); });
  }

  aoMudarPagina(pagina = 0) {
    this.pesquisar(pagina);
  }

}
