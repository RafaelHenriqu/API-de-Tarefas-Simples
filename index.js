const Express = require("express")
require("dotenv").config()
const MySQL = require("mysql2").createConnection({
    host:process.env.host,
    port:process.env.port,
    user:process.env.user,
    database:process.env.database,
    password:process.env.password,
})
const App = Express()
App.use(Express.json())

App.post("/add",(req,res)=>{
    
   MySQL.query(`INSERT INTO tarefas (_Title,_Description) values ("${req.body.Title}","${req.body.Desc}")`)
   res.send("Dados Salvos.")
})

App.get("/get",(req,res)=>{
   MySQL.query("SELECT * FROM tarefas",(err,result,fields)=>{
    
    res.send(result)

    })
 
})


App.listen(5000,()=>{
    console.log("Starting")
})