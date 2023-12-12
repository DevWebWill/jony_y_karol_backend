import { Router } from 'express';


export const router = Router();

import authRoutes from "./Auth.routes.js";
import guestRoutes from "./Guest.routes.js"
import demoRoutes from "./Demo.routes.js"

import User from '../models/User.model.js';

router.get('/', async (req, res) => {
    //res.send('Prueba para Jenkins!')
    let user = await User.findOne({ email: 'pepe@gmail.com'});
    
    //res.send(users)
    console.log(user);

    res.send(user)
});

router.use('/auth', authRoutes);
router.use("/guest", guestRoutes);
router.use("/demo", demoRoutes);

/** 
 * Para cualquier ruta que no exista 404 pero si lo habilito
 * no tengo acceso a la carpeta media de las imagenes
 */
/* router.use('*', (req, res) => {
    res.status(404);

    if(req.accepts('json')) {
        res.json({ 'error': '404 Not Found' });
    } else {
        res.type('text').send('404 Not Found');
    }
}) */

