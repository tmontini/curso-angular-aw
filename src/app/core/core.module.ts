import {LOCALE_ID, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import {ToastyModule} from 'ng2-toasty';
import {ConfirmationService, ConfirmDialogModule} from 'primeng/primeng';

import {NavbarComponent} from './navbar/navbar.component';
import {ErrorHandlerService} from './error-handler.service';
import {LancamentoService} from '../lancamentos/lancamento.service';
import {PessoaService} from '../pessoas/pessoa.service';
import {SharedService} from '../shared/shared.service';
import {CategoriaService} from '../categorias/categoria.service';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ToastyModule.forRoot(),
    ConfirmDialogModule,
    RouterModule
  ],
  declarations: [
    NavbarComponent
  ],
  exports: [
    NavbarComponent,
    ToastyModule,
    ConfirmDialogModule
  ],
  providers: [
    ConfirmationService,

    ErrorHandlerService,
    LancamentoService,
    PessoaService,
    SharedService,
    CategoriaService,

    { provide: LOCALE_ID, useValue: 'pt' }
  ]
})
export class CoreModule { }
