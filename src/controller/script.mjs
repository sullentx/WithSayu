import ArrayListM from "../model/ArrayListM.mjs";
import TableManager from "../model/TableManager.mjs";


const sizeArrayInput = document.getElementById("number-size");
const btnSizeArray = document.getElementById("btn-sizeArray");
const indexInput = document.getElementById("index-ipt");
const stuffedArrayInput = document.getElementById("stuffed-ipt");
const btnStuffedArray = document.getElementById("btn-rellenar");
const btnMerge = document.getElementById("method-merge");
const searchResultDisplay = document.getElementById("search-result");
const btnBinarySearch = document.getElementById("btn-binarySearch");
const searchInput = document.getElementById("search-ipt");
const btnLinearSearch = document.getElementById("btn-linearSearch");
const btnFindPairs = document.getElementById("btn-findPairs");
const sumTargetInput = document.getElementById("sum-target");
const btnCuadratica = document.getElementById("btn-Cuadratica");
const searchCuadratica = document.getElementById("sum-cuadratica");

let array = new ArrayListM();
let tableManager = new TableManager('array-display');

let executionTimes = {
  mergeSort: [],
  binarySearch: [],
  linearSearch: [],
  findPairsWithSum: [],
  sumaDeK: []
};

btnSizeArray.addEventListener("click", () => {
  const sizeArray = parseInt(sizeArrayInput.value);
  array.createArray(sizeArray);
  tableManager.createTable(array.getArray());
});

btnStuffedArray.addEventListener("click", () => {
  const index = parseInt(indexInput.value);
  const element = parseInt(stuffedArrayInput.value);
  array.addElement(index, element);
  tableManager.createTable(array.getArray());
});

btnMerge.addEventListener("click", () => {
  const start = performance.now();
  array.mergeSort(); 
  const end = performance.now();
  const time = (end - start) / 1000;
  executionTimes.mergeSort.push(time);
  tableManager.createTable(array.getArray());
  updateChart(); 
});

btnBinarySearch.addEventListener("click", () => {
  const target = parseInt(searchInput.value);
  const start = performance.now();
  const result = array.binarySearch(target); 
  const end = performance.now();
  const time = (end - start) / 1000;
  executionTimes.binarySearch.push(time);

  if (result) {
    const [num1, num2] = result;
    searchResultDisplay.textContent = `Los números son ${num1} y ${num2} (Búsqueda Binaria)`;
  } else {
    searchResultDisplay.textContent = 'No se encontraron dos números cuya suma sea igual al objetivo (Búsqueda Binaria)';
  }

  tableManager.createTable(array.getArray());
  updateChart();
});

btnLinearSearch.addEventListener("click", () => {
  const target = parseInt(searchInput.value);
  const result = array.linearSearch(target);

  if (result) {
    const [num1, num2] = result;
    searchResultDisplay.textContent = `Los números son ${num1} y ${num2} (Búsqueda Lineal)`;
  } else {
    searchResultDisplay.textContent = 'No se encontraron dos números cuya suma sea igual al objetivo (Búsqueda Lineal)';
  }

  tableManager.createTable(array.getArray());
});

btnFindPairs.addEventListener("click", () => {
  const target = parseInt(sumTargetInput.value);
  const pairs = array.findPairsWithSum(target);
  if (pairs.length > 0) {
    searchResultDisplay.textContent = `Pares encontrados: ${pairs.map(pair => `[${pair[0]}, ${pair[1]}]`).join(', ')}`;
  } else {
    searchResultDisplay.textContent = 'No se encontraron pares con esa suma';
  }
  tableManager.createTable(array.getArray());
});

btnCuadratica.addEventListener("click", () => {
  const target = parseInt(searchCuadratica.value);
  const pairs = array.sumaDeK(target);

  if (pairs.length > 0) {
    searchResultDisplay.textContent = `Pares encontrados: ${pairs.map(pair => `[${pair[0]}, ${pair[1]}]`).join(', ')}`;
  } else {
    searchResultDisplay.textContent = 'No se encontraron pares con esa suma';
  }
  tableManager.createTable(array.getArray());
});

function updateChart() {
  const ctx = document.getElementById('chart').getContext('2d');
  const chart = new Chart(ctx, {
    type: 'bar', 
    data: {
      labels: ['mergeSort', 'binarySearch', 'linearSearch', 'findPairsWithSum', 'sumaDeK'],
      datasets: [{
        label: 'Execution Time (seconds)',
        data: [
          executionTimes.mergeSort[executionTimes.mergeSort.length - 1] || 0,
          executionTimes.binarySearch[executionTimes.binarySearch.length - 1] || 0,
          executionTimes.linearSearch[executionTimes.linearSearch.length - 1] || 0,
          executionTimes.findPairsWithSum[executionTimes.findPairsWithSum.length - 1] || 0,
          executionTimes.sumaDeK[executionTimes.sumaDeK.length - 1] || 0
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}
