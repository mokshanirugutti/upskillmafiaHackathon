const http = require("http");
const fs = require("fs").promises;
const path = require("path");

const PORT = 3000;


const server = http.createServer(async (req, res) => {
  const filePath = path.join(__dirname, 'images', req.url);
  if (req.url == '/') {
    try {
      const home = await fs.readFile("./pages/home.html", "utf-8");
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(home);
    } catch (error) {
      res.writeHead(500);
      res.end("Error loading the home page");
    }
  } 
  else if (req.url == '/about') {
    try {
      const home = await fs.readFile("./pages/about.html", "utf-8");
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(home);
    } catch (error) {
      res.writeHead(500);
      res.end("Error loading the home page");
    }
  } 
  else if (req.url == '/contact') {
    try {
      const home = await fs.readFile("./pages/contact.html", "utf-8");
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(home);
    } catch (error) {
      res.writeHead(500);
      res.end("Error loading the home page");
    }
  } 
  
  else {
    
    const filePath = path.join(__dirname, req.url);
    try {
      const data = await fs.readFile(filePath);
      const ext = path.extname(req.url).toLowerCase();
      let contentType = 'text/plain';

      switch (ext) {
        case '.jpeg':
        case '.jpg':
          contentType = 'image/jpeg';
          break;
        case '.png':
          contentType = 'image/png';
          break;
        case '.css':
          contentType = 'text/css';
          break;
        case '.js':
          contentType = 'application/javascript';
          break;
        
      }

      res.writeHead(200, { "Content-Type": contentType });
      res.end(data);
    } catch (error) {
      res.writeHead(404);
      const err = await fs.readFile("./pages/404.html", "utf-8");
      res.end(err);

    }
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
