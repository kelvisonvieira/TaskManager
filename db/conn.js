const { truncateSync } = require('fs')
const { Sequelize} = require('sequelize')

const sequelize= new Sequelize('nodemvc2', 'root','32410358',{
    host:'localhost',
    dialect: 'mysql',
})

try{
sequelize.authenticate()
console.log('Conectamos ao MySQL!')
} catch(error){
   console.log(`Não foi possível conectar: ${error}`)
}

module.exports= sequelize