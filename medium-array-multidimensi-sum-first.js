/*
Buatlah fungsi sumFirst yang akan menerima input sebuah array 2 dimensi yang berisi angka2 random dan mengembalikan hasil penjumlahan element pertama saja dari setiap nested array nya
*/

const sumFirst = (array) => {
  let result = 0
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    result += element[0]
  }
  return result
}

let arr = [
  [1, 2, 3],
  [5, 4, 3, 2, 1],
  [10, 100000]
]

console.log(sumFirst(arr)) // 16, didapat dari 1 + 5 + 10