console.clear();

/*
Create a program that calculates the total cost of a meal, including tip, 
based on the cost of the meal and the percentage of the tip.//

/*1. Define two variables:
   - A variable that stores the value of the meal cost.
   - A variable that stores the value of the tip percentage.*/

let mealCost = 50; // Example meal cost
let tipPercentage = 0.15; // Example tip percentage (15%)
let tipAmount = mealCost * tipPercentage; // Calculate tip amount
let totalCost = mealCost + tipAmount; // Calculate total cost
console.log(`Meal Cost: $${mealCost.toFixed(2)}`);
console.log(`Tip Amount: $${tipAmount.toFixed(2)}`);
console.log(`Total Cost: $${totalCost.toFixed(2)}`);

console.log("Meal cost:", mealCost);
console.log("Tip amount:", tipAmount);
console.log("Total cost:", totalCost);
/*4. Log a message to the console that includes the meal cost, tip amount, and total cost.
 */
