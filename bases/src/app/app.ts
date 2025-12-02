import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/shared/navbar/navbar";

// @Component el cual transforma la clase a un componente. eso permite ponerlo en el archivo html, renderizar el componente.
@Component({
  // es una etiqueta html especial (opcional), la cual vamos a poner como referencia de este componente en nuestro html como: <app-root></app-root>
  selector: 'app-root',
  // (opcional) el routerOutlet se encuentra en nuestro archivo app.component.html hasta el final como <router-outlet /> estamos importando un componente para el manejo de rutas entre páginas.
  imports: [RouterOutlet, Navbar],
  // referencia a nuestro app.component.html
  templateUrl: './app.html',
  // referencia a nuestro app.component.css
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('luis ernesto');
}
