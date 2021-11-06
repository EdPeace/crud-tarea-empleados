import con from '../database/connection.js'

var departamento
var empleado
export const welcome = async (req,res) =>{
    departamento = await con.promise().query("select * from departamento").then(([rows,fields])=>{
        return rows;
    })
    empleado = await con.promise().query("select * from empleado").then(([rows,fields])=>{
        return rows;
    })

    res.render('index',{result:empleado,departamento:departamento})


},emp_reg_wel=async(req,res)=>{

    departamento = await con.promise().query("select * from departamento").then(([rows,fields])=>{
        return rows;
    })
    res.render('empleados',{y:departamento})
}, emp_reg_p = (req,res)=>{
    const {nombre, apellido, dir,depa}=req.body


    // construir la data
    const data={
        nombre:nombre,
        apellido:apellido,
        dir:dir,
        departamento:depa
    }

    con.query('insert into empleado set ?', data,((err) => {
        if(err) {
            throw err
        }
    }))
    res.redirect('/')
},pue_reg_wel=(req,res)=>{
    res.render('departamento')
},pue_reg_p=(req,res)=>{
    const {desc, salario}=req.body


    // construir la data
    const data={
        desc:desc,
        salario:salario,
    }

    con.query('insert into departamento set ?', data,((err) => {
        if(err) {
            throw err
        }
    }))
    res.redirect('/')
},del_emp = (req,res)=>{
    con.query("delete from empleado where idempleado=?",req.params.id,err => {
        if(err) {
            throw err
        }
    })
    res.redirect("/")
},del_pue = (req,res)=>{

    con.query("delete from departamento where iddepa=?",req.params.id,err => {
        if(err) {
            throw err
        }
    })
    res.redirect("/")
},act_emp_w=async (req,res)=>{
    empleado = await con.promise().query("select * from empleado where idempleado=?",req.params.id).then(([rows,fields])=>{
        return rows;
    })
    departamento = await con.promise().query("select * from departamento").then(([rows,fields])=>{
        return rows;
    })
    res.render('empleados',{id:req.params.id,r:empleado,y:departamento})
},act_emp_p=async (req,res)=>{
    const {nombre, apellido, dir,depa}=req.body

    const data={
        nombre:nombre,
        apellido:apellido,
        dir:dir,
        departamento:depa
    }

    con.query('update empleado set ? WHERE idempleado = ?', [data,req.params.id],((err) => {
        if(err) {
            throw err
        }
    }))
    res.redirect('/')
},act_pue_w=async (req,res)=>{
    departamento = await con.promise().query("select * from departamento where iddepa=?",req.params.id).then(([rows,fields])=>{
        return rows;
    })
    res.render('departamento',{id:req.params.id,r:departamento})
},act_pue_p=(req,res)=>{
    const {desc, salario}=req.body


    // construir la data
    const data={
        desc:desc,
        salario:salario,
    }

    con.query('update departamento set ? WHERE iddepa = ?', [data,req.params.id],((err) => {
        if(err) {
            throw err
        }
    }))
    res.redirect('/')
};