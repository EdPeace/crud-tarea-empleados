import con from '../database/connection.js'


export const welcome = async (req,res) =>{
    var puestos = await con.promise().query("select * from puesto").then(([rows,fields])=>{
        return rows;
    })
    var empleado = await con.promise().query("select * from empleado").then(([rows,fields])=>{
        return rows;
    })

    res.render('index',{result:empleado,Puestos:puestos})


},emp_reg_wel=async(req,res)=>{

    var puestos = await con.promise().query("select * from puesto").then(([rows,fields])=>{
        return rows;
    })
    res.render('empleados',{y:puestos})
}, emp_reg_p = (req,res)=>{
    const {nombre, apellido, dir,puesto}=req.body


    // construir la data
    const data={
        nombre:nombre,
        apellido:apellido,
        dir:dir,
        puesto:puesto
    }

    con.query('insert into empleado set ?', data,((err) => {
        if(err) {
            throw err
        }
    }))
    res.redirect('/')
},pue_reg_wel=(req,res)=>{
    res.render('puestos')
},pue_reg_p=(req,res)=>{
    const {desc, salario}=req.body


    // construir la data
    const data={
        desc:desc,
        salario:salario,
    }

    con.query('insert into puesto set ?', data,((err) => {
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

    con.query("delete from puesto where idpuesto=?",req.params.id,err => {
        if(err) {
            throw err
        }
    })
    res.redirect("/")
},act_emp_w=async (req,res)=>{
    var empleado = await con.promise().query("select * from empleado where idempleado=?",req.params.id).then(([rows,fields])=>{
        return rows;
    })
    var puestos = await con.promise().query("select * from puesto").then(([rows,fields])=>{
        return rows;
    })
    res.render('empleados',{id:req.params.id,r:empleado,y:puestos})
},act_emp_p=async (req,res)=>{
    const {nombre, apellido, dir,puesto}=req.body

    const data={
        nombre:nombre,
        apellido:apellido,
        dir:dir,
        puesto:puesto
    }

    con.query('update empleado set ? WHERE idempleado = ?', [data,req.params.id],((err) => {
        if(err) {
            throw err
        }
    }))
    res.redirect('/')
},act_pue_w=async (req,res)=>{
    var puestos = await con.promise().query("select * from puesto where idpuesto=?",req.params.id).then(([rows,fields])=>{
        return rows;
    })
    res.render('puestos',{id:req.params.id,r:puestos})
},act_pue_p=(req,res)=>{
    const {desc, salario}=req.body


    // construir la data
    const data={
        desc:desc,
        salario:salario,
    }

    con.query('update puesto set ? WHERE idpuesto = ?', [data,req.params.id],((err) => {
        if(err) {
            throw err
        }
    }))
    res.redirect('/')
};