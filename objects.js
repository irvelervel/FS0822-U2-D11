// in JS è possibile assegnare ad una variabile un valore di diversi tipi:
// stringhe, numeri, boolean, undefined, null, etc.

// ma qualsiasi valore NON primitivo diventa parte della famiglia degli oggetti

// che cos'è un oggetto? è un contenitore delimitato da parentesi graffe {}
// che al suo interno può contenere un numero potenzialmente illimitato di coppie
// chiave-valore

const obj = {} // <-- ho dichiarato quest'oggetto vuoto con la NOTAZIONE LETTERALE

const dog = {
  breed: 'Pomeranian', // una proprietà
  age: 2, // ogni proprietà è rappresentata da una coppia chiave-valore
  bark: function () {
    // un metodo
    console.log('I bark')
  },
}

const cat = {
  // se il nome di una proprietà non rispetta la classica nomenclatura JS
  'fur-type': 'short', // è possibile aggirare il problema delimitando il nome della
  'date.of.adoption': '01/01/2023', // proprietà con singoli o doppi apici
}

const rabbit = {
  color: 'white',
  eat: function () {
    // <-- un METODO
    alert("I'm eating!")
  },
  residence: {
    // il valore di una proprietà può benissimo essere a sua volta un oggetto!
    street: 'Via Roma 1',
    zipCode: 20100,
  },
}

// se io voglio creare un altro rabbit, devo nuovamente utilizzare la NOTAZIONE LETTERALE
const rabbit2 = {
  color: 'brown',
  eat: function () {
    alert("I'm eating as well")
  },
  residence: {
    // il valore di una proprietà può benissimo essere a sua volta un oggetto!
    street: 'Via Milano 50',
    zipCode: 50000,
  },
}

// come accedo alle proprietà di un oggetto?
// 1) DOT NOTATION
console.log(rabbit.color)
console.log(rabbit.residence.zipCode)

// 2) SQUARE BRACKETS NOTATION
console.log(cat['date.of.adoption'])
console.log(cat['fur-type'])
console.log(rabbit['color'])

// se provo ad accedere ad una proprietà NON DEFINITA, non ricevo un errore,
// non esplode il computer ma ricevo UNDEFINED (che è anche uno dei tipi primitivi in JS)
console.log(rabbit.stefano) // <-- stefano non esiste dentro rabbit --> UNDEFINED

rabbit.stefano = 100
// adesso rabbit contiene color, eat, residence E stefano
console.log(rabbit.stefano) // <-- 100
// questa caratteristica di aggiungere nuove coppie chiave-valore agli oggetti
// viene definita "CREAZIONE PER DEFINIZIONE"
console.log(rabbit)
delete rabbit.stefano // <-- elimina una coppia chiave/valore tramite il nome
console.log(rabbit)
// rabbit.eat() // <-- questo è un richiamo all'esecuzione del metodo eat, fa
// apparire il popup (alert)

// quindi gli oggetti JS sono entità "dinamiche", possono evolversi/modificarsi nel
// corso del tempo, durante l'esecuzione degli script.
// possiamo dire che gli oggetti JS possono beneficiare di una DEFINIZIONE INCREMENTALE:
// si parte da una definizione BASE, e la si può arricchire man mano.

const student = {
  name: 'Gino',
  surname: 'Verdi',
  age: 25,
  sayYourName: function () {
    return this.name + ' ' + this.surname
  }, // this in questo caso valuta l'oggetto e restituisce il name corrente e il
  // surname corrente
}

console.log(student.sayYourName()) // <-- 'Gino Verdi'

let singer = {
  name: 'Gianni',
  surname: 'Morandi',
  sayHello: function () {
    return 'Hello, my name is ' + this.name + ' ' + this.surname
    // dovreste evitare di utilizzare singer invece che this
  },
}

let anotherSinger = singer
singer = null
console.log(anotherSinger.sayHello())

// ATTENZIONE A CREARE COPIE DI PRIMITIVE O OGGETTI
let x = 10
let y = x // a y viene assegnato IL VALORE di x, che è 10
x = x + 1 // <-- x? x è 11
console.log(y)

let obj1 = {
  name: 'Stefano',
  surname: 'Casasola',
}

let obj2 = obj1 // questa NON È una copia dell'oggetto, ma soltanto un nuovo
// modo per accedere a obj1 - perchè NON È un dato primitivo

obj2.name = 'Carlo'
console.log(obj1.name)
console.log(obj2.name)
// modificando name dentro obj2 abbiamo modificato anche name dentro obj1, perchè
// sono solamente due riferimenti allo stesso oggetto

// METODI ESPCLITI PER CREARE CLONI DI OGGETTI
// 1) SPREAD OPERATOR
let realObj1Copy = { ...obj1 } // questo è un NUOVO OGGETTO, ... si chiama spread operator
// i ... trasportano tutte le coppie chiave valore dall'oggetto selezione
realObj1Copy.name = 'Gino'
console.log(obj1.name)

// 2) OBJECT.ASSIGN
// object assign richiede un target, di solito un oggetto vuoto, e una source, la sorgente
// da cui andremo a trasportare le proprietà
let realObj1Copy_another = Object.assign({}, obj1)
realObj1Copy_another.name = 'Pino'
console.log(obj1.name)
