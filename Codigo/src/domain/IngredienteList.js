export class IngredienteList
{
    constructor() {
        this.#ingredientes = [];
      }

      // Método para agregar un ingrediente a la lista
      agregarIngrediente(ingrediente) {;
        this.#ingredientes.push(ingrediente);
      }
    
      // Método para obtener la lista de ingredientes
      obtenerIngredientes() {
        return this.#ingredientes;
      }
    
      // Método toString 
      toString() {
        let ingredientesString = this.#ingredientes.map(ingrediente => `- ${ingrediente.toString()}`).join('\n');
        return `Lista de ingredientes:\n${ingredientesString}`;
      }


}