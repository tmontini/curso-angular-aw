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
    this.mudarPagina.emit(pagina);
  }

}
