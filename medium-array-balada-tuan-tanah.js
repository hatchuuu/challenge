/*
====
Balada Tuan Tanah
====
Tuan Postoro adalah tuan tanah dengan aset properti yang sangat banyak yang tersebar di banyak komplek. Kali ini dia menugaskan anak buahnya untuk berkeliling dan menuliskan laporan pendapatan dan pengeluaran dari semua properti nya, per komplek. Sang anak buah memberikan laporan berupa array, dan akunting Tuan Postoro akan mengkompillasi laporan nya.

Angka positif : mendapatkan pembayaran sewa sebesar angka dikali harga sewa properti, yaitu sebesar 100 dollar per properti
Angka negatif : harus membayar pajak sebesar 20 dollar per properti
Angka nol     : semua properti di komplek itu sedang kosong

Contoh :
input = [1, 0, -1]
output :
Tuan Postoro mendapat 100 dollar, harus membayar pajak sebesar 20 dollar, dan ada 1 komplek yang kosong

input = [1, 1, 1]
output :
Tuan Postoro mendapat 300 dollar, harus membayar pajak sebesar 0 dollar, dan ada 0 komplek yang kosong

input = [1, -2, 3, 0, 5]
output :
Tuan Postoro mendapat 900 dollar, harus membayar pajak sebesar 40 dollar, dan ada 1 komplek yang kosong
*/

const baladaTuanTanah = (array) => {
    let pos = 0
    let neg = 0
    let nol = 0

    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            pos += array[i] * 100
        } else if (array[i] < 0) {
            neg += Math.abs(array[i] * 20)
        } else {
            nol++
        }
    }
    let message = `Tuan Postoro mendapat ${pos} dollar, harus membayar pajak sebesar ${neg} dollar, dan ada ${nol} komplek yang kosong`
    console.log(message);

}

let input = [1, 0, -1]
baladaTuanTanah(input)

input = [1, 1, 1]
baladaTuanTanah(input)

input = [1, -2, 3, 0, 5]
baladaTuanTanah(input)