//Ejercicio N1 Capturar el H1, mediante un ID, en una variable llamada "titulo".
const h1titulo = document.getElementById("titulo");
let tituloPrincipal = "Frutas";

//Ejercicio N2 Crean una variable "tituloPrincipal" cuyo valor sea "Frutas" y cambiar el contenido del título por el de esta variable.

h1titulo.innerHTML = tituloPrincipal;

//Ejercicio N3 Capturar el header y el footer, mediante la misma clase, y cambiarles el color a naranja.

let colorHeaderFooter = document.querySelectorAll(".colorNaranja");

for (propiedades of colorHeaderFooter) {
    propiedades.classList.add("bg-orange-500");
}

//Ejercicio N4 Capturar y modificar el p del footer, agregarle tu nombre completo y cohort.

let parrafoFooter = document.querySelector("p");
parrafoFooter.innerHTML += " Xavier Nochelli - Cohort 52";

//Ejercicios N5 Crear un div dentro del main y agregarle el id "contenedor". Capturar ese div por medio de su id.

const contenedor = document.getElementById("contenedor");

//Ejercicios N6 Crear una función que devuelva la estructura de una card. La función debe devolver un string para más adelante utilizar innerHTML. (La card debe contener los siguientes datos: nombre, foto y descripción).

function cardData(frutas) {
    return `<article class=" flex flex-col items-center border solid  border-black  justify-items-center  h-[15rem] w-[15rem] border-solid-5 p-5 rounded-lg " >
    <img class=" h-[5rem] w-[5rem] "  src="${frutas.foto}" alt="${frutas.nombre}" >
    <h2>${frutas.nombre} </h2>
    <p>${frutas.descripcion}</p>
    </article>`;
}

//Ejercicio N°7  Con el archivo data que se encuentra en la carpeta, realizar un bucle para crear cards con los datos de las frutas, utilizando la función del punto 6. (Este bucle podría meterse en otra función y recibir el array por parámetro).

function imprimirCard(frutas, contenedor) {
    let auxdiv = " ";
    for (const fruta of frutas) {
        const article = cardData(fruta);
        auxdiv += article;
    }
    contenedor.innerHTML += auxdiv;
}

//Ejercicio N°8 Mostrar las cards con los datos pedidos en el div ".contenedor".

imprimirCard(frutas, contenedor);

//Ejercicio N°9 Crear otro div dentro del main, agregarle el id "lista" y capturarlo mediante ese id. Agregar al div el título "Frutas Dulces".

const frutasDulces = document.getElementById("frutasDulces");

frutasDulces.innerHTML += `<h2 class=" font-bold " >Frutas Dulces</h2>`

//Ejercicio N°10 Crear una función que reciba un array y devuelva una lista desordenada utilizando nodos (createElement). Cada elemento de la lista será el nombre de una fruta. Para esta lista usar las frutas cuya propiedad "esDulce" sea true.

function listaFrutas(frutas) {
    const lista = document.createElement("ul")

        for (const fruta of frutas) {
            if (fruta.esDulce === true) {
                const li = document.createElement("li");
                li.textContent = fruta.nombre;
                lista.appendChild(li);
            }
        }

    return lista;

}

const listasFrutasDulces = listaFrutas(frutas);

//Ejercicio N°11 Mostrar la lista de frutas en el div ".clasfutasDulces". 


frutasDulces.appendChild(listasFrutasDulces);

