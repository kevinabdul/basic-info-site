const http = require("http");
const path = require("path");
const fs = require("fs")

const server = http.createServer((req,res)=> {
	let url = req.url;

	if (url === `/`) {
		fs.readFile("./index.html", (err, data)=> {
			if (err) {
				console.log(err);
			}
			res.end(data)
		})
	} else if (url === `/about`) {
		fs.readFile("./about.html", (err, data)=> {
			if (err) {
				console.log(err);
			}
			res.end(data)
		})
	} else if (url === `/contact-me`) {
		fs.readFile("./contact-me.html", (err, data)=> {
			if (err) {
				console.log(err);
			}
			res.end(data)
		})
	} else {
		fs.readFile("./404.html", (err, data)=> {
			if (err) {
				console.log(err);
			}
			res.end(data)
		})
	}	
})

server.listen(8080);

