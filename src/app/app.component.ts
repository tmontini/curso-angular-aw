import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome: any = 'Tiago';
  saida: any = '';

  adicionar() {
    console.log(`Adicionando: ${this.saida}`);
    const numero = Math.round(Math.random() * 100);
    this.saida = `${this.nome} ${numero}`;
  }

  alterarNome(event: any) {
    console.log(event)
    this.nome = event.target.value;
  }
}
