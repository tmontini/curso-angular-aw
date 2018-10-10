import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LancamentoFiltro} from '../lancamento.service';
import {LazyLoadEvent} from 'primeng/api';

@Component({
  selector: 'app-lancamentos-grid',
  templateUrl: './lancamentos-grid.component.html',
  styleUrls: ['./lancamentos-grid.component.css']
})
export class LancamentosGridComponent {

  @Input() lancamentos = [];
  @Input() filtro = new LancamentoFiltro();
  @Input() totalRegistros: number;
  @Output() mudarPagina = new EventEmitter();

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    console.log(`total de registros: ${this.totalRegistros}`);
    console.log(event);
    console.log(`a pagina no pesquisa-grid é ${pagina}`);
    this.mudarPagina.emit(pagina);
  }

}
