class Libro {
    private nombre: string;
    private autor: string;
    private editorial: string;
    private precio: number;
    private genero: string;

    constructor(pNombre: string, pAutor: string, pEditorial: string, pPrecio: number, pGenero: string) {
        this.nombre = pNombre;
        this.autor = pAutor;
        this.editorial = pEditorial;
        this.precio = pPrecio;
        this.genero = pGenero;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getAutor(): string {
        return this.autor;
    }

    public getEditorial(): string {
        return this.editorial;
    }

    public getPrecio(): void {
        this.precio;
    }

    public getGenero(): string {
        return this.genero;
    }

    public setNombre(pNombre: string): void {
        this.nombre = pNombre;
    }

    public setAutor(pAutor: string): void {
        this.autor = pAutor;
    }

    public setEditorial(pEditorial: string): void {
        this.editorial = pEditorial;
    }

    public setPrecio(pPrecio: number): void {
        this.precio = pPrecio;
    }

    public setGenero(pGenero: string): void {
        this.genero = pGenero;
    }
}



//#####################################################################################################//

class GestorDeLibros {
    private stockLibros: Libro[];

    constructor(pStock: Libro[]) {
        this.stockLibros = pStock;
    }

    public ingresarLibro(pNombre: Libro): void {
        this.stockLibros.push(pNombre);
        console.log("Se agrego el siguiente libro: " + pNombre.getNombre());
    }

    public eliminarLibro(pNombre: Libro): void {
        for (let i = 0; i < this.stockLibros.length; i++) {
            if (pNombre.getNombre() === this.stockLibros[i].getNombre()) {
                this.stockLibros.splice(i, 1, stockLibros[i]);
                console.log("Se elimino el siguiente libro: " + pNombre.getNombre());
            } else {
                console.log("No se encontro el libro");
            }
        }
    }

    public modificarLibro(pNombre: string, pAutor: string, pEditorial: string, pPrecio: number, pGenero: string): void {
        for (let i = 0; i < this.stockLibros.length; i++) {
            if (pNombre === this.stockLibros[i].getNombre()) {

                this.stockLibros[i].setNombre(pNombre);
                this.stockLibros[i].setAutor(pAutor);
                this.stockLibros[i].setEditorial(pEditorial);
                this.stockLibros[i].setPrecio(pPrecio);
                this.stockLibros[i].setGenero(pGenero);

                console.log("Se modifico el siguiente libro: " + pNombre);
            } else {
                console.log("No se encontro el libro a modificar");
            }
        }
    }
}

let libro1 = new Libro("Relato de un naufrago", "Gabriel Garcia Marquez", "Debolsillo", 3000, "Ficcion");
let libro2 = new Libro("Alicia en el pais de la maravillas", "Carroll Lewis", "Terramar", 1000, "Lituratura juvenil");
let libro3 = new Libro("El principito", "Antoine De Saint Exupery", "Ethos editorial", 2000, "Infantil");

let stockLibros = [libro1, libro2, libro3];

console.log(libro1);
console.log(libro2.getAutor());
