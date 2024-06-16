#!/usr/bin/env node
class HashMap {
  constructor () {
    this.hashMap = Array(16).fill().map(() => []);
  };
}
const newHashMap = new HashMap();
console.log(newHashMap.hashMap)