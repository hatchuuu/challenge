/*
====
Menuju 1 digit
====
Input : diberikan sebuah angka multi digit
Proses : tambahkan semua digit dalam angka, masukkan ke dalam array output, proses berhenti ketika angka sudah 1 digit
Output : tampilkan seluruh angka yang terbentuk dari penjumlahan semua digit angka, hingga mendapat angka 1 digit

Contoh :
Input : 123
Output : [6]

Input : 999
Output : [27, 9]

Input : 542984
Output : [32, 5]

Input : 9992
Output : [29, 11, 2]
*/

const to1Digit = (num) => {
    let array = []
    let result = num

    while (result > 9) {
        let word = result.toString()
        let angka = 0
        for (let i = 0; i < word.length; i++) {
            angka += Number(word[i])
        }
        result = angka
        array.push(angka)
    }
    console.log(array);
}

let input = 123
to1Digit(input)

input = 999
to1Digit(input)

input = 542984
to1Digit(input)

input = 9992
to1Digit(input)

