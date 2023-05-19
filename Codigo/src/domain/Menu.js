export class Menu extends Alimentos 
{
    constructor(id, nombre, descripcion, fechaSubida, cantCalorias, diaDeLaSemana, tipoMenu) {
      super(id, nombre, descripcion, fechaSubida, cantCalorias);
      this._diaDeLaSemana = diaDeLaSemana;
      this._tipoMenu = tipoMenu;
    }
  
    // Getter y Setter para diaDeLaSemana
    get diaDeLaSemana() {
      return this._diaDeLaSemana;
    }
    set diaDeLaSemana(value) {
      this._diaDeLaSemana = value;
    }
  
    // Getter y Setter para tipoMenu
    get tipoMenu() {
      return this._tipoMenu;
    }
    set tipoMenu(value) {
      this._tipoMenu = value;
    }
  
    // Método toString
    toString() {
      return `${super.toString()}\nDía de la semana: ${this._diaDeLaSemana}\nTipo de menú: ${this._tipoMenu}`;
    }
  }