import { Alimento } from "../domain/alimento.js";
import { Menu } from "../domain/menu.js";
import { Ingrediente } from "../domain/ingrediente.js";
import { IngredienteList } from "../domain/IngredienteList.js";

document.addEventListener('DOMContentLoaded', function() {
  const listaMenusElemento = document.getElementById('menu-list');
  const listaMenu = cargarDatosMenu();
  mostrarMenusEnLista(listaMenu, listaMenusElemento);
  desplegarListaMenu(listaMenusElemento);
});

function cargarDatosMenu() {
  const Menu1 = new Menu(1, "Menu 1", "Milanesas con Papas Fritas", "2023-05-20", 500, "Lunes", "Diario");
  const Menu2 = new Menu(2, "Menu 2", "Lasaña", "21-05-2023", 400, "Martes", "Diario");
  const Menu3 = new Menu(3, "Menu 3", "Pascualina", "2023-05-21", 400, "Miércoles", "Diario");
  const Menu4 = new Menu(4, "Menu 4", "Guiso de Lentejas", "2023-05-21", 700, "Jueves", "Diario");
  const Menu5 = new Menu(5, "Menu 5", "Pollo con Papas", "2023-05-21", 300, "Viernes", "Diario");

  const listaMenu = [Menu1, Menu2, Menu3, Menu4, Menu5];
  return listaMenu;
}

function mostrarMenusEnLista(listaMenu, listaMenusElemento) {
  listaMenu.forEach(menu => {
    const li = document.createElement('li');
    li.classList.add("list-group-item");
    li.innerText = menu.toString();
    li.dataset.nombre = menu.nombre;
    li.dataset.descripcion = menu.descripcion;
    li.dataset.fecha = menu.fecha;
    li.dataset.cantCalorias=menu.cantCalorias;
    li.dataset.precio = menu.precio;
  

    listaMenusElemento.appendChild(li);
  });
}

function desplegarListaMenu(listaMenusElemento) {
  const listaMenusItems = listaMenusElemento.getElementsByTagName('li');
  agregarEventosListaMenu(listaMenusItems);
}

function agregarEventosListaMenu(listaMenusItems) {
  let menuSeleccionado = null;

  for (let i = 0; i < listaMenusItems.length; i++) {
    const li = listaMenusItems[i];
    li.classList.add('menu-item');

    li.addEventListener('click', function() {
      // Deseleccionar el menú anterior
      if (menuSeleccionado) {
        menuSeleccionado.classList.remove('selected');
        const botonModificarAnterior = menuSeleccionado.querySelector('.btn-modificar');
        botonModificarAnterior.remove();
      }
      // Marcar el menú seleccionado actualmente
      this.classList.add('selected');

      // Actualizar la referencia al menú seleccionado
      menuSeleccionado = this;

      // Mostrar el botón "Modificar" en el menú seleccionado
      const botonModificar = document.createElement('button');
      botonModificar.classList.add("btn", "btn-primary", "btn-sm", "float-end", "btn-modificar");
      botonModificar.innerText = "Modificar";
      li.appendChild(botonModificar);

      // Agregar evento al botón "Modificar"
      botonModificar.addEventListener('click', function() {
        const divDesplegarLista = document.getElementById('desplegar-lista');
        const formularioMenu = document.getElementById('formulario-menu');

        divDesplegarLista.style.display = 'none';
        formularioMenu.style.display = 'block';

        // Lógica para obtener los datos del menú seleccionado y cargarlos en el formulario
        const nombreMenu = menuSeleccionado.dataset.nombre;
        const descripcionMenu = menuSeleccionado.dataset.descripcion;
        const cantCaloriasMenu= menuSeleccionado.dataset.cantCalorias;
        const fechaMenu = menuSeleccionado.dataset.fecha;
        const precioMenu = menuSeleccionado.dataset.precio;

        // Lógica para cargar los datos en los campos del formulario
        cargarDatosMenuEnFormulario(nombreMenu, descripcionMenu, fechaMenu, precioMenu,cantCaloriasMenu);
      });
    });

    // Cambiar el cursor cuando el mouse se coloca sobre el elemento
    li.addEventListener('mouseover', function() {
      this.style.cursor = 'pointer';
    });

    // Cambiar el cursor cuando el mouse se mueve fuera del elemento
    li.addEventListener('mouseout', function() {
      this.style.cursor = 'default';
    });
  }
}

// Lógica para cargar los datos del menú en el formulario
function cargarDatosMenuEnFormulario(nombre, descripcion, fecha, precio, calorias) {
  document.getElementById('nombre-menu').value = nombre;
  document.getElementById('descripcion-menu').value = descripcion;
  document.getElementById('fecha-menu').value = fecha;
  document.getElementById('precio-menu').value = precio;
  document.getElementById('calorias-menu').value = calorias;
}