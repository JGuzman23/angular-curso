import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    <h1>{{title}}</h1>
<h3>La base es de <strong>{{base}}</strong></h3>

<button (click)="acumunar(base)">+{{base}}</button>

<span>{{numero}}</span>

<button (click)="acumunar(-base)">-{{base}}</button>
    `

})

export class contadorComponent {
    title = 'Contador app';
    numero: number = 0;
    base: number = 5;


    acumunar(valor: number) {
        this.numero += valor;
    }
}