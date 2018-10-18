import {RouterModule, Routes} from '@angular/router';
import {LancamentosPesquisaComponent} from './lancamentos/lancamentos-pesquisa/lancamentos-pesquisa.component';
import {LancamentoCadastroComponent} from './lancamentos/lancamento-cadastro/lancamento-cadastro.component';
import {PessoasPesquisaComponent} from './pessoas/pessoas-pesquisa/pessoas-pesquisa.component';
import {PessoaCadastroComponent} from './pessoas/pessoa-cadastro/pessoa-cadastro.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {path: 'lancamentos', component: LancamentosPesquisaComponent},
  {path: 'lancamentos/novo', component: LancamentoCadastroComponent},
  {path: 'lancamentos/:codigo', component: LancamentoCadastroComponent},
  {path: 'pessoas', component: PessoasPesquisaComponent},
  {path: 'pessoas/novo', component: PessoaCadastroComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: []
})

export class AppRoutingModule {}
