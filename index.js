const express = require('express')
const exphbs = require('express-handlebars')
const app= express()
const port = 3600

const conn = require('./db/conn')
const Task= require('./models/Task')
/* ROUTES*/
const tasksRoutes= require('./routes/tasksRoutes')


app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  extname: '.handlebars'
}));
app.set('view engine', 'handlebars');


app.use(
    express.urlencoded({
        extended:true
    })
)

app.use(express.json())
app.use(express.static('public'))


app.use('/tasks', tasksRoutes)
conn.sync().then().catch((err)=>{
    console.log(err)
})

app.listen(port,()=>{
    console.log("servidor rodando na porta 3600")
})