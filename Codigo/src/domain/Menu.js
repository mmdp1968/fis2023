import { Alimento } from './alimento.js';
export class Menu extends Alimento
{
    #diaDeLaSemana;
    #tipoMenu;

    constructor(id, nombre, descripcion, fechaSubida, cantCalorias, diaDeLaSemana, tipoMenu) {
      super(id, nombre, descripcion, fechaSubida, cantCalorias);
      this.#diaDeLaSemana = diaDeLaSemana;
      this.#tipoMenu = tipoMenu;
    }
  
    // Getter y Setter para diaDeLaSemana
    get diaDeLaSemana() {
      return this.#diaDeLaSemana;
    }
    set diaDeLaSemana(value) {
      this.#diaDeLaSemana = value;
    }
  
    // Getter y Setter para tipoMenu
    get tipoMenu() {
      return this.#tipoMenu;
    }
    set tipoMenu(value) {
      this.#tipoMenu = value;
    }
  
    // Método toString
    toString() {
      return `${super.toString()}\nDía de la semana: ${this.#diaDeLaSemana}\nTipo de menú: ${this.#tipoMenu}`;
    }
  }