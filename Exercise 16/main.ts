//More Guests: You just found a bigger dinner table, so now more space is 
//available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end 
//of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one 
//new guest to the end of your list. • Print a new set of invitation messages, 
//one for each person in your list.

let guestslist : string[]= ["Asher", "Rehamn", "Manto"]
console.log("Hey Guys! I found a bigger table");
//• Add one new guest to the beginning of your array by 'unshift' method.
guestslist.unshift("Saad")
console.log(guestslist);
// now we use 'splice' method to add one more person 'Murtaza 'in the 
//'guestlist' in the middle of array
guestslist.splice(Math.floor(guestslist.length/2),0,"Murtaza");
console.log(guestslist);
// now we use 'push' method to add one more person in the end of the array
guestslist.push("M.Ahmed")
console.log(guestslist);
// now we send invitation to all 'guestslist' members by using 'forEach'method
guestslist.forEach(guest => {
    console.log(`Dear ${guest}, you are invited for a dinner`);
});

