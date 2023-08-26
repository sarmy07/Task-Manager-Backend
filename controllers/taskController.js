const Task = require('../models/task');

const getAllTasks = async (req, res)=>{   
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
}

const createTask = async (req, res)=>{
    // console.log(req.body);

    try {
        const task = await Task.create(req.body)
        res.status(200).json({'message': 'Task created successfully'})
    } catch(error){
        res.status(400).json({'message': 'Wrong data sent'})
    }

    
    // console.log(task);

    // console.log('a post request just came in');
    // res.status(200).json({title: 'Create a new task'})
}

const getEachTask = async (req, res)=>{
    console.log(req.params);
    const task = await Task.findOne({_id: req.params.id});
    if (!task) {
        res.status(404).json({ message: `No task with ID:${req.params.id}`});
        return;
    }
   res.status(200).json({ task })
};


const deleteTask = async (req, res) =>{
    const task = await Task.findOneAndDelete({_id: req.params.id});
    if (!task){
        res.status(404).json({ message: `No task with ID:${req.params.id}`});
        return; 
    }
    res.status(200).json({ message: 'Task Deleted Successfully'});
}

const updateTask = async (req, res) =>{
    const task = await Task.findOneAndUpdate({_id: req.params.id}, req.body, {
        runValidators: true
    });


    if (!task){
        res.status(404).json({ message: `No task with ID:${req.params.id}`});
        return;
    }
    res.status(200).json({ message: 'Task Updated Successfully'});
};

module.exports = {
    getAllTasks,
    createTask,
    getEachTask,
    deleteTask,
    updateTask,
}