require("dotenv").config();
import http from "http"; 
import { Client } from "@notionhq/client"; 

// const notionDatabaseId = process.env.NOTION_DATABASE_ID;
// const notionToken = process.env.NOTION_TOKEN;
const notionDatabaseId = "1c0101b33ea04cbca65f26207db609c5"
const notionToken ="secret_9VmcnB2AyNLBC6aTzBBZZFI3j9vjgjDC9Q7yoRYXwbA"

if (!notionDatabaseId || !notionToken){
    throw Error("Must define notion toekn and databse id in env");
}

const notion = new Client({
    auth: notionToken,
})


const host = "localhost";
const port = 8000; 

const server = http.createServer(async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Content-Type", "application/json");
    
    switch(req.url){
        case "/": 
            res.writeHead(200);
            const data = await notion.databases.query({database_id: notionDatabaseId})
            console.log("data", data);
            res.end(JSON.stringify({data: data}));
            break;
        
        default: 
            res.writeHead(404);
            res.end(JSON.stringify({ error: "Resource not found"}))            
    }
})

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
})