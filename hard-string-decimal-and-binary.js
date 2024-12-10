/*
Buatlah 2 buah fungsi :

1. decimalToBinary => untuk merubah sebuah ANGKA desimal menjadi string binary
2. binaryToDecimal => untuk merubah sebuah STRING binary menjadi angka desimal

CATATAN : input selalu ada dan valid
*/

// Algoritma bisa dilihat di https://www.rapidtables.com/convert/number/decimal-to-binary.html
function decimalToBinary(angka) {
  //** Cara Gampang */
  // return angka.toString(2)

  let bin = ""
  while (angka > 0) {
    bin = (angka % 2).toString() + bin
    angka = Math.floor(angka / 2)
  }
  return bin
}

console.log(decimalToBinary(0))  // 0
console.log(decimalToBinary(1))  // 1
console.log(decimalToBinary(2))  // 10
console.log(decimalToBinary(5))  // 101
console.log(decimalToBinary(20)) // 10100

// Algoritma bisa dilihat di https://www.rapidtables.com/convert/number/binary-to-decimal.html
function binaryToDecimal(binary) {
  let newBinary = ""
  for (let i = binary.length - 1; i >= 0; i--) {
    newBinary += binary[i];
  }
  let result = 0

  for (let i = 0; i < newBinary.length; i++) {
    result += newBinary[i] * (2 ** i)
  }
  return result

  //** Cara Gampang */
  return parseInt(binary, 2)
}

console.log(binaryToDecimal('0'))     // 0
console.log(binaryToDecimal('1'))     // 1
console.log(binaryToDecimal('101'))   // 5
console.log(binaryToDecimal('11011')) // 27