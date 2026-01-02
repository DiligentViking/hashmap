import { HashMap } from "./hashmap.js";

const hashMap = HashMap();

console.log(
  hashMap.hash('k')
);

console.log(
  hashMap.set('b', 'lett'),
  hashMap.set('ab', 'sol'),
  hashMap.set('dilvik', 'ibwp'),
  hashMap.set('k', 'lett'),
);

console.log(
  hashMap.entries('')
);

console.log(
  hashMap.showContents()
);
