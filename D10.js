
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
console.log("*********** A  ************* ")
let sum
sum = 10 + 20
console.log(sum)

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

console.log("*********** B  ************* ")

let random
random = Math.floor(Math.random() * 21)

console.log(random)


/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
console.log("*********** C  ************* ")

let me = {
  name: "carlos",
  surname: "sarmiento",
  age: 30
}
console.log(me)



/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
console.log("*********** D  ************* ")

delete me.age
console.log(me)



/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
console.log("*********** E  ************* ")

me.skills = ["html", "css", "javascript"]
console.log(me)




/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
console.log("*********** F  ************* ")

me.skills.push("somethingNew")
console.log(me)


/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
console.log("*********** G  ************* ")


console.log(me.skills.pop())
console.log(me)




// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
console.log("*********** 1  ************* ")

const dice = () => {
  const randomN = Math.floor(Math.random() * 6 + 1)
  return randomN

}
console.log(dice())


/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
console.log("*********** 2  ************* ")
const whoIsBigger = (a, b) => {
  if (a > b) {
    return a
  } else {
    return b
  }

}
console.log(whoIsBigger(11, 12))



/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
console.log("*********** 3  ************* ")
const splitMe = (srtFrase) => {
  const newArray = srtFrase.split(" ")
  return newArray

}

console.log(splitMe("divide questa frase!"))




/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
console.log("*********** 4  ************* ")

const deleteOne = (str, bool) => {
  let newStr
  if (bool === true) {
    newStr = str.slice(1)
    return newStr
  }
  else {
    newStr = str.slice(0, -1)

    return newStr
  }
}
console.log(deleteOne("myName", false))



/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
console.log("*********** 5  ************* ")

const onlyLetters = (str) => {
  const lettersTofilter = str.replace(/[0-9]/g, '');
  return lettersTofilter
}

console.log(onlyLetters("this text have 12312Ze12312r1o230 numbers"))


/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
console.log("*********** 6  ************* ")

const isThisAnEmail = (mail) => {
  let lettersFilters = /^\S+@\S+\.\S+$/
  return lettersFilters.test(mail)
}
console.log(isThisAnEmail("carlos@gmail.com"))


/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
console.log("*********** 7  ************* ")
const whatDayIsIt = () => {
  const dayofweek = new Date().getDay()
  switch (dayofweek) {
    case 0:
      return "domenica"
      break;
    case 1:
      return "lunedi"
      break;
    case 2:
      return "martedi"
      break;
    case 3:
      return "mercoledi"
      break;
    case 4:
      return "giovedi"
      break;
    case 5:
      return "vernerdi"
      break;
    case 6:
      return "sabato"
      break;

    default:
      break;
  }

}
console.log(whatDayIsIt())

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
console.log("*********** 8  ************* ")

const rollTheDices = (num) => {
  let sum = 0
  const values = []
  const ritorna = {}
  for (let i = 0; i < num; i++) {
    values[i] = dice()
  }

  for (let i = 0; i < values.length; i++) {
    sum = sum + values[i]
  }
  ritorna.sum = sum
  ritorna.values = values

  return ritorna
}
console.log(rollTheDices(3))



/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
console.log("*********** 9  ************* ")

const howManyDays = (giorno) => {

  const giornoPrima = new Date(giorno)
  const giornoOra = new Date()
  let quantoTempo = giornoOra.getTime() - giornoPrima.getTime()
  quantoTempo = Math.floor(quantoTempo / (1000 * 3600 * 24))

  return quantoTempo
}
console.log(howManyDays("12/10/2022"))


/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

console.log("*********** 10  ************* ")

const isTodayMyBirthday = (bday, bmonth) => {
  const todayDay = new Date().getDate()
  const todayMonth = new Date().getMonth()

  if (bday === todayDay && (bmonth - 1) === todayMonth) {
    return true
  }
  else {
    return false
  }

}
console.log(isTodayMyBirthday(16, 12))


// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file




/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
console.log("*********** 11  ************* ")




// const deleteProp = (obj, str) => {
//   for (let i = 0; i < obj.length; i++) {

//     delete obj[i][str]

//   }
//   return obj
// }
function deleteProp(obj, str) {
  obj.forEach(element => {
    delete element[str]

  });
  return obj
}
console.log(deleteProp(movies, "Title"))


/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
console.log("*********** 12  ************* ")


const newestMovie = (obj) => {
  const newMovie = { Year: "0" }

  for (let i = 0; i < obj.length; i++) {
    if (parseInt(obj[i].Year) > parseInt(newMovie.Year)) {
      Object.assign(newMovie, obj[i])

    }
  }
  return newMovie
}
console.log(newestMovie(movies))





/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
console.log("*********** 13  ************* ")

const countMovies = (obj) => {
  const numeriArr = obj.length
  return numeriArr
}

console.log("numero di movies:", countMovies(movies))

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
console.log("*********** 14  ************* ")

const onlyTheYears = movies.map(anni => {
  return anni.Year
})



console.log(onlyTheYears)




/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
console.log("*********** 15  ************* ")

const onlyInLastMillennium = movies.filter(movie => {
  return parseInt(movie.Year) < 2000
})

console.log(onlyInLastMillennium)



/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
console.log("*********** 16  ************* ")


const sumAllTheYears = movies.reduce((total, movie) => {
  console.log(movie.Year)
  console.log(total)

  return total + parseInt(movie.Year)
}, 0)

console.log(sumAllTheYears)


/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
console.log("*********** 17  ************* ")





// console.log(searchByTitle)

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
console.log("*********** 18  ************* ")





// console.log(searchAndDivide)



/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/





// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)
console.log("*********** 19  ************* ")

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
console.log("*********** 20  ************* ")

const someId = () => {
  const containerHtml = document.getElementById("container")


}





/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
console.log("*********** 21  ************* ")

const selectAlltd = () => {
  const tdHtml = document.querySelectorAll("td")

}




/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
console.log("*********** 22  ************* ")

const writeTd = () => {
  for (let i = 0; i < array.length; i++) {
    const tdText = document.querySelectorAll("td")

  }


}





/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
console.log("*********** 23  ************* ")

const bgRosso = () => {
  const link = document.querySelectorAll("a")

  for (let i = 0; i < link.length; i++) {
    link[i].style.backgroundColor = "red"

  }
}






/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
console.log("*********** 24  ************* ")
const aggiunge = () => {
  const newEle = document.createElement("span")

  document.querySelector("#myList").appendChild(newEle)
}





/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
console.log("*********** 25  ************* ")

const cleanEle = () => {
  const whatToClean = document.querySelector("#myList")
  whatToClean.textContent = ""
}






/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
const addClasTest = () => {
  const selecTr = document.querySelectorAll("tr")

  for (let i = 0; i < array.length; i++) {
    selecTr[i].classList.add("test")
  }
}


// [EXTRA] JS Avanzato
console.log("*********** 26  ************* ")

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.
 
  Esempio:
  halfTree(3)
 
  *
  **
  ***
 
*/
console.log("*********** 27  ************* ")

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.
 
  Esempio:
  tree(3)
 
    *
   ***
  *****
 
*/
console.log("*********** 28  ************* ")

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */


console.log("*********** 29  ************* ")





