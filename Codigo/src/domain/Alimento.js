export class Alimento
{
        constructor(id, nombre, descripcion, fechaSubida, cantCalorias) 
        {
        this._id = id;
        this._nombre = nombre;
        this._descripcion = descripcion;
        this._fechaSubida = fechaSubida;
        this._cantCalorias = cantCalorias;
        }
    
      // Getter y Setter para id
      get id() {
        return this._id;
      }
      set id(value) {
        this._id = value;
      }
    
      // Getter y Setter para nombre
      get nombre() {
        return this._nombre;
      }
      set nombre(value) {
        this._nombre = value;
      }
    
      // Getter y Setter para descripcion
      get descripcion() {
        return this._descripcion;
      }
      set descripcion(value) {
        this._descripcion = value;
      }
    
      // Getter y Setter para fechaSubida
      get fechaSubida() {
        return this._fechaSubida;
      }
      set fechaSubida(value) {
        this._fechaSubida = value;
      }
    
      // Getter y Setter para cantCalorias
      get cantCalorias() {
        return this._cantCalorias;
      }
      set cantCalorias(value) {
        this._cantCalorias = value;
      }

      toString() {
        return `ID: ${this._id}\nNombre: ${this._nombre}\nDescripción: ${this._descripcion}\nFecha de subida: ${this._fechaSubida}\nCantidad de calorías: ${this._cantCalorias}`;
      }

}