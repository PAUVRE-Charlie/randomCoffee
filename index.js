// ALGORITHM

const write = (count, str) => console.log(`\n${count}.`);

// 1. Write a function that takes two strings as arguments and returns a string containing only the characters found in both strings. How would you test it?
write(1);

const f1 = (a, b) => {
  let c = "";
  a.split("").forEach((s) => {
    if (b.includes(s) && !c.includes(s)) c += s;
  });
  return c;
};

console.log(f1("zaieazoiea", "abcdefr"), f1("ztyuo", "abcdefr"));

// 2. Given two different lists of objects, come up with an efficient solution to find the intersection of the two lists.

const f2 = (a, b) => a.filter((e) => b.includes(e));

// 3. Implement this function:
write(3);

const f3 = (n) => {
  if (n <= 1) return n;
  return f3(n - 1) + f3(n - 2);
};

for (let i = 0; i < 10; i++) console.log(i, f3(i));

// SQL

// 1. primary key

// 2. You know that data is in a particular table but you don’t know what the schema is for that table. How could you figure it out?

// 3. What are some different kinds of joins? How do they work? Can you give examples?

// 4. What is the difference between GROUP BY and ORDER BY?

// 5. Write a query to delete duplicate rows from a table.

// SYSTEMS DESIGN

// 1. If you are a web administrator, and you receive an **DDoS Attack**, where there are “N millions” of hits at the same time, how do you avoid the servers going down?

// 2. How would you design a link shortening URL system?

// JAVASCRIPT

// 1. What JavaScript libraries (or frameworks if you would prefer) have you used?

// 2. Explain AJAX in as much detail as possible. How does it work? What have you used it for in the past?

// 3. You want to get a query string parameter from the browser’s URL, how would you do it?

// 4. What are ways to write object oriented JavaScript? For example, explain how inheritance works.
write(4);

function Anim(name, age) {
  this.name = name;
  this.age = age;
}
Anim.prototype.speak = function () {
  return "I am a animal";
};
let bob = new Anim("Bobby", 45);

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  speak() {
    return "I am a animal";
  }
}
let bobby = new Animal("Bobby", 45);
console.log({ bobby });

class Dog extends Animal {
  constructor(name, age, bone) {
    super(name, age);
    this.bone = bone;
  }
  haveABone() {
    return bone ? `I have a bone` : "I don't have a bone";
  }
}
let doggy = new Dog("Doggy", 33, true);
console.log({ doggy });

// 5. What is a "closure" and how/why use one?

// 6. [1,2,3,4,5].duplicator(); // [1,2,3,4,5,1,2,3,4,5]

Array.prototype.duplicator = function () {
  return [...this, ...this];
};

write(6);
console.log([1, 2, 3, 4, 5].duplicator());

// REGULAR EXPRESSIONS

// 1. Write a regular expression to match a machine's MAC address.
write(1);

const regex = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;

console.log(regex.test("01-23-45-67-89-AB"));
console.log(regex.test("01-23-45-67-89-A"));
console.log(regex.test("01-23-57-89-AB"));

// 2. Write a simple regex for email validation?

write(2);
const regexEmail =
  /^([a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)?)+@([a-zA-Z0-9-]+\.[a-zA-Z0-9-]+)+$/;

console.log(regexEmail.test("chpauvre@gmail.com"));
console.log(regexEmail.test("chpauvre@imt.atlantique.com"));
console.log(regexEmail.test("charlie.pauvre@imt.atlantique.com"));
console.log(regexEmail.test("charlie..pauvre@imt.atlantique.com"));
console.log(regexEmail.test(".charlie.pauvre@imt.atlantique.com"));
console.log(regexEmail.test("chpauvre@gmail..com"));
console.log(regexEmail.test("chpauvre@gmailcom"));
console.log(regexEmail.test("chpauvregmail.com"));
console.log(regexEmail.test("chpau"));
console.log(regexEmail.test("chpau@.com"));
