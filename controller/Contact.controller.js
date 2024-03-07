import contact from "../model/Contact.model.js";

export const sendContact = async (req, res)=>{
    try {
        const newContact = new contact(req.body);
        await newContact.save();
        return res.status(200).json(newContact);
    } catch (error) {
        return res.status(500).json(error);
    }
}