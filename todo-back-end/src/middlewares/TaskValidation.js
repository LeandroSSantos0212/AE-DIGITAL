const TasksModel = require('../model/TaskModel');
const { isPast } = require('date-fns');

const TaskValidation = async (req, res, next) => {

    const { macaddress, type, title, description, when, done } = req.body

    if (!macaddress)
        return res.status(400).json({ errors: [{ message: 'mac address required' }] });
    else if (!type)
        return res.status(400).json({ errors: [{ message: 'Type is required' }] });
    else if (!title)
        return res.status(400).json({ errors: [{ message: 'Title is required' }] });
    else if (!description)
        return res.status(400).json({ errors: [{ message: 'Description is required' }] });
    else if (!when)
        return res.status(400).json({ errors: [{ message: 'Date and time are required' }] });
    
    else {

        let exists;

        if (req.params.id) {
            exists = await TasksModel.findOne({
                '_id': { '$ne': req.params.id },
                'when': { '$eq': new Date(when) },
                'macaddress': { '$in': macaddress }
            });

        } 
        if (isPast(new Date(when)) && done==false) 
            return res.status(400).json({ errors: [{ message: 'Date and time are in Past' }] });
             
        else {
         
            
                
            exists = await TasksModel.findOne({
                'when': { '$eq': new Date(when) },
                'macaddress': { '$in': macaddress }
            });
        }
        if (exists) {
            return res.status(400).json({ errors: [{ message: 'Exist an activity in this time' }] });

        }


        next();
    }


};

module.exports = TaskValidation;


