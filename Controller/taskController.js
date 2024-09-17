import Task from "../Model/taskModel.js"

export const addTask = async(req,res)=>{

    try {

        const {title,description,duedate,status} = req.body;
       

        const addTask = new Task({
            title,
            description,
            duedate,
            status
        })

        const addedTask = await addTask.save();
        if(!addedTask){
            res.json({message:"task not added"})
        }

        res.status(201).json(addedTask)
        
    } catch (error) {
        console.log("something went wrong", error);
        res.status(500).json({message:"failed to add task"});
    }
}


export const getTask = async(req,res)=>{
    try {
        
        const task = await Task.find();
        res.json(task).status(200)
    } catch (error) {
        onsole.log("something went wrong", error);
        res.status(500).json({message:"failed to find task"})
    }
}

export const deleteTask = async(req,res)=>{
    try {
        
        const id = req.params.id

        const deletedTask = await Task.findOne({_id:id})

        if(!deleteTask){
            res.status(404).json({message:"no task found"})
        }
        res.status(200).json({message:"task deletion complte"})
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
}