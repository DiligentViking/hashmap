import { LinkedList } from "./linked-list.js";

export function HashMap() {
  const loadFactor = 0.75;
  let capacity = 16;

  const buckets = [];
  for (let i = 0; i < capacity; i++) {
    buckets.push(LinkedList());
  }

  let size = 0;

  return {
    hash(key) {
      let hashCode = 0;

      const primeNumber = 31;
      for (let i = 0; i < key.length; i++) {
        hashCode += primeNumber * hashCode + key.charCodeAt(i);
        hashCode = hashCode % capacity;
      }

      return hashCode;
    },

    set(key, value) {
      const index = this.hash(key);
      const bucket = buckets[index];
      if (bucket.containsKey(key)) {
        bucket.updateKey(key, value);
      } else {
        const entry = {[key]: value};
        bucket.append(entry);
        size++;
      }
    },

    get(key) {
      const index = this.hash(key);
      const bucket = buckets[index];
      return bucket.getKeyValue(key);
    },

    has(key) {
      const index = this.hash(key);
      const bucket = buckets[index];
      return bucket.containsKey(key) ?? false;
    },

    remove(key) {
      const index = this.hash(key);
      const bucket = buckets[index];
      size--;
      return bucket.removeEntryByKey(key);
    },

    length() {
      return size;
    },

    clear() {
      for (const bucket of buckets) {
        const numEntries = bucket.size();
        for (let i = 0; i < numEntries; i++) {
          bucket.pop();
        }
      }
      size = 0;
    },

    keys() {
      const returnArr = [];
      for (const bucket of buckets) {
        const numEntries = bucket.size();
        for (let i = 0; i < numEntries; i++) {
          returnArr.push(Object.keys(bucket.at(i))[0]);
        }
      }
      return returnArr;
    },

    values() {
      const returnArr = [];
      for (const bucket of buckets) {
        const numEntries = bucket.size();
        for (let i = 0; i < numEntries; i++) {
          returnArr.push(Object.values(bucket.at(i))[0]);
        }
      }
      return returnArr;
    },

    entries() {
      const returnArr = [];
      for (const bucket of buckets) {
        const numEntries = bucket.size();
        for (let i = 0; i < numEntries; i++) {
          returnArr.push([Object.entries(bucket.at(i))[0]]);
        }
      }
      return returnArr;
    },

    showContents() {
      let returnString = '';
      buckets.forEach((linkedList, i) => {
        returnString += `${i}  =>  ${linkedList.toString()}\n`;
      });
      return returnString;
    }
  }
}
