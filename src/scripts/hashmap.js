import { LinkedList } from "./linked-list.js";

export function HashMap() {
  const loadFactor = 0.75;
  let capacity = 16;

  const buckets = [];
  for (let i = 0; i < capacity; i++) {
    buckets.push(LinkedList());
  }

  return {
    hash(key) {
      let hashCode = 0;

      const primeNumber = 31;
      for (let i = 0; i < key.length; i++) {
        hashCode += primeNumber * hashCode + key.charCodeAt(i);
      }

      return hashCode;
    },

    showContents() {
      buckets.forEach((linkedList) => {
        console.log(linkedList.toString());
      });
    }

  }
}
