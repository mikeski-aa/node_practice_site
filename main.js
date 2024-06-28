const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
// let http = require("http");
// let url = require("url");
// let fs = require("fs");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./pages/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "./pages/about.html"));
});

app.get("/contact-me", (req, res) => {
  res.sendFile(path.join(__dirname, "./pages/contact-me.html"));
});

app.get("*", (req, res) => {
  // This route will match any unmatched route and serve error.html
  res.sendFile(path.join(__dirname, "pages", "404.html"));
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});

// http
//   .createServer(function (req, res) {
//     let q = url.parse(req.url, true);
//     let filename = "./pages/" + q.pathname;

//     // this is a super ugly if statement, I'm sure there is a much nicer way of laying this out but I'm not sure how

//     if (q.pathname === "/") {
//       console.log("default detected");
//       fs.readFile("./pages/index.html", function (err, data) {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.write(data);
//         return res.end();
//       });
//     } else if (q.pathname === "/about") {
//       console.log("about url detected");
//       fs.readFile("./pages/about.html", function (err, data) {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.write(data);
//         return res.end();
//       });
//     } else if (q.pathname === "/contact-me") {
//       console.log("contact-me url detected");
//       fs.readFile("./pages/contact-me.html", function (err, data) {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.write(data);
//         return res.end();
//       });
//     } else {
//       fs.readFile(filename, function (err, data) {
//         if (err) {
//           console.log("going into error");
//           fs.readFile("./pages/404.html", function (err, errorData) {
//             if (err) {
//               res.writeHead(500, { "Content-Type": "text/html" });
//               res.write("Internal server error");
//               return res.end();
//             }
//             res.writeHead(404, { "Content-Type": "text/html" });
//             res.write(errorData);
//             return res.end();
//           });
//         } else {
//           res.writeHead(200, { "Content-Type": "text/html" });
//           res.write(data);
//           return res.end();
//         }
//       });
//     }
//   })
//   .listen(8080);
