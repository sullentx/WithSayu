
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
  
    bubbleSort() {
      const arr = this.array.slice(); 
      const n = arr.length;
      for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
          if (arr[j] > arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          }
        }
      }
      this.array = arr;
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
  }
  