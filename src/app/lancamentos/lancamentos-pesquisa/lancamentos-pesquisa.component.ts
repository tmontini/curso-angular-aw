import { Component, OnInit } from '@angular/core';
import {LancamentoFiltro, LancamentoService} from '../lancamento.service';
import {ConfirmationService, LazyLoadEvent} from 'primeng/api';
import {Table} from 'primeng/table';
import {ToastyService} from 'ng2-toasty';
import {catchError} from 'rxjs/operators';
import {of} from 'rxjs';
import {ErrorHandlerService} from '../../core/error-handler.service';

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
    // this.aoMudarPagina();
  }

  constructor(
    private lancamentoService: LancamentoService,
    private toasty: ToastyService,
    private confirmation: ConfirmationService,
    private errorHandlerService: ErrorHandlerService
  ) {}

  pesquisar(pagina = 0) {
    this.filtro.page = pagina;
    this.lancamentoService.pesquisar(this.filtro)
      .subscribe(resultado => {
        console.log(resultado);
          this.lancamentos = resultado.content;
          this.totalRegistros = resultado.totalElements;
      }, err => { this.errorHandlerService.handle(err); });
  }

  confirmaExclusao(lancamento: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(lancamento);
      }
    });
  }

  excluir(lancamento: any) {
    console.log(lancamento);
    this.tabela = lancamento.tabela;
    this.lancamentoService.excluir(lancamento.lancamento.codigo)
      .subscribe(
        () => {
      this.tabela.first = 0;
      this.pesquisar();
      this.toasty.success('Lançamento excluido com sucesso!');
      },
        err => { this.errorHandlerService.handle(err); });
  }

  aoMudarPagina(pagina = 0) {
    this.pesquisar(pagina);
  }

}
