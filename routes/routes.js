import express from 'express'
const router = express.Router()
import {
    act_emp_p,
    act_emp_w, act_pue_p, act_pue_w,
    del_emp,
    del_pue,
    emp_reg_p,
    emp_reg_wel,
    pue_reg_p,
    pue_reg_wel,
    welcome
} from '../controllers/authController.js'

// Rutas para las vistas
router.get('/',welcome)
router.get('/empleados',emp_reg_wel)
router.get('/puestos',pue_reg_wel)
router.get('/delpue/:id',del_pue)
router.get('/delemp/:id',del_emp)
router.get('/puestos/:id',act_pue_w)
router.get('/empleados/:id',act_emp_w)
// Rutas para los controladores
router.post('/empleados',emp_reg_p)
router.post('/puestos',pue_reg_p)
router.post('/empleados/:id',act_emp_p)
router.post('/puestos/:id',act_pue_p)

export default router