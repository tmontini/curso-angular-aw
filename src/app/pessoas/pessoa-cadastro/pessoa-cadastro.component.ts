import { Component, OnInit } from '@angular/core';
import {PessoaService} from '../pessoa.service';
import {ToastyService} from 'ng2-toasty';
import {FormControl} from '@angular/forms';
import {Pessoa} from '../../core/model';
import {ErrorHandlerService} from '../../core/error-handler.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent implements OnInit {

  pessoa = new Pessoa();

  constructor(
    private pessoaService: PessoaService,
    private toasty: ToastyService,
    private errorHandleService: ErrorHandlerService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const pessoaCodigo = this.route.snapshot.params['codigo'];

    if (pessoaCodigo) {
      this.carregarPessoa(pessoaCodigo);
    }
  }

  get editando() {
    return !!this.pessoa.codigo;
  }

  salvar(form: FormControl) {
    if (this.editando) {
      this.atualizar(form);
    } else {
      this.adicionar(form);
    }
  }

  adicionar(form: FormControl) {
    this.pessoaService.adicionar(this.pessoa).subscribe(() => {
      this.toasty.success('Pessoa adicionada com sucesso!');
      form.reset();
    },
      erro => this.errorHandleService.handle(erro));
  }

  atualizar(form: FormControl) {
    this.pessoaService.atualizar(this.pessoa).subscribe(() => {
      this.toasty.success('Pessoa atualizada com sucesso!');
    },
      erro => this.errorHandleService.handle(erro));
  }

  carregarPessoa(codigo: number) {
    this.pessoaService.buscarPessoaPorCodigo(codigo)
      .subscribe(
        pessoa => this.pessoa = pessoa,
        erro => this.errorHandleService.handle(erro)
      );
  }

}
