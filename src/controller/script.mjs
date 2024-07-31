import ArrayListM from "../model/ArrayListM.mjs";
import TableManager from "../model/TableManager.mjs";

const sizeArrayInput = document.getElementById("number-size");
const btnSizeArray = document.getElementById("btn-sizeArray");
const indexInput = document.getElementById("index-ipt");
const stuffedArrayInput = document.getElementById("stuffed-ipt");
const btnStuffedArray = document.getElementById("btn-rellenar");
const btnBurble = document.getElementById("method-burble");
const searchResultDisplay = document.getElementById("search-result");
const btnBinarySearch = document.getElementById("btn-binarySearch");
const searchInput = document.getElementById("search-ipt");
const btnLinearSearch = document.getElementById("btn-linearSearch");

let array = new ArrayListM();
let tableManager = new TableManager('array-display');

btnSizeArray.addEventListener("click", () => {
  const sizeArray = parseInt(sizeArrayInput.value);
  array.createArray(sizeArray);
  tableManager.createTable(array.getArray());
});

btnStuffedArray.addEventListener("click", () => {
  const index = parseInt(indexInput.value);
  const element = stuffedArrayInput.value;
  array.addElement(index, element);
  tableManager.createTable(array.getArray());
});

btnBurble.addEventListener("click", () => {
  array.bubbleSort();
  tableManager.createTable(array.getArray());
});

btnBinarySearch.addEventListener("click", () => {
  const target = searchInput.value;
  const result = array.binarySearch(target);
  if (result !== -1) {
    searchResultDisplay.textContent = `Elemento encontrado en el índice ${result}`;
  } else {
    searchResultDisplay.textContent = 'Elemento no encontrado';
  }
  tableManager.createTable(array.getArray());
});

btnLinearSearch.addEventListener("click", () => {
  const target = searchInput.value;
  const result = array.linearSearch(target);
  if (result !== -1) {
    searchResultDisplay.textContent = `Elemento encontrado en el índice ${result} (Búsqueda Lineal)`;
  } else {
    searchResultDisplay.textContent = 'Elemento no encontrado (Búsqueda Lineal)';
  }
  tableManager.createTable(array.getArray());
});
