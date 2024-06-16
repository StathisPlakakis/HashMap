#!/usr/bin/env node

import LinkedList from "./linkedList.js";
import Node from "./node.js";

class HashMap {
  constructor () {
    let size = 16;
    this.hashMap = Array(size).fill().map(() => new LinkedList());
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

  set (key, value) {
    const index = this.hash(key);
    const bucket = this.hashMap[index];
    if (!bucket.head) {
      bucket.append([key, value]);
      return;
    }
    let current = bucket.head;
    while (current) {
      if (current.value[0] === key) {
        current.value[1] = value;
        return;
      }
      current = current.nextNode;
    }
    bucket.append([key, value]);
  }
}


const newHashMap = new HashMap();


for (let i = 0; i < newHashMap.hashMap.length; i++) {
  console.log(newHashMap.hashMap[i].toString())
}
