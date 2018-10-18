import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LancamentoCadastroComponent} from './lancamento-cadastro/lancamento-cadastro.component';
import {LancamentosGridComponent} from './lancamentos-grid/lancamentos-grid.component';
import {LancamentosPesquisaComponent} from './lancamentos-pesquisa/lancamentos-pesquisa.component';
import {FormsModule} from '@angular/forms';
import {
  ButtonModule,
  CalendarModule,
  DropdownModule,
  InputTextareaModule,
  InputTextModule,
  SelectButtonModule,
  TooltipModule
} from 'primeng/primeng';
import {TableModule} from 'primeng/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CurrencyMaskModule} from 'ng2-currency-mask';
import {SharedModule} from '../shared/shared.module';
import {MessageComponent} from '../shared/message/message.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    BrowserAnimationsModule,
    SelectButtonModule,
    DropdownModule,
    CurrencyMaskModule,
    FormsModule,
    SharedModule,
    RouterModule
  ],
  declarations: [
    LancamentoCadastroComponent,
    LancamentosPesquisaComponent,
    LancamentosGridComponent,
  ],
  exports: [
    LancamentoCadastroComponent,
    LancamentosPesquisaComponent
  ]
})
export class LancamentosModule { }
