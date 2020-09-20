const PetController = require("../controllers/pet.controller");

module.exports = app => {
    app.get("/api/pets", PetController.getAllPet);
    app.get("/api/pet/:id", PetController.getPet);
    app.post("/api/pet/new", PetController.createPet);
    app.put("/api/pet/update/:id", PetController.updatePet);
    app.delete("/api/pet/delete/:id", PetController.deletePet);
}