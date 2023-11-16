/*Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.*/

class Persona {
    constructor(nombre, edad, sexo, peso, altura, añoNacimiento) {
        this.nombre = nombre;
        this.edad = edad;
        this.DNI = this.generaDNI();
        this.sexo = sexo.toUpperCase() === 'H' ? 'Hombre' : 'Mujer';
        this.peso = peso;
        this.altura = altura;
        this.añoNacimiento = añoNacimiento;
    }

    mostrarGeneracion() {
        let generacion = '';
        if (this.añoNacimiento >= 1930 && this.añoNacimiento <= 1948) {
            generacion = 'Silent Generation Los niños de la posguerra';
            return `Perteneces a la generación Silent Generation. Rasgo característico: Austeridad.`;
        } else if (this.añoNacimiento >= 1949 && this.añoNacimiento <= 1968) {
            generacion = 'Baby Boom';
            return `Perteneces a la generación Baby Boom. Rasgo característico: Ambición.`;
        } else if (this.añoNacimiento >= 1969 && this.añoNacimiento <= 1980) {
            generacion = 'Generación X';
            return `Perteneces a la Generación X. Rasgo característico: Obsesión por el éxito .`;
        } else if (this.añoNacimiento >= 1981 && this.añoNacimiento <= 1993) {
            generacion = 'Generación Y Millennials';
            return `Perteneces a la generación Y Millennials. Rasgo característico: Frustración.`;
        } else if (this.añoNacimiento >= 1994 && this.añoNacimiento <= 2010) {
            generacion = 'Generación Z';
            return `Perteneces a la Generación Z. Rasgo característico: Irreverencia.`;
        }
        return generacion;
    }

    esMayorDeEdad() {
       if(this.edad >= 18){
        return  'Es mayor de edad';
       }else{
        return 'No es mayor de edad';
       }
    }

    mostrarDatos() {
        return (`<br>Nombre: ${this.nombre},<br> Edad: ${this.edad},<br> DNI: ${this.DNI},<br> Sexo: ${this.sexo},<br> Peso: ${this.peso},<br> Altura: ${this.altura},<br> Año de nacimiento: ${this.añoNacimiento}`);
    }

    generaDNI() {
        return Math.floor(Math.random() * 90000000) + 10000000;
    }
}

const persona = new Persona('Juan', 30, 'H', 70, 1.75, 1990);
const mensajeGeneracion = persona.mostrarGeneracion(); // Almacena el mensaje de la generación

document.write(mensajeGeneracion, `<br>`);
document.write(persona.esMayorDeEdad());
document.write(persona.mostrarDatos(), `<br>`);