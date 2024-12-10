/*
Buatlah fungsi dengan nama kompilasi, dengan parameter input array 2 dimensi seperti pada contoh. Fungsi bertugas untuk membuat rekap data dalam bentuk object, dimana semua data akan dikelompokkan berdasarkan jurusan. Bentukan output dapat dilihat pada contoh

Contoh :

[
  ['Biologi', 'Jonas'],
  ['Fisika', 'Ulrich'],
  ['Akuntansi', 'Hannah'],
  ['Biologi', 'Barbosz'],
  ['Fisika', 'Claudia'],
  ['Biologi', 'Edmund'],
]

output : 
{
  Biologi: ['Jonas', 'Barbosz', 'Edmund'],
  Fisika: ['Ulrich', 'Claudia'],
  Akuntansi: ['Hannah']
}
*/

const kompilasiJurusan = (array) => {
  let obj = {}
  for (let i = 0; i < array.length; i++) {
    let matkul = array[i]
    if (obj[matkul[0]] == undefined) {
      obj[matkul[0]] = []
      obj[matkul[0]].push(matkul[1])
    } else {
      obj[matkul[0]].push(matkul[1])
    }
  }
  console.log(obj);
}

let data = [
  ['Biologi', 'Jonas'],
  ['Fisika', 'Ulrich'],
  ['Akuntansi', 'Hannah'],
  ['Biologi', 'Barbosz'],
  ['Fisika', 'Claudia'],
  ['Biologi', 'Edmund'],
]

kompilasiJurusan(data)