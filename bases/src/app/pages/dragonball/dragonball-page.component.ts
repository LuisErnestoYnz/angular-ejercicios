import { Component, signal } from '@angular/core';

/* Para agregar un tipo al arreglo de caracteres */
interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: './dragonball-page.component.html',
})
export class DragonBallPageComponent {
  /* Arreglo de personajes. Senal que internamente va a manejar un arreglo de personajes */
  characters = signal<Character[]>([
    {id: 1, name: 'Goku', power: 9001},
    {id: 2, name: 'Vegeta', power: 8000},
    {id: 3, name: 'Picoro', power: 3000},
  ]);

}
