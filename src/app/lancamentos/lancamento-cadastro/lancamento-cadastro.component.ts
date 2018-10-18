import { Component, OnInit } from '@angular/core';
import {CategoriaService} from '../../categorias/categoria.service';
import {ErrorHandlerService} from '../../core/error-handler.service';
import {PessoaService} from '../../pessoas/pessoa.service';
import {Lancamento} from '../../core/model';
import {FormControl} from '@angular/forms';
import {LancamentoService} from '../lancamento.service';
import {ToastyService} from 'ng2-toasty';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent implements OnInit {

  tipos = [
    {label: 'Receita', value: 'RECEITA'},
    {label: 'Despesa', value: 'DESPESA'},
  ];

  categorias = [];

  pessoas = [];

  lancamento = new Lancamento();

  constructor(
    private categoriaService: CategoriaService,
    private pessoaService: PessoaService,
    private lancamentoService: LancamentoService,
    private toasty: ToastyService,
    private errorHandlerService: ErrorHandlerService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.carregarCategorias();
    this.carregarPessoas();
    console.log(this.route.snapshot.params);
  }

  salvar(form: FormControl) {
    this.lancamentoService.adicionar(this.lancamento)
      .subscribe(() => {
        this.toasty.success('Lançamento adicionado com sucesso!');
        form.reset();
      }, error => this.errorHandlerService.handle(error));
  }

  carregarCategorias() {
    return this.categoriaService.listarTodas().subscribe(categorias => {
      this.categorias = categorias.map(c => {
        return {label: c.nome, value: c.codigo};
      });
    },
      error => this.errorHandlerService.handle(error));
  }

  carregarPessoas() {
    return this.pessoaService.listarTodas().subscribe(
      pessoas => {
        this.pessoas = pessoas.map(p => {
          return {label: p.nome, value: p.codigo};
        });
      },
      error => this.errorHandlerService.handle(error)
    );
  }

}
