// contact list, don't change this.
const contactsList = [
  {
    name: "Togusa",
    phone: "555 555-5555",
    image: "togusa.png",
    email: "togusa@secnine.com",
    ID: "0"
  },
  {
    name: "Tachikoma",
    phone: "555 555-5555",
    image: "tachikoma.png",
    email: "tachikoma@secnine.com",
    ID: "1"
  },
  {
    name: "Saito",
    phone: "555 555-5555",
    image: "saito.png",
    email: "saito@secnine.com",
    ID: "2"
  },
  {
    name: '"major" Motoko',
    phone: "555 555-5555",
    image: "motoko.png",
    email: "motoko@secnine.com",
    ID: "3"
  },
  {
    name: "Ishikawa",
    phone: "555 555-5555",
    image: "ishikawa.png",
    email: "ishikawa@secnine.com",
    ID: "4"
  },
  {
    name: "Batou",
    phone: "555 555-5555",
    image: "batou.png",
    email: "batou@secnine.com",
    ID: "5"
  },
  {
    name: "Aramaki",
    phone: "555 555-5555",
    image: "aramaki.png",
    email: "aramaki@secnine.com",
    ID: "6"
  },
]

// Your code goes here
const displayAllArea = document.getElementById('display_all_contacts')
const displayOneArea = document.getElementById('display_single_contact')


const displayAllContacts = () => {
  let display = ``
  for (let i = 0; i < contactsList.length; i++) {
    display = display + `<div class="display_all_contacts" id=${contactsList[i].ID}>
    <img src='img/${contactsList[i].image}' />
    <h2>${contactsList[i].name}</h2>
  </div>`
  }
  displayAllArea.innerHTML = display
}

page()

const page = () => {
  displayAllContacts()

  for (let i = 0; i < contactsList.length; i++) {
    console.log(contactsList[i].name)
    const d = document.getElementById(contactsList[i].ID)
    d.addEventListener('click', () => {
      displayOneArea.innerHTML = `<div class= 'individual_contact'><img src='img/${contactsList[i].image}' />
      <h2>${contactsList[i].name}</h2><h3>${contactsList[i].phone}</h3><h3>${contactsList[i].email}</h3><button id= 'close'>close</button></div>`

      const closebtn = document.getElementById('close')
      closebtn.addEventListener('click', () => {
        displayOneArea.innerHTML = ``
      })
    })
  }
}


// const page = () => {
//   displayAllContacts()

//   for (let i = 0; i < contactsList.length; i++) {
//     console.log(contactsList[i].name)
//     const d = document.getElementById(contactsList[i].ID)
//     d.addEventListener('click', () => {
//       displayOneArea.innerHTML = `<div class= 'individual_contact'><img src='img/${contactsList[i].image}' />
//       <h2>${contactsList[i].name}</h2><h3>${contactsList[i].phone}</h3><h3>${contactsList[i].email}</h3><button id= 'close'>close</button></div>`

//       const closebtn = document.getElementById('close')
//       closebtn.addEventListener('click', () => {
//         displayOneArea.innerHTML = ``
//       })
//     })
//   }
// }
