export class Alimento
{
    #id;
    #nombre;
    #descripcion;
    #fechaSubida;
    #cantCalorias;
    
       constructor(id, nombre, descripcion, fechaSubida, cantCalorias) 
        {
        this.#id = id;
        this.#nombre = nombre;
        this.#descripcion = descripcion;
        this.#fechaSubida = fechaSubida;
        this.#cantCalorias = cantCalorias;
        }
    
      // Getter y Setter para id
      get id() {
        return this.#id;
      }
      set id(value) {
        this.#id = value;
      }
    
      // Getter y Setter para nombre
      get nombre() {
        return this.#nombre;
      }
      set nombre(value) {
        this.#nombre = value;
      }
    
      // Getter y Setter para descripcion
      get descripcion() {
        return this.#descripcion;
      }
      set descripcion(value) {
        this.#descripcion = value;
      }
    
      // Getter y Setter para fechaSubida
      get fechaSubida() {
        return this.#fechaSubida;
      }
      set fechaSubida(value) {
        this.#fechaSubida = value;
      }
    
      // Getter y Setter para cantCalorias
      get cantCalorias() {
        return this.#cantCalorias;
      }
      set cantCalorias(value) {
        this.#cantCalorias = value;
      }

      toString() {
        return `ID: ${this.#id}\nNombre: ${this.#nombre}\nDescripción: ${this.#descripcion}\nFecha de subida: ${this.#fechaSubida}\nCantidad de calorías: ${this.#cantCalorias}`;
      }

}