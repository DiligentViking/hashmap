function HashMap() {
  const loadFactor = 0.75;
  let capacity = 16;

  return {
    hash(key) {
      let hashCode = 0;

      const primeNumber = 31;
      for (let i = 0; i < key.length; i++) {
        hashCode += primeNumber * hashCode + key.charCodeAt(i);
      }

      return hashCode;
    },
    
  }
}


const hashMap = HashMap();

