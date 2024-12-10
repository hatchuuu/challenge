/*
Buatlah fungsi dengan nama susunPesan, dengan parameter input berupa array 2 dimensi. Setiap elemen array akan berupa array yang berisi kata dan posisi nya. Tugas fungsi ini adalah untuk menghasilkan kalimat sesuai dengan posisi kata. Silakan menambahkan contoh soal lain jika merasa perlu

Contoh :

[
  ['besok', 4],
  ['kita', 1],
  ['akan', 2],
  ['menyerang', 3],
  ['pagi', 5],
]

outputnya : 'kita akan menyerang besok pagi'


[
  ['granat', 3],
  ['musuh', 1],
  ['membawa', 2],
]

outputnya : 'musuh membawa granat'
*/

const susunPesan = (array) => {

  let newArray = Array(array.length)

  for (let i = 0; i < array.length; i++) {
    let [word, char] = array[i];
    newArray[char - 1] = word
  }
  let word = ""
  for (let i = 0; i < newArray.length; i++) {
    word += newArray[i] + " "
  }

  console.log(word);
}


let array = [
  ['besok', 4],
  ['kita', 1],
  ['akan', 2],
  ['menyerang', 3],
  ['pagi', 5],
]
susunPesan(array)

array = [
  ['granat', 3],
  ['musuh', 1],
  ['membawa', 2],
]
susunPesan(array)