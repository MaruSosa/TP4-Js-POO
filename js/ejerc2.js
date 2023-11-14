/*-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
Rectángulos*/

const cuenta = {
  titular: "Alex",
  saldo: 0,

  ingresar: function (cantidad) {
    if (cantidad > 0) {
      cuenta.saldo += cantidad;
      document.write(`Se han ingresado ${cantidad} a la cuenta`);
    } else {
      document.write("La cantidad ingresada debe ser mayor que 0");
    }
  },
  extraer: function (cantidad) {
    if (cantidad > 0 && cuenta.saldo >= cantidad) {
      cuenta.saldo -= cantidad;
      document.write(`Se extrajo ${cantidad} de la cuenta`);
    } else {
      document.write("Error al realizar la extracción");
    }
  },
  informar: function () {
    return `Titular: ${cuenta.titular} <br> Saldo: ${cuenta.saldo}`;
  },
};
document.write(`<p>cuenta: ${cuenta.titular}</p>`);
cuenta.ingresar(2500);
document.write(`<p>Informe de estado de cuenta: <br> ${cuenta.informar()}</p>`);
cuenta.extraer(1500);
document.write(`<p>Informe de estado de cuenta:<br>${cuenta.informar()}</p>`);
