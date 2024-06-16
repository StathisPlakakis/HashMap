#!/usr/bin/env node

import LinkedList from "./linkedList.js";

class HashMap {
  constructor () {
    let size = 16;
    this.hashMap = Array(size).fill().map(() => new LinkedList());
  }

  hash (key) {

    let hashCode = 0;
        
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.hashMap.length
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

  get (key) {
    const index = this.hash(key);
    const bucket = this.hashMap[index];
    if (!bucket.head) {
      return null;
    }
    let current = bucket.head;
    while (current) {
      if (current.value[0] === key) {
        return current.value[1];
      }
      current = current.nextNode;
    }
    return null;
  }

  has (key) {
    const has = this.get(key) ? true : false;
    return has;
  }
}


const newHashMap = new HashMap();
newHashMap.set('Carloski Alcareniz', 'Intern')
newHashMap.set('Carlaxio Lorentio', 'Intern')
newHashMap.set('Carlanaz Luerrin', 'Assocciate')
for (let i = 0; i < newHashMap.hashMap.length; i++) {
  console.log(newHashMap.hashMap[i].toString())
}