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



  isValid() {
    if (this.#nombre === undefined || this.#nombre === null || this.#nombre === '') {
      throw new Error('El nombre del ingrediente no puede ser vacío');
    }
    if (this.#calorias === undefined || this.#calorias === null || this.#calorias === '') {
      throw new Error('El ingrediente tiene que tener calorias');
    }
    return true;
  }
  

    // Método toString para obtener una representación en forma de cadena de texto
    toString() {
      return `${this.#nombre} (${this.#calorias})`;
    }
}
