class Mapita{
    constructor (){
        this.key = []
        this.value = []
    }

    set(key,value){
        const index = this.key.indexOf(key);
        if(index === -1 ){
            this.key.push(key);
            this.value.push(value);
        }else{
            this.value[index] = value;
        }
    }

    get(key){
        const index = this.key.indexOf(key);
        if(index === -1 ){
            return null
        }else{
            return this.value[index];
        }
    }

    clear(){
        this.key = []
        this.value = []
    }

    datitoFound(key){
        return this.key.indexOf(key) !== -1;
    }
}
export default Mapita; 