import {Component, OnInit, ViewChild} from '@angular/core';
import {PessoaFiltro, PessoaService} from '../pessoa.service';
import {ConfirmationService, LazyLoadEvent} from 'primeng/api';
import {ErrorHandlerService} from '../../core/error-handler.service';
import {ToastyService} from 'ng2-toasty';
import {catchError} from 'rxjs/operators';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent implements  OnInit {

  totalRegistro = 0;
  pessoas = [];
  filtro = new PessoaFiltro();
  @ViewChild('tabela') tabela;

  constructor(
    private pessoaService: PessoaService,
    private errorHandlerService: ErrorHandlerService,
    private toasty: ToastyService,
    private confirmation: ConfirmationService
  ) {}

  ngOnInit(): void {
    // this.pesquisar();
  }

  pesquisar(pagina = 0) {
    this.filtro.page = pagina;
    this.pessoaService.pesquisar(this.filtro).subscribe(response => {
      this.pessoas = response;
      this.totalRegistro = response.totalElements;
    },
      err => this.errorHandlerService.handle(err));
  }

  aoMudarPagina(event: LazyLoadEvent) {
    console.log(event);
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  confirmaExcluisao(lancamento: any) {
    this.confirmation.confirm({
      message: `Deseja excluir ${lancamento.nome}?`,
      accept: () => {
        this.excluir(lancamento);
      }
    });
  }

  excluir(lancamento: any) {
    this.pessoaService.excluir(lancamento.codigo)
      .subscribe(() => {
        this.tabela.first = 0;
        this.toasty.success('Pessoa excluida com sucesso!');
        this.pesquisar();
      },
        err => this.errorHandlerService.handle(err));
  }

  alterarStatus(pessoa: any) {
    const novoStatus = !pessoa.ativo;
    const situacao = novoStatus ? 'ativado(a)' : 'desativado(a)';
    this.pessoaService.alterarStatus(pessoa.codigo, novoStatus)
      .subscribe(
        () => {
          this.toasty.success(`${pessoa.nome} ${situacao} com sucesso!`);
        },
        err => this.errorHandlerService.handle(err)
      );
  }

}
