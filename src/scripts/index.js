import { HashMap } from "./hashmap.js";

const hashMap = HashMap();

hashMap.set('apple', 'red')
hashMap.set('banana', 'yellow')
hashMap.set('carrot', 'orange')
hashMap.set('dog', 'brown')
hashMap.set('elephant', 'gray')
hashMap.set('frog', 'green')
hashMap.set('grape', 'purple')
hashMap.set('hat', 'black')
hashMap.set('ice cream', 'white')
hashMap.set('jacket', 'blue')
hashMap.set('kite', 'pink')
hashMap.set('lion', 'golden')

hashMap.set('moon', 'silver')
hashMap.set('lala', '2');
hashMap.set('ice cream', 'butter');

console.log(
  hashMap.showContents()
);

hashMap.length()

console.log(
  hashMap.entries(),
);

console.log('\n----------\n\n')

// -----

import { HashSet } from "./hashset.js";

const hashSet = HashSet();

hashSet.set('apple', 'red')
hashSet.set('banana', 'yellow')
hashSet.set('carrot', 'orange')
hashSet.set('dog', 'brown')
hashSet.set('elephant', 'gray')
hashSet.set('frog', 'green')
hashSet.set('grape', 'purple')
hashSet.set('hat', 'black')
hashSet.set('ice cream', 'white')
hashSet.set('jacket', 'blue')
hashSet.set('kite', 'pink')
hashSet.set('lion', 'golden')

hashSet.set('moon', 'silver')
hashSet.set('lala', '2');
hashSet.set('ice cream', 'butter');

console.log(
  hashSet.keys(),
);

console.log(
  hashSet.showContents()
);

hashSet.length()
