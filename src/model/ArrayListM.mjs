import Mapita from "./Mapita.mjs";
export default class ArrayListM {
    constructor() {
      this.array = [];
    }
  
    createArray(size) {
      this.array = new Array(size).fill(null);
    }
  
    addElement(index, element) {
      if (index >= 0 && index < this.array.length) {
        this.array[index] = element;
      } else {
        console.error('Index out of bounds');
      }
    }
  
    getArray() {
      return this.array;
    }
  
    mergeSort() {
        const merge = (left, right) => {
          let result = [];
          while (left.length && right.length) {
            if (left[0] < right[0]) {
              result.push(left.shift());
            } else {
              result.push(right.shift());
            }
          }
          return result.concat(left, right);
        };
    
        const sort = (arr) => {
          if (arr.length < 2) {
            return arr;
          }
          const mid = Math.floor(arr.length / 2);
          const left = arr.slice(0, mid);
          const right = arr.slice(mid);
          return merge(sort(left), sort(right));
        };
    
        this.array = sort(this.array);
      }
    
    binarySearch(target) {
      let low = 0;
      let high = this.array.length - 1;
      while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (this.array[mid] === target) {
          return mid;
        } else if (this.array[mid] < target) {
          low = mid + 1;
        } else {
          high = mid - 1;
        }
      }
      return -1;
    }
  
    linearSearch(target) {
      for (let i = 0; i < this.array.length; i++) {
        if (this.array[i] === target) {
          return i;
        }
      }
      return -1;
    }

    findPairsWithSum(target) {
        const sortedArray = [...this.array].sort((a, b) => a - b);
        let left = 0;
        let right = sortedArray.length - 1;
        const pairs = [];
    
        while (left < right) {
          const sum = sortedArray[left] + sortedArray[right];
          if (sum === target) {
            pairs.push([sortedArray[left], sortedArray[right]]);
            left++;
            right--;
          } else if (sum < target) {
            left++;
          } else {
            right--;
          }
        }
    
        return pairs;
    }

    SumaKConstante(K) {
      const start = performance.now();
      const datitoRegistrado = new Mapita();
  
      for (let i = 0; i < this.arrayChiquito.length; i++) {
          const complement = K - this.arrayChiquito[i];
          if (datitoRegistrado.has(complement)) {
              const end = performance.now();
              const totalTime = end - start;
              return { pair: [this.arrayChiquito[i], complement], time: totalTime };
          }
          datitoRegistrado.set(this.arrayChiquito[i], i);
      }
  
      const end = performance.now();
      return { pair: null, time: end - start };
    }
  }
  