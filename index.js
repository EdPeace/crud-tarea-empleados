//Configuración de variables de entorno y que no den
//problema al utilizar importaciones de modulos al estilo ES6
import './loadEnv.js'
//se importa express
import express from 'express'
import router from './routes/routes.js'

//puerto que express usara
const PORT = 11000
//aplicación de express (server)
const app = express()


//definir el sistema de vistas (plantillas)
app.set('view engine','pug')

//Definir la ubicación de los archivos publicos
app.use(express.static('public'));

// Configuración para procesar los formularios
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// Url Raiz
/*app.get('/',(req,res)=>{
    res.render('index',{name:process.env.DB_USERNAME})
})*/





app.use('/',router)




//servidor de express escuchando el puerto
app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})