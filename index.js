const http = require("http");
const path = require("path");
const fs = require("fs")
const home = fs.readFileSync("./index.html", "utf-8");
const about = fs.readFileSync("./about.html", "utf-8");
const contactMe = fs.readFileSync("./contact-me.html", "utf-8");
const notFound = fs.readFileSync("./404.html", "utf-8");

const server = http.createServer((req,res)=> {
	let url = req.url;

	if (url === `/`) {
		res.end(home)
	} else if (url === `/about`) {
		res.end(about);
	} else if (url === `/contact-me`) {
		res.end(contactMe);
	} else {
		res.end(notFound);
	}	
})

server.listen(8080);

