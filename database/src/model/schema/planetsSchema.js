const { Schema } = require("mongoose")

const planetsSchema = new Schema({
    _id: String,
    name: String,
    rotation_period: String,
    orbital_period: String,
    diameter: String,
    climate: String,
    gravity: String,
    terrain: String,
    surface_water: String,
    residents: [{type:String, ref:"Characters"}],
    films: [{type:String, ref:"Films"}]
})

// CREATE (POST - Crear un nuevo planeta)
planetsSchema.statics.createPlanet = async function (planetData) {
    return await this.create(planetData);
}

// READ (GET - Obtener información del planeta)
planetsSchema.statics.getPlanet = async function (id) {
    return await this.findById(id)
        .populate("residents", ["_id", "name"])
        .populate("films", ["_id", "title"]);
}

// UPDATE (PUT - Actualizar un planeta completo)
planetsSchema.statics.updatePlanet = async function (id, updatedPlanetData) {
    return await this.findByIdAndUpdate(id, updatedPlanetData, { new: true })
        .populate("residents", ["_id", "name"])
        .populate("films", ["_id", "title"]);
}

// PATCH (Actualizar parcialmente el planeta)
planetsSchema.statics.patchPlanet = async function (id, updatedData) {
    return await this.findByIdAndUpdate(id, { $set: updatedData }, { new: true })
        .populate("residents", ["_id", "name"])
        .populate("films", ["_id", "title"]);
}

// DELETE (Eliminar un planeta)
planetsSchema.statics.deletePlanet = async function (id) {
    return await this.findByIdAndDelete(id);
}
module.exports = planetsSchema;