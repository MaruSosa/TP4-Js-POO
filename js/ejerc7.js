/*Nos piden realizar una agenda telefónica de contactos.
Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.
Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).
Los métodos de la agenda serán los siguientes:
aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
existeContacto(Contacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.
Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.*/

class Contacto {
  constructor(nombre, telefono) {
    this._nombre = nombre;
    this._telefono = telefono;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(newNombre) {
    this._nombre = newNombre;
  }

  get telefono() {
    return this._telefono;
  }

  set telefono(newTelefono) {
    this._telefono = newTelefono;
  }
}

class Agenda {
  constructor() {
    this.contactos = [];
    this.capacidad = 10;
  }

  agregarContacto() {
    if (!this.agendaLlena()) {
      let nombre = prompt("Ingrese el nombre del contacto:");
      let telefono = prompt("Ingrese el teléfono del contacto:");
      if (!this.existeContacto(nombre)) {
        let nuevoContacto = new Contacto(nombre, telefono);
        this.contactos.push(nuevoContacto);
        alert(`Se ha agregado el contacto ${nombre} con teléfono ${telefono}.`);
      } else {
        alert("Ya existe un contacto con ese nombre.");
      }
    } else {
      alert("La agenda ya se encuentra llena.");
    }
  }
  existeContacto(nombre) {
    return this.contactos.some((contacto) => contacto.nombre === nombre);
  }

  listarContactos() {
    document.write("<h1>Agenda</h1>");
    document.write("<ul>");
    this.contactos.forEach((contacto) => {
      document.write(
        `<li>Nombre: ${contacto.nombre} Teléfono: ${contacto.telefono}</li>`
      );
    });
    document.write("</ul>");
  }

  buscarContacto() {
    let nombreBuscado = prompt("Ingrese el nombre del contacto a buscar:");
    let contactoEncontrado = this.contactos.find(
      (contacto) => contacto.nombre === nombreBuscado
    );
    if (contactoEncontrado) {
      document.write(
        `El teléfono de ${nombreBuscado} es: ${contactoEncontrado.telefono}`
      );
    } else {
      document.write(
        `El nombre que busca no se encuentra registrado en la agenda`
      );
    }
  }

  eliminarContacto() {
    let nombre = prompt("Ingrese el nombre del contacto a eliminar:");
    let indice = this.contactos.findIndex(
      (contacto) => contacto.nombre === nombre
    );
    if (indice !== -1) {
      this.contactos.splice(indice, 1);
      document.write(`El contacto ${nombre} ha sido eliminado.`);
    } else {
      document.write(`El contacto ${nombre} no existe en la lista.`);
    }
  }

  agendaLlena() {
    if (this.contactos.length >= this.capacidad) {
      alert(`La agenda está llena`);
      return true;
    }
    return false;
  }

  huecosLibres() {
    alert(
      `Espacios libres en la agenda: ${this.capacidad - this.contactos.length}`
    );
  }
}

function mostrarMenuOpciones() {
  let opcion = prompt(
    "Selecciona una opción:\n" +
      "1. Agregar contacto\n" +
      "2. Buscar contacto\n" +
      "3. Mostrar contactos\n" +
      "4. Eliminar contacto\n" +
      "5. Mostrar la cantidad de espacios libres\n" +
      "6. Salir"
  );
  return opcion;
}

let agenda = new Agenda();
let continuar = true;

while (continuar) {
  let opcionSeleccionada = mostrarMenuOpciones();

  switch (opcionSeleccionada) {
    case "1":
      agenda.agregarContacto();
      break;
    case "2":
      agenda.buscarContacto();
      break;
    case "3":
      agenda.listarContactos();
      break;
    case "4":
      agenda.eliminarContacto();
      break;
    case "5":
      agenda.huecosLibres();
      break;
    case "6":
      continuar = false;
      break;
    default:
      console.log("Por favor, ingrese una opción válida.");
      break;
  }
}
