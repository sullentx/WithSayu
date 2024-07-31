 
 class ArayListByEduAndSayu {

    matriz = [];

    constructor (matriz){

    this.matriz = matriz;
    

    }

    add (datito, datitotwo){
        
        const start = performance.now();
        
        for (let index = 0; index < this.matriz.length; index++) {
            this.matriz[datito] = new Array();
            for (let x = 0; x < this.matriz.length; index++) {
                this.matriz [datito][datitotwo];
            }

        }
        
        const end = performance.now();

        const totalTimeInsertion = start - end;

        return totalTimeInsertion;
    }

    // ordenamiento cuadratico
    linealSearch(datitoId){
        const start = performance.now();

        
        const end = performance.now();
        
        const totalTimeSearch = start - end;

        return totalTimeSearch;
    }

    isEmpty(){
        
        if( this.matriz.length == 0){
            return true;
        }
        return false;
        
    }
 
} 
 export default ArayListByEduAndSayu;