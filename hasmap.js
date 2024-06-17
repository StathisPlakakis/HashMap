#!/usr/bin/env node

import LinkedList from "./linkedList.js";

class HashMap {
  constructor () {
    this.size = 16;
    this.loadFactor = 0.8;
    this.hashMap = Array(this.size).fill().map(() => new LinkedList());
  }

  hash (key) {

    let hashCode = 0;
        
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.hashMap.length;
    }

    return hashCode;
  }

  set (key, value) {
    const currentEntries = this.entries().length;
    if (this.size * this.loadFactor < currentEntries + 1) {
      const prevEntries = this.entries();
      this.size *= 2;
      this.hashMap = Array(this.size).fill().map(() => new LinkedList());
      for (let i = 0; i < prevEntries.length; i++) {
        const index = this.hash(prevEntries[i][0]);
        const bucket = this.hashMap[index];
        if (!bucket.head) {
          bucket.append([prevEntries[i][0], prevEntries[i][1]]);
          continue;
        }
        let current = bucket.head;
        while (current) {
          if (current.value[0] === prevEntries[i][0]) {
            current.value[1] = prevEntries[i][1];
            continue;
          }
          current = current.nextNode;
        }
        bucket.append([prevEntries[i][0], prevEntries[i][1]]);
      }
    }
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

  remove (key) {   
    if (!this.has(key)) {
      return false;
    } else {
    const index = this.hash(key);
    const bucket = this.hashMap[index];
    bucket.removeAtV(key)
    return true;
    }
  }

  length () {
    let totalLength = 0;
    for (let i = 0; i < this.hashMap.length; i++) {
      const bucket = this.hashMap[i];
      let current = bucket.head;
      while (current) {
        totalLength += 1;
        current = current.nextNode;
      }
    }
    return totalLength;
  }

  clear () {
    for (let i = 0; i < this.hashMap.length; i++) {
      const bucket = this.hashMap[i];
      bucket.head = null;
    }
  }

  keys () {
    let totalKeys = [];
    for (let i = 0; i < this.hashMap.length; i++) {
      const bucket = this.hashMap[i];
      let current = bucket.head;
      while (current) {
        totalKeys.push(current.value[0])
        current = current.nextNode;
      }
    }
    return totalKeys;    
  }

  values () {
    let totalValues = [];
    for (let i = 0; i < this.hashMap.length; i++) {
      const bucket = this.hashMap[i];
      let current = bucket.head;
      while (current) {
        totalValues.push(current.value[1])
        current = current.nextNode;
      }
    }
    return totalValues;    
  }

  entries () {
    let totalEntries = [];
    for (let i = 0; i < this.hashMap.length; i++) {
      const bucket = this.hashMap[i];
      let current = bucket.head;
      while (current) {
        totalEntries.push(current.value)
        current = current.nextNode;
      }
    }
    return totalEntries;    
  }
}