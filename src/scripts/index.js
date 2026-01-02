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

console.log(
  hashMap.fnv1aHash('rewonos fdond qpowesndoffnoeennnnnn')
);
