let http = require("http");
let url = require("url");
let fs = require("fs");

http
  .createServer(function (req, res) {
    let q = url.parse(req.url, true);
    let filename = "./pages/" + q.pathname;

    if (q.pathname === "/") {
      console.log("default detected");
      fs.readFile("./pages/index.html", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
    } else {
      fs.readFile(filename, function (err, data) {
        if (err) {
          res.writeHead(404, { "Content-Type": "text/html" });
          return res.end("404 Not Found");
        }
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
    }
  })
  .listen(8080);
