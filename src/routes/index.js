const express = require('express');
const route = express.Router();
const colors = require('colors');
const Tareas = require('../models/tereas');


route.get('/' , async(req, res)=>{
   const tareas = await Tareas.find()
   console.log(tareas)
    res.render('index' ,{
        tareas
    })
})
route.post('/add' , async(req, res)=>{
const tarea = new Tareas(req.body);
await tarea.save()
    res.redirect('/')
    res.sendStatus(404)
})

route.get('/edit/:id' , async(req, res)=>{
    const {id} = req.params;
    const tarea = await Tareas.findById(id);
    tarea.estado = !tarea.estado;
    await tarea.save();
   res.render('edit' , {
       tarea
   })
   
   })
   route.post('/edit/:id' , async(req, res , next)=>{
   try{
    const {id} = req.params;
    const tarea =  await Tareas.updateOne({_id:id} , req.body);
    res.redirect('/')
    tarea
   }catch(e){
       return next(e)
   }
   })

route.get('/done/:id' , async(req, res)=>{
     const {id} = req.params;
     const tarea = await Tareas.findById(id);
     tarea.estado = !tarea.estado;
     await tarea.save();
    res.redirect('/')
    })

    route.post('/edit/:id' , async(req, res)=>{
        const {id} = req.params;
        const tarea = await Tareas.findById(id);
        tarea.estado = !tarea.estado;
        await tarea.save();
       res.redirect('/')
       })


route.get('/delete/:id' , async(req, res)=>{
    const {id} = req.params;
    await Tareas.findOneAndRemove({_id: id});
    res.redirect('/')
    })




module.exports = route;