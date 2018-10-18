import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {HttpClientModule} from '@angular/common/http';
import {registerLocaleData} from '@angular/common';
import localept from '@angular/common/locales/pt';

import {AppComponent} from './app.component';
import {LancamentosModule} from './lancamentos/lancamentos.module';
import {PessoasModule} from './pessoas/pessoas.module';
import {CoreModule} from './core/core.module';
import {Routes, RouterModule} from '@angular/router';
import {LancamentosPesquisaComponent} from './lancamentos/lancamentos-pesquisa/lancamentos-pesquisa.component';
import {LancamentoCadastroComponent} from './lancamentos/lancamento-cadastro/lancamento-cadastro.component';
import {PessoasPesquisaComponent} from './pessoas/pessoas-pesquisa/pessoas-pesquisa.component';
import {PessoaCadastroComponent} from './pessoas/pessoa-cadastro/pessoa-cadastro.component';
import {AppRoutingModule} from './app-routing.module';


registerLocaleData(localept, 'pt');



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,

    LancamentosModule,
    PessoasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
