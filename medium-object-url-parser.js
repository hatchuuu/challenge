/*
===
URL Parser
===
Buatlah sebuah fungsi yang bernama urlParser, yang akan menerima input sebuah URL. Format URL adalah 'protocol://domain/username. Kemudian fungsi ini akan menghasilkan objek yang merupakan hasil parser dari URL yang di input. Jika username kosong, maka keluarkan tulisan : "not available" pada key username

Contoh ada pada driver code di bawah :
*/
// console.log(urlParser('https://facebook.com/foo'))
// {
//   protocol: 'https',
//   domain: 'facebook.com',
//   username: 'foo'
// }

// console.log(urlParser('http://imgur.co.id/'))
// {
//   protocol: 'http',
//   domain: 'imgur.co.id',
//   username: 'not available'
// }


const urlParser = (word) => {
    let url = {
        protocol: "",
        domain: "",
        username: ""
    }

    let isFirst = true
    let isMid = false
    let isLast = false
    for (let i = 0; i < word.length; i++) {


        if (isFirst) {
            if (word[i] == ":") {
                isFirst = false
            } else {
                url.protocol += word[i]
            }
        }

        else if (word[i] == "/" && word[i - 1] == "/") {
            isMid = true
        } else if (isMid) {
            if (word[i] == "/") {
                isMid = false
            } else {
                url.domain += word[i]
            }

        } else if (word[i] == "/") {
            isLast = true
        } else {
            url.username += word[i]
        }
    }
    if (url.username == "") {
        url.username = "not available"
    }

    console.log(url);
}




urlParser('https://facebook.com/foo')
urlParser('http://imgur.co.id/')