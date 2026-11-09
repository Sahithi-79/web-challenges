console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

if (receivedPassword === SUPER_SECRET_PASSWORD) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied!");
}

// Part 2: Even / Odd
const number = 6;

if (number % 2 === 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}

// Part 3: Hotdogs
const numberOfHotdogs = 42;

if (numberOfHotdogs < 5) {
  console.log("Price: €2 per hotdog");
} else if (numberOfHotdogs < 100) {
  console.log("Price: €1.50 per hotdog");
} else if (numberOfHotdogs < 1000000) {
  console.log("Price: €1 per hotdog");
} else {
  console.log("Price: €0.10 per hotdog");
}

// Part 4: Daytime
const currentHour = 12;

const statement = currentHour < 17 ? "Still need to learn..." : "Partytime!!!";

console.log(statement);

// Part 5: Greeting

const userName = "Klaus";

const greeting = "Hello " + (userName === "Klaus" ? "Coach" : userName) + "!";

console.log(greeting);
