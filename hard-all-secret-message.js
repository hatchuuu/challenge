/*
SECRET MESSAGE
==============
Dalam situasi perang dengan Negara Api, Negara Air Mineral harus melakukan pengolahan pesan, agar tidak dapat dengan mudah dibaca oleh lawan.
Setiap prajurit, hanya membawa lembaran sajak. Kemudian, akan bertemu dengan messanger dari kumpulan prajurit lain.
Kumpulan prajurit terdepan akan memberikan "kunci" untuk membaca pesan yang tersimpan pada sajak yang dibawa

Cara menterjemahkan kode :
- Kunci adalah array of number, yang merupakan kumpulan angka-angka desimal
- Setiap angka harus dirubah ke dalam 4 digit binary, algoritma nya bisa dilihat di https://www.rapidtables.com/convert/number/decimal-to-binary.html
- 4 digit binary yang dihasilkan berisi angka 0 dan 1
- Kita akan mengambil kata-kata dalam sajak yang kita bawa, sesuai posisi angka 1, dilihat dari index kalimat ke 0
- Kata-kata setelah kata ke 4 akan dihiraukan
- Rangkaikan semua kata yang didapat, untuk mendapatkan pesan rahasia

Contoh :
Angka 1, binary nya dalam 4 digit adalah 0001
Jika kalimat sajak adalah "Ini adalah sajak pertama", maka ambil kata 'pertama'

Angka 5, binary nya dalam 4 digit adalah 0101
Jika kalimat sajak adalah "Semua musuh akan menyerang kembali besok malam", maka ambil kata 'musuh' dan 'menyerang', semua kata setelah kata 'menyerang' akan dihiraukan

PETUNJUK :
==========
Gunakanlah fungsi-fungsi yang sudah pernah kamu buat sebelumnya
*/

function getTheMessage(words, keys) {

  const toBinary = (num) => {
    let array = []
    while (num > 0) {
      array = [(num % 2), ...array]
      num = Math.floor(num / 2)
    }
    while (array.length < 4) {
      array = [0, ...array]
    }
    return array
  }

  let array = []
  for (let i = 0; i < keys.length; i++) {
    array.push(toBinary(keys[i]))
  }

  let arrayWord = []
  for (let i = 0; i < words.length; i++) {
    let newWord = words[i] + " "
    let word = []
    let message = ""
    for (let j = 0; j < newWord.length; j++) {
      if (newWord[j] == " ") {
        word.push(message)
        message = ""
      } else {
        message += newWord[j]
      }
    }
    arrayWord.push(word)
  }

  let result = ""
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] == 1) {
        result += arrayWord[i][j] + " "
      }
    }
  }




  return result;
}

let kunci = [1, 4, 2, 0, 12]

let sajak = [
  'Ingatkah kota kelahiran kita',     // 0001 => binary dari 1
  'Kota Serang nan indah dan lapang', // 0100 => binary dari 4,  hiraukan semua kata setelah 'indah'
  'Tidak ada musuh dari hati ini',    // 0010 => binary dari 2,  hiraukan semua kata setelah 'dari'
  'Karena damai selalu dalam diri',   // 0000 => binary dari 0,  tidak ada yang kita ambil
  'Besok pagi kita menuai padi'       // 1100 => binary dari 12, hiraukan semua kata setelah 'menuai'
]

console.log(getTheMessage(sajak, kunci)) // Kita serang musuh besok pagi

// kunci = [0, 1, 0, 2, 10, 2]
// sajak = [
//   'Cantik rupawan dirimu nak',                  // 0000 => binary dari 0
//   'Kulihat dari sembarang posisi dan tertegun', // 0001 => binary dari 1,  hiraukan semua kata setelah 'posisi'
//   'Bidadari terlahir',                          // 0000 => binary dari 0
//   'Akankah aku lawan keelokan ini',             // 0010 => binary dari 2,  hiraukan semua kata setelah 'keelokan'
//   'Di ufuk timur matahari tersenyum',           // 1010 => binary dari 10, hiraukan semua kata setelah 'matahari'
//   'Menerangi ujung lembah tempat kita berdiam', // 0010 => binary dari 2,  hiraukan semua kata setelah 'tempat'
// ]

// console.log(getTheMessage(sajak, kunci)) // Posisi lawan di timur lembah


