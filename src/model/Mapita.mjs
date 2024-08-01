class Mapita {
    
    constructor() {
        this.keys = [];
        this.values = [];
    }

    set(key, value) {
        const index = this.keys.indexOf(key);
        if (index === -1) {
            this.keys.push(key);
            this.values.push(value);
        } else {
            this.values[index] = value;
        }
    }

    get(key) {
        const index = this.keys.indexOf(key);
        if (index === -1) {
            return null;
        } else {
            return this.values[index];
        }
    }

    clear() {
        this.keys = [];
        this.values = [];
    }

    has(key) {
        return this.keys.indexOf(key) !== -1;
    }
}

export default Mapita
