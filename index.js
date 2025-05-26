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
   MySQL.query(`INSERT INTO tarefas (_Title,_Description,_Done) values (?,?,?)`,[req.body.Title,req.body.Desc,0])
   res.send("Dados Salvos.")
})

App.get("/get",(req,res)=>{
   MySQL.query("SELECT * FROM tarefas",(err,result,fields)=>{
    if (!err){
        res.send(result)
    }else{
        res.send("Desculpe porem algo falhou.")
    }
    

    })
 
})

App.patch("/done/:id",(req,res)=>{
    const id = req.params.id
    MySQL.query("UPDATE tarefas SET _Done = 1 WHERE _Id = ?",[id])
    res.send("Elemento Marcado como feito!")
})

App.patch("/notdone/:id",(req,res)=>{
    const id = req.params.id
    MySQL.query("UPDATE tarefas SET _Done = 0 WHERE _Id = ?",[id])
    res.send("Elemento Marcado como não feito!")
})

App.get("/done",(req,res)=>{

    MySQL.query("SELECT * FROM tarefas WHERE _Done = 1",(err,result,fields)=>{
        res.json(result)
    })

})

App.get("/notdone",(req,res)=>{
    
    MySQL.query("SELECT * FROM tarefas WHERE _Done = 0",(err,result,fields)=>{
        res.json(result)
    })

})

App.listen(5000,()=>{
    console.log("Starting")
})