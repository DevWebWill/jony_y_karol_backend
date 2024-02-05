import Guest from "../models/Guest.model.js";
import { transporter } from "../config/mailer.js";

/* export const createGuest = async (req, res) => {
    const obj = req.body
    const guest = obj.guest

    console.log("***************", guest)

    const docGuest = new Guest({
        name: guest.name,
        lastname: guest.lastname
    })
            
    docGuest.save()
    res.json({
        status: 200,
        data: docGuest,
        message: 'Invitado creado con éxito'
    })       
} */

export const updateGuest = async (req, res) => {
    const obj = req.body;
    const id = obj.id;
    const attendance = obj.attendance;
    console.log('Ha llegado al backend:', attendance);
    try {
        const result = await Guest.findOneAndUpdate({ _id: id }, { attendance: attendance }, null);    
        
        main(attendance, result.name).catch(console.error);
        
        res.json({
            status: 200,
            data: [result],
            message: 'Gracias por tu respuesta'
        })     
    } catch (error) {
        console.error(error)
    }
}

export const getGuest = async (req, res) => {
    const { slug } = req.body;

    Guest.find({ slug: slug }).then(guest => {
        if(!guest) {
            return res.json({
                status: 404,
                message: 'No existe el invitado'
            });
        } else {
            return res.json({
                status: 200,
                guests: guest,
                message: "Listado de Invitados"
            });
        }
    });
    
}

export const getGuests = async (req, res) => {
    const { slug } = req.body;

    Guest.find().then(guests => {
        if(!guests) {
            return res.json({
                status: 404,
                message: 'No existen invitados'
            });
        } else {
            return res.json({
                status: 200,
                guests: guests,
                message: "Listado de Invitados"
            });
        }
    });
    
}

async function main(attendance, name) {

    let message = "";
    let subject = "";
    if(attendance) {
        subject = name+" ha aceptado la invitación"
        message = `<b>${name} ha aceptado la invitación.</b>`
    } else {
        subject = name+" ha rechazado la invitación"
        message = `<b>${name} ha rechazado la invitación después de haberla aceptado.</b>`
    }

    // send mail with defined transport object
    await transporter.sendMail({
        from: '"Jony" <nuestraboda@karolyjona.es>', // sender address
        //to: "dev.web.will@gmail.com, baz@example.com", // list of receivers
        to: "bodadekarolyjona27@gmail.com", // list of receivers
        subject: subject, // Subject line
        //text: "Se ha iniciado sesión en Booxita", // plain text body
        html: message, // html body
    });
  
    //console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    //
    // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
    //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
    //       <https://github.com/forwardemail/preview-email>
    //
}