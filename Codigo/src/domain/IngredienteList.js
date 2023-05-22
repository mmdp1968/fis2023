export class IngredienteList
{
  #ingredientes;

    constructor() {
        this.#ingredientes = [];
      }

      // Método para agregar un ingrediente a la lista
      agregarIngrediente(ingrediente) {;
        this.#ingredientes.push(ingrediente);
      }

      add(ingrediente) {
        let ingredienteInList = this.#ingredientes.some(i => i.getNombre() == ingrediente.getNombre());
        if (!ingredienteInList && ingrediente.isValid()) {
          this.#ingredientes.push(ingrediente);
        } else {
          throw new Error(`No se pudo agregar. ${ingrediente.getNombre()} ya está en la lista.`);
        }
      }
    
      // Método para obtener la lista de ingredientes
      getIngredientes() {
        return this.#ingredientes;
      }
    
      // Método toString 
      toString() {
        let ingredientesString = this.#ingredientes.map(ingrediente => `- ${ingrediente.toString()}`).join('\n');
        return `Lista de ingredientes:\n${ingredientesString}`;
      }


}