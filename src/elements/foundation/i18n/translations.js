import {pluralize} from "./i18n"; 
export let strings = {
    all_categories: {
      en: "All categories",
      de: "Alle Kategorien"
    },
    signed_in_as: {
      en: user => `Signed in as: ${user}`,
      de: user => `Eingeloggt als: ${user}`,
      fr: user => `Connecté en tant que: ${user}`
    },
    bus_tickets_booked: {
      en: pluralize([
        () => 'You have booked one ticket',
        num => `You have booked ${num} tickets`
      ]),
      de: pluralize([
        () => 'Du hast ein Ticket gebucht',
        (num) => `Du hast ${num} Tickets gebucht`
      ]),
      fr: pluralize([
        num => `Tu as réservé ${num} ticket`,
        num => `Tu as réservé ${num} tickets`
      ])
    },
    change_language: {
      en: "Change language",
      de: "Sprache ändern",
      fr: "Changer la langue"
    }
  }; 

 /* const test = fetch('/src/elements/foundation/i18n/de.json')
  .then(res => res.json()) // the .json() method parses the JSON response into a JS object literal
  .then(data => {
     // console.log(data.greeting)
      //return data
    });
  console.log('test: ', test) */

  export function test(key) {
    fetch('/src/elements/foundation/i18n/de.json')
    .then(res => res.json()) // the .json() method parses the JSON response into a JS object literal
    .then(data => {
        console.log('test: ', data[key])
        return console.log(data[key])
      });  
  }
  //test('greeting');
