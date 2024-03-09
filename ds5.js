"use strict";
let guests = ["Albert Einstein", "Marie Curie", "Isaac Newton", "Nikola Tesla"];
let unableToAttend = "Nikola Tesla";
console.log(`${unableToAttend} can't make it to dinner.`);
let newGuest = "Leonardo da Vinci";
guests[guests.indexOf(unableToAttend)] = newGuest;
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
