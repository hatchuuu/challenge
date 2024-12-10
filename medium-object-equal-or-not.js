/*
===
Equal or Not
===
Buatlah sebuah fungsi isEqual yang akan menerima input 2 buah objek. Fungsi ini akan mencari tahu apakah 2 buah objek tersebut termasuk equal atau tidak.

Syarat equal :
- memiliki jumlah key yang sama
- memiliki nama-nama key yang sama

HINT : hiraukan huruf kapital atau tidak, contoh nama key 'Name' dan 'name' dianggap sama
*/
function isEqual(a, b) {
  if (Object.keys(a).length != Object.keys(b).length) return false

  let newObject = {}
  let isTrue = false

  for (const keyA in a) {
    newObject[keyA.toLowerCase()] = true
  }

  for (const keyB in b) {
    let key = keyB.toLowerCase()
    if (newObject.hasOwnProperty(key)) {
      isTrue = true
    } else {
      return false
    }
  }
  return isTrue
}

let a
let b

a = {
  foo: 1,
  bar: 2
}

b = {
  Foo: 8,
  bAR: 100
}

console.log(isEqual(a, b)) // true

a = {
  foo: 1,
  bar: 2,
  yeah: 9
}

b = {
  Foo: 8,
  bAR: 100
}

console.log(isEqual(a, b)) // false

a = {
  foo: 1,
  bar: 2
}

b = {
  Foo: 8,
  bARe: 100
}

console.log(isEqual(a, b)) // false