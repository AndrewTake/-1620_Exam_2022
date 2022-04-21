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
    display = display + `<div class="display_all_contacts">
    <img src='img/${contactsList[i].image}' />
    <h2>${contactsList[i].name}</h2>
  </div>`
  }
  displayAllArea.innerHTML = display
}



displayAllContacts()
// **load contacts 5 points**

// Add functions to the app.js file that will create a card for every contact in the contact list provided in app.js.
// Although you don’t have to add functionality to create a new contact, your functions should be able to load a variable number of contacts. So if a new contact were added, your code would still create and display cards for all of the contacts. 
// contact cards should be added to the section with an id of “display_all_contacts”.

// **display a single contact 5 points**

// when a contact card is clicked (anywhere on the card) that cards contact information is displayed in the “display_single_contact” section.
// Make use of event delegation to achieve this (only one event handler should be used for all cards)
// Include an icon from Font Awesome for closing the contact in your new view.
// There is a video in the helpful hints section on how to do this (video has no sound)

// **close a contact 3 points**

// when your close icon is clicked the contact information is removed and all of the contacts are displayed again.

// **styling 3 points**

// complete the CSS document included so that your application looks like the examples provided.
// When displaying all contacts your grid should be flexible so that cards wrap and expand to fill space.

// **git 4 points**

// Break up your project into logical components. 
// Each component should have a git commit that clearly describes what was done.
// Original commit messages made by me should still be attached to the project

// Don’t use the GitHub dashboard to add content, use the terminal for all of your git commands

// **General**

// - Use only the assets provided
//     - colors must all be in the color palette
//     - any text on the page should be *Inter Sans-Serif* (500 or 200 weight)
//     - icons should come from Font Awesome
//     - Don’t add additional Assets such as JavaScript or CSS libraries.
// - Don’t change the project directory structure.
// - JavaScript and CSS should be properly formatted so that your code is easy to read.
// - JavaScript functions should be well structured, each function should do only one thing
// - CSS styles should be well organized (this has mostly already been done.)
// - CSS should make use of flexbox, don’t use floats or position.