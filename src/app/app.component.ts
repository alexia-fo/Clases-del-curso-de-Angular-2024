import { AfterViewInit, Component } from '@angular/core';
import { extend } from 'jquery';
// import multiplicacion, { resta, suma } from '../exportaciones/operaciones';
import { resta, suma } from '../exportaciones/operaciones';
import multiplicar from '../exportaciones/operaciones';

enum Color { Red, Green, Blue }

interface Persona {
  nombre: string;
  edad: number;
  email?: string; // La propiedad email es opcional
}

interface Book {
  title: string;
  author: string;
}

interface BookExtended extends Book {
  year: string;
  description: string;
}

interface BookOm extends Omit<BookExtended, 'description'> {

}

interface Point { x: number; y: number; }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title="Fundamentos";

  // ---------------------------------------------------------------CLASE 1 -------------------------------------------------------------------

  //?------------------Ciclo de vida de angular---------------

  constructor(){
    console.log("Constructor");
  }

  ngOnInit() {
    console.log("ngOnInit");
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
  }

  //?------------------Tipos de datos---------------
  //todo:	Cuando declaras una variable dentro de una clase (fuera de los métodos), estás definiendo una propiedad de instancia.
  //Estas propiedades son accesibles desde cualquier método dentro de la misma instancia de la clase.
  //No necesitas usar let o const para declararlas, ya que TypeScript asume que son variables de instancia.


  //!number
  age: number = 25;
  price: number = 9.99;

  //!boolean
  isActive: boolean = true;
  isLoggedIn: boolean = false;

  //!any
  // data: any = "esto puede ser cualquier cosa";
  // data = 123;
  data = ["manzana", "naranja", "plátano"];

  //!string
  name: string = "Juan";
  message: string = "Hola, bienvenido a nuestra librería";

  //!array
  numbers: number[] = [1, 2, 3, 4, 5];
  fruits: string[] = ["manzana", "naranja", "plátano"];
  random: any[] = ["hola", 1, true]

  // //!enum
  // selectedColor: Color = Color.Red;
  // ngOnInit() {
  //   //todo: el enum se puede declarar dentro de un metodo o a nivel de archivo
  //   // enum Color { Red, Green, Grey, Blue}
  //   let selectedColor: Color = Color.Blue;
  //   console.log(selectedColor);
  // }

  //!tuple
    libro: [string, number] = ["Angular for Beginners", 2021];

  //!object
    person: object = { name: "Juan", age: 30 };
    book: object = { title: "Angular in Action", year: 2022 };

  //!null
  nullValue: null = null;
  undefinedValue: undefined = undefined;

  //!void
  greet(): void {
    console.log("Hola, bienvenido");
  }

  //?------------------Interpolación (One-Way Binding)---------------

  // //!Mostrar una Variable Simple

  // En el componente
  nombre:string = 'Alexia';

  // //!Operaciones y Expresiones
  // En el componente
  edad:number = 20;

  // //!Mostrar Propiedades de Objetos
  usuario = { nombre: 'María', ciudad: 'Pedro Juan' };

  // //!Mostrar Resultados de Métodos
  obtenerSaludo() {
    return '¡Hola desde el método!';
  }
  //?------------------Property Binding (One-Way Binding)---------------

  // //!Asignar un Valor a un Atributo
  imagenUrl = 'https://loiane.gallerycdn.vsassets.io/extensions/loiane/angular-extension-pack/1.1.2/1711831506184/Microsoft.VisualStudio.Services.Icons.Default';

  // //!Habilitar o Deshabilitar un Elemento
  esHabilitado = false;

  // //!Cambiar Estilos Dinámicamente
  esDestacado = true;

  // //!Enlazar Evento
  onClick() {
    console.log('Botón clicado');
  }

  //?------------------Event Binding (One-Way Binding)---------------
  // //!Cambiar Propiedades Dinámicamente
  esDeshabilitado=false;

  toggleHabilitado(){
    this.esDeshabilitado=!this.esDeshabilitado;
  }

  // //!Enlazar a Eventos de Entrada
  mostrarValor(event:any){
    console.log(event.target.value);
  }

  // //!Enlazar a Eventos de Mouse
  mostrarMensaje(){
    console.log("Mostrando mensaje");
  }

  //?Two Binding (enlace bidireccional)
  // //!Enlazar una Variable a un Campo de Entrada
  nombreElazado = 'Pedro';

  // //!Manejo de Cambios en el Componente
  nombreIm="Maria";

  actualizarNombre(event:any){
    console.log(`El nuevo nombre es: ${this.nombreIm}`)
  }

  //?-----------------------------condicionales---------------

  condicionales(){

    //!if else-if else
    let num: number = -10;

    if (num > 0) {
        console.log('El número es positivo');
    } else if (num < 0) {
        console.log('El número es negativo');
    } else {
        console.log('El número es cero');
    }


    //!switch
    let color: string = 'green';

    switch (color) {
        case 'red':
          console.log('El color es rojo');
          break;
        case 'blue':
          console.log('El color es azul');
          break;
        default:
          console.log('El color no es ni rojo ni azul');
          break;
    }
  }

  //?-----------------------------funciones---------------
  //!Argumento y valores de retorno

  saludo(name: string): string {
    return `Hola, ${name}!`;
  }

  mensaje():void{
    console.log('Esto es el mensaje de una funcion sin retorno')
  }

  //!Función con Parámetros Opcionales y Valores Predeterminados

  saludo2(name: string, greeting: string = 'Hola'): string {
    return `${greeting}, ${name}!`;
  }

  saludo3(name?: string): string {
    return ` ${name}!`;
  }

  //!funcion pasado como parametro
  adicion(a: number, b: number): number {
    return a + b;
  }

  sustraccion(a: number, b: number): number {
    return a - b;
  }

  operar(a: number, b: number, operacion: (x: number, y: number) => number): number {
    return operacion(a, b);
  }

  //!expresion
  add = (a: number, b: number): number => {
    return a + b;
  }

  //?-----------------------------ciclos---------------

  ciclos(){
    for (let i = 0; i < 5; i++) {
      console.log(i);
    }

    //!while
    let i: number = 0;

    while (i < 5) {
        console.log(i);
        i++;
    }

    //!do...while
    let j: number = 0;

    do {
        console.log(j);
        j++;
    } while (j < 5);

    //!for of
    let array: number[] = [1, 2, 3, 4, 5];

    for (let num of array) {
        console.log(num);
    }

    let persona={
      nombre:"Alexia",
      edad:23
    }

    for (let propiedad in persona) {
      console.log(`${propiedad}: ${persona[propiedad as keyof typeof persona]}`);
    }

  }

  //?----------------------------Interfaces---------------

  //todo: ayuda con el autocompletado y muestra error si no cumple con las condiciones

  //!extender y omitir interfaces
  book1: Book = {
    title: 'El Gran Gatsby',
    author: 'F. Scott Fitzgerald',
  };

  book2: BookExtended = {
    title: 'Cien años de soledad',
    author: 'Gabriel García Márquez',
    year: '1967',
    description: 'Una obra maestra del realismo mágico.',
  };

  book3: BookOm = {
    title: '1984',
    year: '1967',
    author: 'George Orwell',
  };

  //! interfaces en arreglos
  library: Book[] = [
    { title: "El Principito", author: "Antoine de Saint-Exupéry" },
    { title: "Cien años de soledad", author: "Gabriel García Márquez" },
    { title: "Harry Potter y la Piedra Filosofal", author: "J.K. Rowling" },
  ];

  coordinates: [Point, Point] = [{ x: 10, y: 20 }, { x: 30, y: 40 },];

  //?------------------Destructuracion---------------
  //!Destructuracion de objetos
  // Objeto original
  persona = {
    nombre: "Alexia",
    edad: 23,
    ciudad: "Concepcion",
  };

  destructuramosObjeto() {
    // Destructuración del objeto
    const { nombre, edad, ciudad } = this.persona;

    console.log(nombre);
    console.log(edad);
    console.log(ciudad);
  }

  //!Destructuracion de arreglos
  // Arreglo original
  frutas = ["manzana", "naranja", "plátano"];

  destructuramosArreglo() {
    //destructuración del arreglo
    const [fruta1, fruta2, fruta3] = this.frutas;
    console.log(fruta1); // "manzana"
    console.log(fruta2); // "naranja"
    console.log(fruta3); // "plátano"
  }


  //!Destructuracion en funciones
  // Función que recibe un objeto como argumento

  mostrarInformacion({ nombre, edad }: { nombre: string; edad: number }) {
    console.log(`Nombre: ${nombre}, Edad: ${edad}`);
  }

  destructuracionFuncion() {
    // Llamada a la función con destructuración de argumentos
    let person = { nombre: "Ana", edad: 25 };
    this.mostrarInformacion(person); // Imprime "Nombre: Ana, Edad: 25"
  }

  //?------------------Importaciones---------------

  funcionesImportadas() {
    const resultadoSuma = suma(10, 5);
    const resultadoResta = resta(10, 5);
    console.log("Resultado suma:", resultadoSuma);
    console.log("Resultado resta:", resultadoResta);

  }

    //?---------------- Genericos --------------------
    numero1: number = 5;
    numero2: number = 10;
    palabra1: string = "hola";
    palabra2: string = "mundo";

    intercambiar<T>(a: T, b: T, fn: (x: T, y: T) => void) {
      let temp: T = a;
      a = b;
      b = temp;
      fn(a, b); // Llamada a la función pasada como parámetro
    }

    mostrarValoresIntercambiados(){
      console.log("Antes del intercambio:");
      console.log("Número 1:", this.numero1, "Número 2:", this.numero2);
      console.log("Palabra 1:", this.palabra1, "Palabra 2:", this.palabra2);
      this.intercambiar<number>(this.numero1, this.numero2, (a, b)=>{
        this.numero1=a;
        this.numero2=b;
      });
      this.intercambiar(this.palabra1, this.palabra2, (a, b)=>{
        this.palabra1=a;
        this.palabra2=b;
      });

      console.log("Despues del intercambio:");
      console.log("Número 1:", this.numero1, "Número 2:", this.numero2);
      console.log("Palabra 1:", this.palabra1, "Palabra 2:", this.palabra2);
    }

}
