import ArayListByEduAndSayu from "../model/ArrayList.mjs";
import Matriz from "../model/Matriz.mjs";
const array = new ArayListByEduAndSayu();

console.log(array.isEmpty)

let filaSize = document.getElementById("fila-ipt");
let columnSize = document.getElementById("columna-ipt");
let createBtn = document.getElementById("btn-crear");
let stuffedSearch = document.getElementById("number-ipt");
let stuffedSearchBtn = document.getElementById("btn-rellenar");
let sumSearch = document.getElementById("suma-ipt");
let sumSearchBtn = document.getElementById("btn-search");
let burble = document.getElementById("burble-btn")
let matriz = new Matriz();


createBtn.addEventListener("click", ()=>{
    let fila = parseInt(filaSize.value);
    let columna = parseInt(columnSize.value);

    matriz.crearMatriz(fila, columna);
    console.table(matriz.getMatrix());
})

stuffedSearchBtn.addEventListener("click", ()=>{
    let num = parseInt(stuffedSearch.value);
    matriz.rellenarMatriz(num);

    console.table(matriz.getMatrix());
})

burble.addEventListener("click", ()=>{
    matriz.burble();
    console.table(matriz.getMatrix());
})


