#!/usr/bin/env node
class HashMap {
  constructor () {
    let size = 16;
    this.hashMap = Array(size).fill().map(() => []);
  }

  hash (key) {

    let hashCode = 0;
        
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % 
                  newHashMap.hashMap.length;
    }

    return hashCode;
  }
}
const newHashMap = new HashMap();
console.log(newHashMap.hash(''))