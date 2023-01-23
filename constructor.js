// gli oggetti in JS sono molto semplici da realizzare --> { }
// il problema arriva quando abbiamo la necessità di creare molti oggetti in serie,
// tutti autonomi ed indipendenti, con le stesse coppie chiave/valore
// ad es. diversi oggetti di tipo "persona"

let person1 = {
  name: 'Mario',
  surname: 'Rossi',
  address: 'Via della saggezza 1',
  email: 'mario.rossi@epicode.com',
  showName: function () {
    return this.name + ' ' + this.surname
  },
}

// benissimo, ma scrivendolo a mano con la notazione letterale abbiamo creato del
// codice NON facilmente riutilizzabile, siamo costretti e ripetere la definizione
// per ogni nuova persona.
// il nostro scopo invece è scrivere codice RIUTILIZZABILE! D R Y

// per aiutarci a scrivere da zero oggetti fatti con la stessa struttura esiste in JS
// il cosiddetto "costruttore" (constructor)
// un costruttore è una funzione JS che va invocata con l'operatore "new"

// camelCase -> thisIsVAariable
// PascalCase -> ThisIsAConstructor
const Person = function () {
  // per convenzione una funzione costruttore comincia con la lettera MAIUSCOLA,
  // seguendo la nomenclatura PascalCase
  this.name = ''
  this.surname = ''
  this.address = ''
  this.email = ''
  this.showName = function () {}
}

let giuseppeVerdi = new Person() // creo una nuova istanza del costruttore Person
console.log(giuseppeVerdi) // avrà tutti i campi vuoti
giuseppeVerdi.name = 'Giuseppe' // poi vado a personalizzare giuseppe, con il suo nome
giuseppeVerdi.surname = 'Verdi' // e il suo cognome
console.log(giuseppeVerdi) // ora ho ottenuto una persona con le caratteristiche specifiche

let marioRossi = new Person()
marioRossi.name = 'Mario'
marioRossi.surname = 'Rossi'
marioRossi.email = 'mario.rossi@epicode.com'

// step successivo: utilizzare i parametri del costruttore per immediatamente
// assegnare qualche valore alle nostre istanze
const NamedPerson = function (name, surname, email) {
  this.name = name
  this.surname = surname
  this.address = ''
  this.email = email
  this.showName = function () {}
}

const francoVerdi = new NamedPerson(
  'Franco',
  'Verdi',
  'franco.verdi@epicode.com'
)
console.log(francoVerdi)

const ginoBrulli = new NamedPerson('Gino', 'Brulli', 'gino.brulli@gmail.com')
ginoBrulli.address = 'Via della cocca 25'

console.log(ginoBrulli)
// in questo modo creiamo degli oggetti con qualche proprietà già compilata
