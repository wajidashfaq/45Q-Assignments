"use strict";
//Changing Guest List: You just heard that one of your guests can’t make the 
//dinner, so you need to send out a new set of invitations. You’ll have to 
//think of someone else to invite.
let guestslist = ["Manto", "Asher", "Rehman"];
// now we remove 'Rehman' from a guests list
let unableAttend = guestslist.splice(2)[0];
console.log(`${unableAttend} is not invited for a dinner`);
// now we add another guest in replace of 'Rehman'
guestslist.push("M.Ahmed");
console.log(guestslist);
///print a message send invitation to each
guestslist.forEach(guest => {
    console.log(`Dear ${guest}, You are invited for a dinner.`);
});
