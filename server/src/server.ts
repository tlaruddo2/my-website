require("dotenv").config();
import http from "http";
import { Client } from "@notionhq/client";

const notionDatabaseId = process.env.NOTION_DATABASE_ID;
const notionToken = process.env.NOTION_TOKEN;

if (!notionDatabaseId || !notionToken){
    throw Error("Must define notion token and database id in env");
}

const notion = new Client({auth: notionToken});

const host = "localhost"
const port = 8000;

const server = http.createServer( async (req, res) => {
    //* Avoid CORS error
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Content-Type", "application/json");

    switch(req.url){
        case "/":
            const query = await notion.databases.query({ database_id: notionDatabaseId });

            //
            const data = query.results.map((row) => {
                if ("properties" in row){
                    console.log(row.properties);

                }
                


            })
            // console.log(data);


            res.writeHead(200);
            res.end(JSON.stringify({ data: query }))
            break;
        
        default: 
            res.writeHead(400);
            res.end(JSON.stringify({ error: "Resource not found" }))
    }
})

server.listen( port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
})