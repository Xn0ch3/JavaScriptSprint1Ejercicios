//Ejercicios N°1 Convertir la siguiente función nombrada en una función flecha:

function imprimirMensaje(mensaje) {
    console.log(mensaje)
}

let mensaje = "Hola Cohort-52  Ej N°1"

imprimirMensaje(mensaje)

//Ejercicio N°2 Convertir la siguiente función nombrada en una función flecha:
//Function creaMultipicacion
function crearMultiplicacion(numero1, numero2) {
    let resultado = numero1 * numero2
    return resultado
}
console.log(crearMultiplicacion(4, 8) + "  Function Ej N°2")

//Arrow Function
const arrowMultiplicacion = (numero1, numero2) => numero1 * numero2;

console.log(arrowMultiplicacion(5, 8) + "  Arrow Function Ej N°2")

//Ejercicio N°3 Partiendo de un array const array = [ 1,2,3,4,5,6,7,8,9 ], aplicarle un map a ese array y pasarle como argumento la función nombrada mostrada en el ejemplo del punto 2. Mostrar por consola el nuevo array obtenido.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const array2 = array.map((elemento) => elemento * 2)
console.log(array + " Array comun")
console.log(array2 + " Array2 multiplicado  Ej N°3 .Map")

//Ejercicio N°4 Generar una función que reciba como parámetro un array de cervezas y devuelva un nuevo array con las 10 cervezas más alcohólicas


let nuevoarray = []
const cervezaMayorAlcohol = (beers) => {
    for (let amargas of beers) {
        if (beers.abv < 7.0) {
            nuevoarray.push(amargas)
        }
    }
    return nuevoarray
}


//Ejercicio N°5 Generar una función que reciba como parámetro un array de cervezas y devuelva un nuevo array con las 10 cervezas menos amargas.

function cervezasIbu(beers) {
    let ibuMenos = beers.toSorted((a, b) => a.ibu - b.ibu)
    ibuMenos = ibuMenos.slice(0, 10)
    return ibuMenos
}
console.log(cervezasIbu(beers))


//Ejercicio N°6 Generar una función que reciba como parámetro un array de cervezas y un nombre de una cerveza. La función deberá devolver el objeto completo que coincida con el nombre ingresado.

function objetoCerveza(beers, nombre) {
    return beers.find(beer => beer.name === nombre)
}
console.log(objetoCerveza(beers, "AB:07"))

//Ejercicio N°7 Generar una función que reciba como parámetro un array de cervezas, un valor y que devuelva el primer objeto que su propiedad ibu sea igual al valor ingresado, en caso de que no exista ninguna cerveza con ese ibu que muestre por consola un mensaje que diga “No existe cerveza con un ibu de (valor ingresado)”.

function ibuCerveza(beers, ibu) {
    return beers.find(beer => beer.ibu === ibu)
        || console.log(`No existe cerveza con un ibu de ${ibu}`);
}
console.log(ibuCerveza(beers, 30));



// Ejercicio N°8 Generar una función que reciba como parámetro un nombre de una cerveza y devuelva la posición en el array de esa cerveza. En caso de no encontrar el dicha cerveza se debe imprimir por consola un mensaje diciendo “(Nombre de la cerveza ingresada) no existe”. 

function tiempoCerveza(beers, nombre) {
    let cervezaNombre = beers.filter(beer => beer.name == nombre)[0]
    if (!cervezaNombre) {
        console.log(`${nombre} no existe`);
    }
    return cervezaNombre
}
console.log(tiempoCerveza(beers, "AB:05"));
console.log(tiempoCerveza(beers, "AB:07"));


//Ejercicio N°9 Generar una función que reciba como parámetro el array de cervezas y un valor de alcohol. La función debe devolver un nuevo array con las cervezas que no excedan el nivel etílico. Cada elemento del nuevo array debe ser un objeto que tenga la propiedades nombre, alcohol (abv) y "amargor" (ibu)

function nivelEtilico(beers, abv) {
    return beers.filter(beer => beer.abv > abv)
        .map(beer => ` ${beer.name}, ${beer.abv},${beer.ibu}`);

}

const resultado = nivelEtilico(beers, 5);
console.log(resultado);

//Ejercicio N°10 Generar una función que reciba como parámetro un array de cervezas, un nombre de propiedad y un valor booleano. Debe devolver un nuevo array con 10 cervezas ordenadas por la propiedad ingresada como segundo argumento, de manera ascendente si el tercero es true o descendente si es false.


function ordenAscendente(beers, propiedad, ascendente) {
    const nuevaCervezas = beers.toSorted(function (beersA, beersB) {
        if (ascendente) {
            return beersA[propiedad] - beersB[propiedad];
        } else {
            return beersB[propiedad] - beersA[propiedad];
        }
    });

    const cervezasOrdenadas = nuevaCervezas.slice(0, 10);

    return cervezasOrdenadas;
}
const cervezasOrdenadas = ordenAscendente(beers, "abv", true);
console.log(cervezasOrdenadas);


//Ejercicio N°11 Generar una función que reciba como parámetro un array de cervezas y un id de un elemento HTML donde se imprimirá la tabla. La función debe renderizar (renderizar, dibujar, pintar, llenar, etc) en un archivo html una tabla que contenga las columnas "Name", "ABV", "IBU", y una fila por cada elemento del array. Cada fila debe tener los datos que se piden de cada una de las cervezas.

function tablaCervezas(beers, id) {
    const buscartable = document.getElementById(id)
    function crearFila(beer) {
        let fila = `<tr>
            <td>${beer.name}</td>
            <td>${beer.abv}</td>
            <td>${beer.ibu}</td>
        </tr>`
        return fila
    }
    beers.forEach(beer => {
        let fila2 = crearFila(beer)
        buscartable.innerHTML += fila2
    });
}
tablaCervezas(ordenAscendente(beers, "name", true), "tbody",)
