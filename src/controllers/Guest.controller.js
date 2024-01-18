import Guest from "../models/Guest.model.js";

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
    try {
        const result = await Guest.findOneAndUpdate({ _id: id }, { attendance: attendance }, null);    

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