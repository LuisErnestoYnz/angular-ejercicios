import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

//creamos el decorador @Component({}) y le agregamos un template
@Component({
  templateUrl: './counter.component.html',
  styles: `
    button {
      padding: 5px;
      margin: 5px 10px;
      width: 75px;
    }
  `,
})

// generamos una clase
export class CounterComponent {
  counter= 10;
  // uso de senales
  // signal() es una funcion que se toma de angular core
  // entre parentesis va el valor inicial de la senal
  // dejando el cursor sobre signal, dice que es WritableSignal, por lo que es una senal que se puede escribir (ya que hay senales que no se pueden escribir y que solo son de lectura)
  counterSignal = signal(10);

  // constructor de mi clase
  constructor() {
    /* setInterval(() => {
      this.counterSignal.update((current) => current + 1);
      console.log('tick');
    }, 2000); */
  }

  // metodos para manejar el button
  // uso del this porque como estamos en una clase, se hace referencia a esa property
  increaseBy(value: number) {
    this.counter += value;
    // actualizar (establecer) el valor de la senal counterSignal
    this.counterSignal.update((current) => current + value);
  }

  decreaseBy(value: number) {
    this.counter -= value;
    // actualizar (establecer) el valor de la senal counterSignal
    // no usar esto: this.counterSignal.set(this.currentSignal() + calue)
    // como es una funcion callback la que va dentro de update, el current es un parametro que recibe el valor actual (se puede nombrar como sea)
    this.counterSignal.update((current) => current - value);
  }

  resetCounter(value: number) {
    this.counter = value;
    // actualizar (establecer) el valor de la senal counterSignal a 0
    this.counterSignal.set(0);
  }
}
