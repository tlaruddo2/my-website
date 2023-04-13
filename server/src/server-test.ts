import http from "http"; 

const host = "localhost";
const port = 8000; 

const server = http.createServer( (req, res) => {
    //* avoid CORS erros 
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Content-Type", "application/json");
    switch(req.url){
        //* will respond to queries to the domain root (like http://localhost/) 
        case "/": 
            res.writeHead(200);
            res.end(JSON.stringify({data: "success"}));
            break;

        //* Error other than root domain
        default: 
            res.writeHead(404);
            res.end(JSON.stringify({ error: "Resource not found"}))
    }
});

server.listen(port, host, () => { 
    console.log(`Server is running on http://${host}:${port}`);
})