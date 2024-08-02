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
    const start = performance.now();
    
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
    
    const end = performance.now();
    console.log(`mergeSort took ${(end - start) / 1000} seconds`);
  }

  binarySearch(target) {
    const start = performance.now();
    
    const sortedArray = [...this.array].sort((a, b) => a - b);  
    let left = 0;
    let right = sortedArray.length - 1;

    while (left < right) {
      const sum = sortedArray[left] + sortedArray[right];
      if (sum === target) {
        const end = performance.now();
        console.log(`binarySearch took ${(end - start) / 1000} seconds`);
        return [sortedArray[left], sortedArray[right]];
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
    
    const end = performance.now();
    console.log(`binarySearch took ${(end - start) / 1000} seconds`);
    return null;
  }

  linearSearch(target) {
    const start = performance.now();
    
    const complements = new Set();

    for (let num of this.array) {
      const complement = target - num;
      if (complements.has(complement)) {
        const end = performance.now();
        console.log(`linearSearch took ${(end - start) / 1000} seconds`);
        return [num, complement];
      }
      complements.add(num);
    }
    
    const end = performance.now();
    console.log(`linearSearch took ${(end - start) / 1000} seconds`);
    return null;
  }

  findPairsWithSum(target) {
    const start = performance.now();
    
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
    
    const end = performance.now();
    console.log(`findPairsWithSum took ${(end - start) / 1000} seconds`);
    return pairs;
  }

  sumaDeK(target) {
    const start = performance.now();
    
    const pairs = [];
    for (let i = 0; i < this.array.length; i++) {
      for (let j = i + 1; j < this.array.length; j++) {
        if (this.array[i] + this.array[j] === target) {
          pairs.push([this.array[i], this.array[j]]);
        }
      }
    }
    
    const end = performance.now();
    console.log(`sumaDeK took ${(end - start) / 1000} seconds`);
    return pairs;
  }
}
