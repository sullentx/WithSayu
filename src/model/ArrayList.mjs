class ArrayListByEduAndSayu {
    constructor(arrayChiquito = []) {
        this.arrayChiquito = arrayChiquito;
    }

    add(datito) {
        const start = performance.now();
        this.arrayChiquito.push(datito);
        const end = performance.now();
        const totalTimeInsertion = end - start;
        return totalTimeInsertion;
    }

    // Búsqueda lineal
    linealSearch(datitoId) {
        const start = performance.now();
        for (let j = 0; j < this.arrayChiquito.length; j++) {
            if (this.arrayChiquito[j] === datitoId) {
                const end = performance.now();
                const totalTimeSearch = end - start;
                return { found: true, index: j, time: totalTimeSearch };

            }
        }
        const end = performance.now();
        const totalTimeSearch = end - start;
        return { found: false, time: totalTimeSearch };
    }

    // Suma de K solucion cuadratica
    sumaDeK(K) {
        const start = performance.now();
        for (let i = 0; i < this.arrayChiquito.length; i++) {
            for (let j = i + 1; j < this.arrayChiquito.length; j++) {
                if (this.arrayChiquito[i] + this.arrayChiquito[j] === K) {
                    const end = performance.now();
                    const totalTime = end - start;
                    return { pair: [this.arrayChiquito[i], this.arrayChiquito[j]], indices: [i, j], time: totalTime };
                }
            }
        }
        const end = performance.now();
        return { pair: null, time: end - start };
    }

    // Merge Sort ordenamiento logaritmico 
    mergeSort() {
        let iterations = 0;

        const merge = (left, right) => {
            let result = [];
            while (left.length && right.length) {
                iterations++;
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

        const start = performance.now();
        this.arrayChiquito = sort(this.arrayChiquito);
        const end = performance.now();
        return { sortedArray: this.arrayChiquito, time: end - start, iterations: iterations };
    }

    // Búsqueda binaria
    binarySearch(datitoId) {
        const start = performance.now();
        let left = 0;
        let right = this.arrayChiquito.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (this.arrayChiquito[mid] === datitoId) {
                const end = performance.now();
                const totalTimeSearch = end - start;
                return { found: true, time: totalTimeSearch };
            } else if (this.arrayChiquito[mid] < datitoId) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        const end = performance.now();
        const totalTimeSearch = end - start;
        return { found: false, time: totalTimeSearch };
    }

    isEmpty() {
        return this.arrayChiquito.length === 0;
    }
}

export default ArrayListByEduAndSayu;
