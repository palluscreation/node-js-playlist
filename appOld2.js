// const stuff = require("./stuff");
// console.log(stuff.counter(["pal", "sang", "lahon"]));
// console.log(stuff.adder(2, 3));
// console.log(stuff.PI);
// console.log(stuff.adder(stuff.PI, 10));

//#region *****Event Module*****
// const events = require("events");
// const util = require("util");

// const myEmitter = new events.EventEmitter();

// myEmitter.on("someEvent", function(msg) {
//   console.log(msg);
// });

// myEmitter.emit("someEvent", "Hello, event is emitted");

// const Person = function(name) {
//   this.name = name;
// };

// util.inherits(Person, events.EventEmitter);

// let s = new Person("Sanju");
// let p = new Person("Pal");
// let l = new Person("Lahon");

// let people = [s, p, l];

// people.forEach(function(person) {
//   person.on("speak", function(msg) {
//     console.log(person.name + " said : " + msg);
//   });
// });

// p.emit("speak", "hey dudes");

//#endregion

//#region *****Reading & Writing files******

// const fs = require("fs");
// let readMe = fs.readFileSync("readMe.txt", "utf8");
// fs.writeFileSync("writeMe.txt", readMe);
// console.log(readMe);

// fs.readFile("readMe.txt", "utf8", function(err, data) {
//   fs.writeFile("writeMe.txt", data, () => {});
// });
// fs.unlink("writeMe.txt", e => {
//   console.log(e);
// });
// console.log("test");
//#endregion

//#region ***** Create & Remove directories*****
// fs.mkdir("stuff", () => {
//   fs.readFile("readMe.txt", "utf8", function(err, data) {
//     fs.writeFile("./stuff/writeMe.txt", data, () => {});
//   });
// });

// fs.unlink("./stuff/writeMe.txt", e => {
//   if (e === null) {
//     fs.rmdir("stuff", e => {
//       console.log(e);
//     });
//   } else {
//     console.log(e);
//   }
// });
//#endregion

//#region *****Clients & Servers*****
// const http = require("http");
// const fs = require("fs");

// let server = http.createServer((req, res) => {
//   console.log("Request was made : " + req.url);
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   let myReadStream = fs.createReadStream(__dirname + "/readMe.txt", "utf8");
//   myReadStream.pipe(res);
// });
// server.listen(3000, "127.0.0.1");
// console.log("listening to port number 3000");
//#endregion

//#region *****Streams and Buffers*****

// let myReadStream = fs.createReadStream(__dirname + "/readMe.txt", "utf8");
// let myWriteStream = fs.createWriteStream(__dirname + "/writeMe.txt");

// myReadStream.on("data", function(chunk) {
//   console.log("New chunk received : ");
//   myWriteStream.write(chunk);
// });
//#endregion

//#region *****Pipes*****
// myReadStream.pipe(myWriteStream);
//#endregion

//#region *****Serving html pages*****
// const http = require("http");
// const fs = require("fs");

// let server = http.createServer((req, res) => {
//   console.log("Request was made : " + req.url);
//   res.writeHead(200, { "Content-Type": "text/html" });
//   let myReadStream = fs.createReadStream(__dirname + "/index.html", "utf8");
//   myReadStream.pipe(res);
// });
// server.listen(3000, "127.0.0.1");
// console.log("listening to port number 3000");
//#endregion

//#region *****Serving JSON data*****
// const http = require("http");
// const fs = require("fs");

// let server = http.createServer((req, res) => {
//   console.log("Request was made : " + req.url);
//   res.writeHead(200, { "Content-Type": "application/json" });
//   let myObj = {
//     name: "Pallab",
//     job: "Developer",
//     age: 28
//   };
//   res.end(JSON.stringify(myObj));
// });
// server.listen(3000, "127.0.0.1");
// console.log("listening to port number 3000");
//#endregion

//#region
const http = require("http");
const fs = require("fs");

let server = http.createServer((req, res) => {
  console.log("Request was made : " + req.url);
  if (req.url === "/home" || req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/index.html").pipe(res);
  } else if (req.url === "/contact-us") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/contact.html").pipe(res);
  } else if (req.url === "/api/jsondata") {
    let myObj = [
      {
        name: "Pallab",
        job: "Developer",
        age: 28
      },
      {
        name: "Sanju",
        job: "Developer",
        age: 56
      }
    ];
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(myObj));
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/404.html").pipe(res);
  }
});
server.listen(3000, "127.0.0.1");
console.log("listening to port number 3000");
//#endregion

//#region *****Node package manager*****

//#endregion
