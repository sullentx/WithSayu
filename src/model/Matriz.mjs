class Matriz{

    constructor(rows = 0, columns = 0) {
        this.rows = rows;
        this.columns = columns;
        this.matrix = this.createMatrix(rows, columns);
    }

    createMatrix(rows, columns) {
        const matrix = [];
        for (let i = 0; i < rows; i++) {
            const row = [];
            for (let j = 0; j < columns; j++) {
                row.push(0);  
            }
            matrix.push(row);
        }
        return matrix;
    }
    
    getMatrix() {
        return this.matrix;
    }
    fillMatrix(value) {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.columns; j++) {
                this.matrix[i][j] = value;
            }
        }
    }


    bubbleSort() {
        const flatArray = this.matrix.flat();
        let n = flatArray.length;
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                if (flatArray[j] > flatArray[j + 1]) {
                    
                    let temp = flatArray[j];
                    flatArray[j] = flatArray[j + 1];
                    flatArray[j + 1] = temp;
                }
            }
        }
        
        this.matrix = [];
        for (let i = 0; i < this.rows; i++) {
            const row = [];
            for (let j = 0; j < this.columns; j++) {
                row.push(flatArray[i * this.columns + j]);
            }
            this.matrix.push(row);
        }
    }
}