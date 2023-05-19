export class Ingrediente 
{
    #nombre;
    #calorias;

    constructor(nombre, calorias) {
      this.#nombre = nombre;
      this.#calorias= calorias;
    }
  
    // Getter y Setter para nombre
    get nombre() {
      return this.#nombre;
    }
    set nombre(value) {
      this.#nombre = value;
    }

       // Getter y Setter para nombre
       get calorias() {
        return this.#calorias;
      }
      set calorias(value) {
        this.#calorias = value;
      }
  

    // Método toString para obtener una representación en forma de cadena de texto
    toString() {
      return `${this.#nombre} (${this.#cantidad})`;
    }
}
