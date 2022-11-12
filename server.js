
const PORT = 8000
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const axios = require('axios')
const {Client} = require("@notionhq/client")
const { read } = require('fs')



const notionSecret = process.env.NOTION_SECRET
const notionDataSourcesId = process.env.NOTION_DATASOURCES_ID
const notionDataAttributesId = process.env.NOTION_DATAATTRIBUTES_ID

const otoSecret = process.env.OTO_SECRET
const testDb = process.env.TEST


if(!notionSecret || !notionDataSourcesId || !notionDataAttributesId ){
    throw Error("Must define NOTION_SECRET and NOTION_DATASOURCES_ID and NOTION_DATAATTRIBUTES_ID in env")
}

const notion = new Client({
    auth: notionSecret,
})


const app = express()
// this for dynamically getting data sources
const dataRouter = express.Router()

dataRouter.get("/", async (req,res) => {
    switch(req.url) {
        case "/":
        res.status(200)
        const query = await notion.databases.query({                    
        database_id: notionDataSourcesId
        }).then(result => console.log(result.results[0].properties))
    break;

    default:
        res.status(404)
        res.json({result: "defailt not found"})

}
})
    
    

dataRouter.get("/:id",(req,res) => {
    console.log(req.url)
    res.status(200)
    res.json({result:`data source with id ${req.params.id}`})
})
// this for dynamically getting conectors data
const connectorRouter = express.Router()

connectorRouter.get("/",(req,res) => {
    console.log(req.url)
    res.status(200)
    res.json({result:"sucess connector"})
})
connectorRouter.get("/:id",(req,res) => {
    console.log(req.url)
    res.status(200)
    res.json({result:`connecor with id ${req.params.id}`})
})

app.use(cors())

app.use("/data-sources",dataRouter)
app.use("/data-connectors",connectorRouter)

// app.get('*',  (req, res) =>  {
//     switch(req.url){
//         case "/data-sources":
//             console.log(req.url)
//             res.status(200)
//             res.json({result:"sucess data"})  
//             break;
//         case "/data-connectors":
//             console.log(req.url)
//             res.status(200)
//             res.json({result:"sucess connectore"})  
//             break;
//         case "/":
//             console.log(req.url)
//             res.status(200)
//             res.json({result:"done"})  
//             break;
//         default:
//             res.status(404)
//             res.json({result:"default err"}) 
//     }
   
       
// })


app.listen(8000, ()=> console.log(`server is running on port ${PORT} `))