import Guest from "../models/Guest.model.js";

export const updateGuest = async (req, res) => {
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