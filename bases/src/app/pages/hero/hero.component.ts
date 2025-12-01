import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";

@Component({
  templateUrl: './hero.component.html',
  /* Aqui realizamos la importacion del pipe upperCasePipe */
  imports: [ UpperCasePipe ],
  styleUrl: './hero.component.css',
})

export class HeroComponent {

  // senales
  name = signal('Ironman');
  age = signal(45);

  // senal computada. senal de solo lestura
  // un callback regresara el valor de heroDescription
  heroDescription = computed(() => {
    const description = `${ this.name() } - ${ this.age() }`;
    // como la descripcion (el. valor de retorno) es un string, esta senal
    // regresara un string
    return description;
  })

  capitalizedName = computed(() => {
    // tomamos el valor de la senal y aplicamos el toUpperCase()
    return this.name().toUpperCase();
  });

  // funcion
  getHeroDescription() {
    // queremos el valor de las senales, por lo que se escribien asi:
    return `${ this.name() } - ${ this.age() }`;
  }

  // metodos
  changeHero() {
    // se usa un set() porque no dependemos del valor anterior
    this.name.set('Spiderman');
    this.age.set(22);
  }

  resetForm() {
    // se usa un set() porque no dependemos del valor anterior
    // se resetean valores de name y age a los que tiene por defecto
    this.name.set('Ironman');
    this.age.set(45);
  }

  changeAge() {
    this.age.set(60);
  }
}
