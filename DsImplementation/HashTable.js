class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }
  set(key, value) {
    let index = this.hash(key);
    this.table[index] = value;
    console.log(this.table);
  }
  get(key) {
    let index = this.hash(key);
    return this.table[index];
  }
  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) console.log(this.table[i]);
    }
  }
}

let makeHash = new HashTable(10);

makeHash.set("Mohan", "fgh");
makeHash.set("Mohn", "ss");
makeHash.set("Moan", "one");
let data = makeHash.get("Moan");
let data1 = makeHash.display();
console.log(data);

// Avoid Collsion

class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    if (key) {
      let total = 0;
      for (let i = 0; i < key.length; i++) {
        total += key.charCodeAt(i);
      }
      return total % this.size;
    }
  }
  set(key, value) {
    // hash the key
    let index = this.hash(key); //2
    // console.log(index);
    // this.table[index] = value;

    // get the value of the hashed Index
    let bucket = this.table[index];
    // console.log(this.table);

    if (!bucket) {
      // If the bucket is empty Push the value directly
      this.table[index] = [[key, value]];
      // this.table.push(...bucket);
    } else {
      const sameKeyItem = bucket.find((element) => element[0] === key);
      if (sameKeyItem) {
        // console.log(sameKeyItem[1] = value);
        sameKeyItem[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
  }

  get(key) {
    if (key) {
      // console.log(key);
      let index = this.hash(key);
      // return this.table[index];
      let bucket = this.table[index];
      // console.log(bucket);
      if (bucket) {
        const sameKeyItem = bucket.find((element) => {
          return element[0] === key;
        });
        if (sameKeyItem) {
          return sameKeyItem;
        }
      }
      return undefined;
    }
  }
  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) console.log(this.table[i]);
    }
  }
}

let makeHash = new HashTable(10);

makeHash.set("Moh", "fgh");
makeHash.set("Mohan", "fgh");
makeHash.set("Mohn", "ss");
makeHash.set("1", "one");

console.log(makeHash.get("1"));
