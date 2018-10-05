import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome: any = 'Tiago';

  adicionar(nome: string) {
    this.nome = nome;
  }
}
