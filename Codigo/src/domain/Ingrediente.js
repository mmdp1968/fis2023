export class Ingrediente 
{
    constructor(nombre, calorias) {
      this._nombre = nombre;
      this._calorias= calorias;
    }
  
    // Getter y Setter para nombre
    get nombre() {
      return this._nombre;
    }
    set nombre(value) {
      this._nombre = value;
    }

       // Getter y Setter para nombre
       get calorias() {
        return this._calorias;
      }
      set calorias(value) {
        this._calorias = value;
      }
  

    // Método toString para obtener una representación en forma de cadena de texto
    toString() {
      return `${this._nombre} (${this._cantidad})`;
    }
}
