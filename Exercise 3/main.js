"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Name Cases: Store a person’s name in a variable, and then print that person’s 
//name in lowercase, uppercase, and titlecase.
let myName = "wajid Ashfaq";
console.log("Lowercase:", myName.toLowerCase());
console.log("Uppercase:", myName.toUpperCase());
console.log("Titlecase:", myName.replace(/\b\w/g, c => c.toUpperCase()));
