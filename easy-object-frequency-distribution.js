/*
===
Frequency Distribution
===
Buatlah sebuah fungsi yang bernama getFrequencies yang akan melakukan pelaporan rangkuman atas nilai-nilai yang tesebar dalam sebuah array

Contoh :
getFrequencies(["A", "B", "A", "A", "A"]) // { A: 4, B: 1 }

getFrequencies([1, 2, 3, 3, 2]) // { "1": 1, "2": 2, "3": 2 }

getFrequencies([true, false, true, false, false]) // { true: 2, false: 3 }

getFrequencies([]) // {}
*/

const getFrequencies = (array) => {
    let freq = {}
    for (let i = 0; i < array.length; i++) {
        if (freq[array[i]] === undefined) {
            freq[array[i]] = 1
        } else {
            freq[array[i]]++
        }
    }
    console.log(freq);
}

getFrequencies(["A", "B", "A", "A", "A"]) // { A: 4, B: 1 }

getFrequencies([1, 2, 3, 3, 2]) // { "1": 1, "2": 2, "3": 2 }

getFrequencies([true, false, true, false, false]) // { true: 2, false: 3 }

getFrequencies([]) // {}