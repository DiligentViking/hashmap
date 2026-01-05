import { LinkedList } from "./linked-list.js";

export function HashSet() {
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

    fnv1aHash(str) {  // courtesy of duck.ai
      let h = 0x811c9dc5;
      for (let i = 0; i < str.length; i++) {
        h ^= str.charCodeAt(i);
        h = (h + ((h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24))) >>> 0; // multiply by FNV prime (as bit ops)
      }
      return (h >>> 0) % capacity;
    },


    set(key) {
      const index = this.fnv1aHash(key);
      const bucket = buckets[index];
      if (!bucket.contains(key)) bucket.append(key);
      size++;

      if (size > capacity * loadFactor) {
        const oldBuckets = this.keys();
        buckets.length = 0;
        capacity *= 2;
        size = 0;
        for (let i = 0; i < capacity; i++) {
          buckets.push(LinkedList());
        }
        for (const oldBucket of oldBuckets) {
          this.set(oldBucket);
        }
      }
    },

    has(key) {
      const index = this.fnv1aHash(key);
      const bucket = buckets[index];
      return bucket.contains(key) ?? false;
    },

    remove(key) {
      const index = this.fnv1aHash(key);
      const bucket = buckets[index];
      size--;  // TODO: Fix this and in HashMap
      return bucket.removeAt(bucket.findIndex(key));
    },

    length() {
      console.log({size: size, loadLevel: capacity * loadFactor});
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
          returnArr.push(bucket.at(i));
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
