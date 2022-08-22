class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    // generates a simple hash
    // the underscore denotes a private property (even though you technically can)
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) %
            this.data.length
        }
        return hash;
    } // O(1) hash's a very fast, they do not worry about the for loop making it O(n)  it stays as O(1)

    set(key, value) {
        let address = this._hash(key);
        if(!this.data[address]) {
            this.data[address] = [];
        } 
        this.data[address].push(key, value);
        return this.data;
    } // O(1)

    get(key) {
        let address = this._hash(key);
        const currentBucket = this.data[address];
        if(currentBucket) {
            for(let i = 0; i < currentBucket.length; i++) {

                if(currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        } // O(1)
        return undefined;
    }
}

const myHashTable = new HashTable(50); // size of the hash from 0 to 50
// console.log(myHashTable._hash('grapes'));
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 54);
myHashTable.get('grapes');

