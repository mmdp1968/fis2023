export class IngredienteList
{
    constructor() {
        this._ingredientes = [];
      }
    
      // Método para agregar un ingrediente a la lista
      agregarIngrediente(ingrediente) {;
        this._ingredientes.push(ingrediente);
      }
    
      // Método para obtener la lista de ingredientes
      obtenerIngredientes() {
        return this._ingredientes;
      }
    
      // Método toString para obtener una representación en forma de cadena de texto de la lista de ingredientes
      toString() {
        let ingredientesString = this._ingredientes.map(ingrediente => `- ${ingrediente.toString()}`).join('\n');
        return `Lista de ingredientes:\n${ingredientesString}`;
      }


}