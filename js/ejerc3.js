/*Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área*/

class Rectangulo{
    constructor(altura,base){
        this.alto= altura;
        this.ancho=base;
    }
    get alt(){
        return this.alto;
    }
    set alt(altoNuevo){
        if(altoNuevo>0){
            this.alto=altoNuevo;
        }else{
            alert('El valor ingresado es inválido');
        }
    }
    get anch(){
        return this.ancho;
    }
    set anch(anchoNuevo){
        if(anchoNuevo>0){
            this.ancho=anchoNuevo;
        }else{
            alert('El valor ingresado es inválido');
        }
    }
    calcularPerimetro(){
        if (this.alto > 0 && this.ancho > 0) {
            return 2 * (parseFloat(this.alto) + parseFloat(this.ancho)); // Convertir a números y calcular
          } else {
            return 'Valor ingresado inválido';
          }
    }
    calcularArea(){
        if (this.alto > 0 && this.ancho > 0) {
            return (parseFloat(this.alto) * parseFloat(this.ancho));
        }
    }
    mostrarDatos(){
        document.write(`los datos del rectangulo son:<br> alto: ${this.alto}<br> ancho: ${this.ancho}<br>`);
        const perimetro = this.calcularPerimetro(); 
        document.write(`El perímetro del rectangulo es: ${perimetro}<br> `);
        const area= this.calcularArea();
        document.write(`El área del rectangulo es: ${area}<br> `);
    }

    modificar(altoNuevo, anchoNuevo) {
        this.alto = altoNuevo;
        this.ancho = anchoNuevo;
      }
}
 const rectang1= new Rectangulo ('21.3','14.5');
 rectang1.mostrarDatos();
 rectang1.modificar('10.5','2.5');
 rectang1.mostrarDatos();
