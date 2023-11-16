/* Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas
Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:
“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”
Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.*/

class Libro{
    constructor(ISBN, título, autor, numPag) {
        this.isbn = ISBN;
        this.título = título;
        this.autor = autor;
        this.numPag = numPag;
    }
    get ISBN() {
        return this._isbn;
    }
    set ISBN(newISBN) {
        this._isbn = newISBN;
    }

    get título() {
        return this._título;
    }
    set título(newTítulo) {
        this._título = newTítulo;
    }

    get autor() {
        return this._autor;
    }
    set autor(newAutor) {
        this._autor = newAutor;
    }

    get numPaginas() {
        return this._numPag;
    }
    set numPaginas(newNumPag) {
        this._numPag = newNumPag;
    }
    mostrarLibro(){
        document.write(`El libro ${this.título} creado por ${this.autor} tiene ${this.numPag} páginas <br>`)
    }
}
 const libro1= new Libro('9789500210362','Cien años de Soledad','Gabriel García Marquez',496);
 const libro2= new Libro('9789871138142','Mi Planta de Naranja Lima','José Mauro de Vasconcelos',193);
 libro1.mostrarLibro();
 libro2.mostrarLibro();

 if(libro1.numPag>libro2.numPag){
    document.write(`El libro que tiene más páginas es el libro: ${libro1.título}`);
 }else if(libro1.numPag<libro2.numPag){
    document.write(`El libro que tiene más páginas es el libro: ${libro2.título}`);
 }else{
    document.write(`Ambos libros tienen la misma cantidad de páginas`);
 }