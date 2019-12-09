/**
* @author Werden Tristan
* @version 0.0.1
* @summary Driver Insurance bullcrap
* @todo
*/

//section 1 ^^
//Sorry for all the magic numbers- this is my second time coding this whole thing. It deleted itself the first time.  ¯\_(ツ)_/¯

"use strict";
const PROMPT = require('readline-sync')
let custLast, custFirst, birthMonth, birthDay, birthYear, policyNumber, age, atFault, premiumDueDateMonth, premiumDueDateDay, premiumDueDateYear, premiumPrice;
let currentYear = 2019;
//section 2 ^^

function main() {
  setCustFirst();
  setCustLast();
  setDob();
  setPolicyNumber();
  setAtFault();
  setPremiumDueDate();
  calculatePremiumPrice();
  printBill();
}

main();

//section 3 ^^

function setCustFirst() {
  custFirst = PROMPT.question(`\nPlease enter first name: `);
}

function setCustLast() {
  custLast = PROMPT.question(`\nPlease enter last name: `);
}

function setDob() {
  birthMonth = PROMPT.question(`\nPlease enter the month you were born: `);
  birthDay = PROMPT.question(`\nPlease enter the day you were born: `);
  birthYear = PROMPT.question(`\nPlease the year you were born: `);
  age = currentYear - birthYear;
}

function setPolicyNumber() {
  policyNumber = PROMPT.question(`\nPlease enter your policy number: `);
}

function setAtFault() {
  atFault = PROMPT.question(`\nPlease state the number of at-fault accidents you have been in within the last 3 years: `);
}

function setPremiumDueDate() {
  premiumDueDateMonth = PROMPT.question(`\nPlease enter the month your premium is due: `);
  premiumDueDatehDay = PROMPT.question(`\nPlease enter the day your premium is due: `);
  premiumDueDateYear = PROMPT.question(`\nPlease the year your premium is due: `);
}

function setPremiumPrice() {
  const BASEPRICE = 100;
  if (age > 0) {
      if (age > 15 && age < 30) {
          premiumPrice = 50 * atFault + BASEPRICE + 20;
      } else if (age >= 30 && age < 45) {
          premiumPrice = 50 * atFault + BASEPRICE + 10;
      } else if (age >= 46 && age < 59) {
          premiumPrice = 50 * atFault + BASEPRICE;
      } else {
          premiumPrice = 50 * atFault + BASEPRICE + 50;
      }
  }
}

function printBill() {
   console.log(`\n"Hello, your bill will be " + premiumPrice + ".");
}

//section 4 ^^

/*
The Drive-Rite Insurance Company provides automobile insurance policies for drivers. Code the following:
A program that accepts insurance policy data, including a policy number, customer last name, customer
first name, birth date, premium due date (month, day, and year), and number of at-fault driver accidents
in the last three years. Calculate customer age and set monthly insurance premium using the following criteria:


Base price = $100

Age > 15 && < 30 + $20

Age >= 30 && < 45 + 10

Age >= 46 && < 59 + 0

Age >= 60 +30

Each at-fault accident = + 50


Use proper recursion and input validation/sanitization.
*/
