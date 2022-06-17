const { Router } = require('express');
const Cita = require('../models/Cita');
const router = Router();

//crear cita
router.post('/', async (req,res) => {
    const cita = new Cita({
        identification: req.body.identification,
        name: req.body.name,
        especialidad: req.body.especialidad,
        especialista: req.body.especialista,
        date: req.body.date
    });
    try {
        const savedCita = await cita.save();
        res.json(savedCita);
    }catch (error) {
        res.json({message:error});
    }
});

//listar citas
router.get('/listar', async (req, res)=>{
    try {
        const citas = await Cita.find();
        res.json(citas);
    }catch (error) {
        res.json({message: error});
    }
});

//consultar cita
router.get('/:citaId', async (req, res) => {
    try {
        const cita = await Cita.findById(req.params.citaId);
        res.json(cita);
    } catch (error) {
        res.json({message: error});
    }
});

//eliminar cita
router.delete('/:citaId', async (req, res) => {
    try {
        const removedCita = await Cita.remove({_id:req.params.citaId});
        res.json(removedCita);
    }catch (error) {
        res.json({message: error});
    }
});

//actualizar cita
router.patch('/:citaId', async (req, res) => {
    try {
        const updateCita = await Cita.updateOne(
            {_id: req.params.citaId},
            {$set: {
                date: req.body.date,
                especialidad: req.body.especialidad,
                especialista: req.body.especialista
            }});
        res.json(updateCita);
    } catch ( error ){
        res.json({message:error});
    }
});

module.exports = router;