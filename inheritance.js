// EREDITARIETÀ
// potreste trovarvi nella situazione di voler riutilizzare un costruttore
// anche in altri contesti; quindi nasce la necessità di poter ESPANDERE questo
// costruttore in un secondo momento

const Person = function (name, surname) {
  this.name = name
  this.surname = surname
}

let marioRossi = new Person('Mario', 'Rossi')
console.log(marioRossi)
let luigiBros = new Person('Luigi', 'Bros')

luigiBros.email = 'luigi.bros@gmail.com'
console.log(marioRossi)

// qualche volta vorremmo che anche MARIO riceva successivamente la proprietà email
// come si fa ad aggiungere al costruttore Person, in una fase successiva, una NUOVA
// proprietà? si lavora con i PROTOTIPI

// "aggiungiamo al costruttore" una proprietà phone:
Person.prototype.phone = '12345'
// abbiamo aggiunto al prototipo del costruttore Person una proprietà chiamata
// "phone" un valore predefinito
// è come se avessimo aggiunto allo stampino Person una proprietà "phone" con
// valore predefinito '12345

console.log(marioRossi.phone)
console.log(luigiBros.phone)

console.log(luigiBros.house)
// phone NON È una proprietà di marioRossi o luigiBros! è una proprietà del loro
// PROTOTYPE! vi si accede in ogni caso tramite la dot notation o la s.b. notation
// QUINDI --> JS cerca una proprietà nell'oggetto di riferimento e qualora non la trovasse
// va a cercarla nel suo prototipo, ed è capace di risalire la catena prototipale fino
// a 1) trovarla 2) restituire undefined

let wario = new Person('Wario', 'Wario')
console.log(wario.phone)

console.log(marioRossi)
