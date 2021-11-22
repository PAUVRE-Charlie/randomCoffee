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

// pour tester, tester une fois avec deux listes complétement différentes et une fois avec des caractètes en commun
console.log(f1("zaieazoiea", "abcdefr"), f1("ztyuo", "abcdefr"));

// Given two different lists of objects, come up with an efficient solution to find the intersection of the two lists.
write(2);

const f2 = (a, b) => a.filter((e) => b.includes(e));

// Implement this function:
write(3);

const f3 = (n) => {
  if (n <= 1) return n;
  return f3(n - 1) + f3(n - 2);
};

for (let i = 0; i < 10; i++) console.log(i, f3(i));

// SQL

// 1. primary key

// A primary key is the column/field of the datamodel that is used to identify the rows and 2 rows can't have the same value for this field.

// 2. You know that data is in a particular table but you don’t know what the schema is for that table. How could you figure it out?

// You have to use the DESCRIBE keyword -> DESCRIBE dbName.tableName

// 3. What are some different kinds of joins? How do they work? Can you give examples?

// There are INNER JOIN, RIGHT JOIN, LEFT JOIN, FULL JOIN.
// For the examples, lets take the two following tables: a table of (id, name) and one of (id, age). The join will be on the id in both tables (table1.id = table2.id). It will return a table (id, name, age) in all cases.
// - INNER JOIN: return the rows that have a matching value in 2 tables: in the example, it will return only rows where the id is present in the two tables, which means there wont be NULL values in the resulting table
// - RIGHT JOIN: return the rows from the "RIGHT" table (the second one in the equality): in the example, it will return all the rows of table 2 and it will put in the name column the name if the id value of the row is included in table1, else it would be NULL
// - LEFT JOIN: same with the "LEFT" table
// - FULL JOINT: return all the ids of table1 and table2, and enter the value of name for id included in table1 and age for those of table2

// 4. What is the difference between GROUP BY and ORDER BY?

// GROUPBY is a keyword to "group" rows, which means that the rows will be divided in N parts where N is the number of different value found in the table for the field which is used to group by.
// While ORDERBY simply sort the columns, for example if its a string column it can sort the rows by alphabetical order

// 5. Write a query to delete duplicate rows from a table.

// In the previous example of question 3 with table1, DELETE t1 FROM table1 t1 INNER JOIN table1 t2 WHERE t1.id < t2.id AND t1.name = t2.name;

// SYSTEMS DESIGN

// 1. If you are a web administrator, and you receive an **DDoS Attack**, where there are “N millions” of hits at the same time, how do you avoid the servers going down?

// You can for example use "Black hole routing", which means creating routes that leads to nothing and creating a good identifier that redirect only the bad flows to theses routes
// There are also some web app firewalls you can use
// You can use passive cache like with Redit so that the same requests does not hit the server over and over.
// Or you can simply limit the rate o requests on your server

// 2. How would you design a link shortening URL system?

// We want to have the url as short as possible, with maybe a possibility to create custom urls, and the url should redirect to a bigger and unique url.
// To convert the url, I'd use Base64 because its efficient and it will provide a lot of short url possibilities : 64^N with N the short url lengths.
// Use a rest API because simple and we dont need graphql.
// One route to create a new short url and one to get the big url when we pass the short one
// The system should also expose its api in order to let other aps to use it.
// System should be scalable to be able to handle as much requests as it needs : load balancer or serverless as AWS.
// There will a lot more reads than writes. In order to not have to much read requests, I would use a cache (maybe Redis)
// use api keys and give one to each user to prevent spamming
// one table for users and one for links (that will have userID, the long url and the short created one)
// For scalability, well choose NoSQL options like MongoDB for example.

// JAVASCRIPT

// 1. What JavaScript libraries (or frameworks if you would prefer) have you used?

// for front-end dev I've used mostly React and React Native (a little bit of VueJS and NextJS) and for backend mostly Nodejs with express or mercurius.

// 2. Explain AJAX in as much detail as possible. How does it work? What have you used it for in the past?

// AJAX is a way of creating asynchronous web apps, which allow websites to be updated without reloading the page, to request/receive/send data from/to servers after the page has loaded.
// It uses JS and DOM for traitment, XML and JSON for data extraction and HTML/CSS for presentation.
// When using AJAX, the website exchanges data with web server in the background. It sends HttpRequest objects through internet to servers which process it and send a response back through internet. It is then processed with javascript on the browser and the page is then updated accordingly.

// 3. You want to get a query string parameter from the browser’s URL, how would you do it?

// You can parse the strings in JSON but the best way now is to use URLSearchParams like this : var urlParams = new URLSearchParams(window.location.search);

// 4. What are ways to write object oriented JavaScript? For example, explain how inheritance works.
write(4);

// You can use JS objects but the best way is to use classes.
// With JS objects, you can do things like this :
function Anim(name, age) {
  this.name = name;
  this.age = age;
}
Anim.prototype.speak = function () {
  return "I am a animal";
};
let bob = new Anim("Bobby", 45);

// With classes it is done like that:
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

// With inheritance, you dont have to repeat lines of codes if you want mutliple models to have shared aspects.
// For example, you can use the animal class and create the Dog class and the Cat class.
// They would both have a name, an age and they both can speak, but you can add to each of them specific characteristics that appears only in one of them and not the other.
// For example, a dog can have a bone. It would be done like this:

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

// It is a technique for implementing lexically scoped name binding. It is a record storing a function together with an environment. In other words, a closure gives you access to an outer function’s scope from an inner function.
// There are useful because it lets ou associate data with a function that is used on that data.
// Example in JS/CSS :

/*
function makeSizer(size) {
  return function () {
    document.body.style.fontSize = size + "px";
  };
}

var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);

document.getElementById("size-12").onclick = size12;
document.getElementById("size-14").onclick = size14;
document.getElementById("size-16").onclick = size16;

<a href="#" id="size-12">12</a>
<a href="#" id="size-14">14</a>
<a href="#" id="size-16">16</a>
*/

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
