const Pet = require('../models/pet.model');

module.exports = {
    getAllPet : (req, res) => {
        Pet.find()
        .then(allPet => res.json({Pet: allPet}))
        .catch(err => res.json({message: "There is an error for getting all Pet", error: err}))
    },
    getPet : (req, res) => {
        Pet.findById(req.params.id)
        .then(Pet => res.json(Pet))
        .catch(err => res.json({message: "There is an error for getting Pet", error: err}))
    },
    createPet : (req, res) => {
        Pet.create(req.body)
        .then(newPet => res.json(newPet))
        .catch(err => res.json({message: "There is an error for creating Pet", error: err}))
    },
    updatePet : (req, res) => {
        Pet.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        .then(updatedPet => res.json(updatedPet))
        .catch(err => res.json({message: "There is an error for updating Pet", error: err}))
    },
    deletePet : (req, res) =>{
        Pet.findByIdAndDelete(req.params.id)
        .then(result => res.json(result))
        .catch(err => res.json({ message: "There is an error for deleting Pet", error: err }));
    }
}