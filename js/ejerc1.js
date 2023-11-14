/* Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.
Output:
objeto.encender(); auto encendido
objeto.apagar() El auto se apagó*/

const auto = {
  color: "negro",
  marca: "Toyota",
  modelo: "Corolla",
  encendido: false,

  encenderAuto: function () {
    if (!this.encendido) {
      // Verifica si el auto está apagado
      this.encendido = true;
      document.write("Auto encendido");
    } else {
      document.write("El auto ya está encendido");
    }
  },
  apagarAuto: () => {
    if (this.encendido) {
      this.encendido = false;
      document.write("El auto se apagó");
    } else {
      document.write("El auto ya está apagado");
    }
  },
};
document.write(`<p>auto: ${auto.marca}</p>`);
document.write(`<p>modelo: ${auto.modelo}</p>`);
document.write(`<p>color: ${auto.color}</p>`);

