const todosModel = require ('../model/todosModel')

// afficher tout le contenu json
exports.getAll = (req,res) =>{
    todosModel.find().then((todos)=>{
        res.status(200).json(todos)
    }).catch(error=> res.status(400).json({error}))
}

// afficher un élément
exports.getOne = (req, res) => {
    todosModel.findOne({id:req.params.id}).then((todos)=>{
        res.status(200).json(todos)
    }).catch(error=> res.status(400).json({error}))
}

// création de l'élément
exports.post = (req, res) => {
    todosModel.create({description:req.body.query.description, done:false}).then((todos)=>{
        res.status(200).json(todos)
    }).catch(error=> res.status(400).json({error}))
}

// modification de l'élément
exports.patch = (req, res) => {
    todosModel.updateOne({id:req.params.id},req.body.query).then((todos)=>{
        res.status(200).json(todos)
    }).catch(error=> res.status(400).json({error}))
}

// suppression de l'élément
exports.delete= (req, res) => {
    todosModel.deleteOne({id:req.params.id}).then((todos)=>{
        res.status(200).json(todos)
    }).catch(error=> res.status(400).json({error}))
}