var Libro = /** @class */ (function () {
    function Libro(pNombre, pAutor, pEditorial, pPrecio, pGenero) {
        this.nombre = pNombre;
        this.autor = pAutor;
        this.editorial = pEditorial;
        this.precio = pPrecio;
        this.genero = pGenero;
    }
    Libro.prototype.getNombre = function () {
        return this.nombre;
    };
    Libro.prototype.getAutor = function () {
        return this.autor;
    };
    Libro.prototype.getEditorial = function () {
        return this.editorial;
    };
    Libro.prototype.getPrecio = function () {
        this.precio;
    };
    Libro.prototype.getGenero = function () {
        return this.genero;
    };
    Libro.prototype.setNombre = function (pNombre) {
        this.nombre = pNombre;
    };
    Libro.prototype.setAutor = function (pAutor) {
        this.autor = pAutor;
    };
    Libro.prototype.setEditorial = function (pEditorial) {
        this.editorial = pEditorial;
    };
    Libro.prototype.setPrecio = function (pPrecio) {
        this.precio = pPrecio;
    };
    Libro.prototype.setGenero = function (pGenero) {
        this.genero = pGenero;
    };
    return Libro;
}());
//#####################################################################################################//
var GestorDeLibros = /** @class */ (function () {
    function GestorDeLibros(pStock) {
        this.stockLibros = pStock;
    }
    GestorDeLibros.prototype.ingresarLibro = function (pNombre) {
        this.stockLibros.push(pNombre);
        console.log("Se agrego el siguiente libro: " + pNombre.getNombre());
    };
    GestorDeLibros.prototype.eliminarLibro = function (pNombre) {
        for (var i = 0; i < this.stockLibros.length; i++) {
            if (pNombre.getNombre() === this.stockLibros[i].getNombre()) {
                this.stockLibros.splice(i, 1, stockLibros[i]);
                console.log("Se elimino el siguiente libro: " + pNombre.getNombre());
            }
            else {
                console.log("No se encontro el libro");
            }
        }
    };
    GestorDeLibros.prototype.modificarLibro = function (pNombre, pAutor, pEditorial, pPrecio, pGenero) {
        for (var i = 0; i < this.stockLibros.length; i++) {
            if (pNombre === this.stockLibros[i].getNombre()) {
                this.stockLibros[i].setNombre(pNombre);
                this.stockLibros[i].setAutor(pAutor);
                this.stockLibros[i].setEditorial(pEditorial);
                this.stockLibros[i].setPrecio(pPrecio);
                this.stockLibros[i].setGenero(pGenero);
                console.log("Se modifico el siguiente libro: " + pNombre);
            }
            else {
                console.log("No se encontro el libro a modificar");
            }
        }
    };
    return GestorDeLibros;
}());
var libro1 = new Libro("Relato de un naufrago", "Gabriel Garcia Marquez", "Debolsillo", 3000, "Ficcion");
var libro2 = new Libro("Alicia en el pais de la maravillas", "Carroll Lewis", "Terramar", 1000, "Lituratura juvenil");
var libro3 = new Libro("El principito", "Antoine De Saint Exupery", "Ethos editorial", 2000, "Infantil");
var stockLibros = [libro1, libro2, libro3];
console.log(libro1);
console.log(libro2.getAutor());
