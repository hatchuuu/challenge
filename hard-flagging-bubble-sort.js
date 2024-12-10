/*
Buatlah sebuah function bernama myBubbleSort yang akan menerima sebuah array of number. 
Implementasikan algoritma bubble sort yang di improve dengan menggunakan flagging. 
Flagging dipakai untuk menentukan 
apakah pada iterasi terakhir ada dilakukan 
value switching ( penukaran nilai ). 
Jika tidak ada, maka tidak perlu melakukan iterasi lagi setelahnya, 
jika masih ada

Algoritma bubble sort nya silakan dicari via googling :P
*/

function myBubbleSort(arr) {
  let change = false
  for (let i = 0; i < arr.length; i++) {
    change = false

    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        change = true
      }
    }
    if (!change) break
  }
  return arr
}

let input = [1, 2, 3, 56, 2, 55, 7, 4, 77, 4, 3, 2, 1]

console.log(myBubbleSort(input))
// [1, 1, 2, 2, 2, 3, 3, 4, 4, 7, 55, 56, 77]
