"use strict";
//Shrinking Guest List: You just found out that your new dinner table won’t 
//arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a 
//message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in 
//your list. Each time you pop a name from your list, print a message to that 
//person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them 
//know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print 
//your list to make sure you actually have an empty list at the end of your 
//program.
let guestslist = ["Saad", "Murtaza", "Manto", "Asher", "Rehman", "M.Ahmed"];
// print a message
console.log("Hey Guys! This is to inform you that the table is not arrived so I can only invite two of you");
// Remove guests by using 'pop' method
while (guestslist.length > 2) {
    let RemoveGuests = guestslist.pop();
    if (RemoveGuests !== undefined) {
        console.log(`Sorry ${RemoveGuests}, I can't invite you`);
    }
}
// now print a message to the remaining two people that they are still invited 
guestslist.forEach(Remainguest => {
    console.log(`Dear ${Remainguest}, you are still invited for a dinner.`);
});
// now remove the remain two guest also to make the list empty
guestslist.splice(0, guestslist.length);
// now print a message to make sure the list is empty
console.log("Updated list of guest:", guestslist);
