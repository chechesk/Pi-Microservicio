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
    residents: [{type:String, ref:"Character"}],
    films: [{type:String, ref:"Film"}]
})

// CREATE (POST - Crear un nuevo planeta)
planetsSchema.statics.insert = async function (planetData) {
    return await this.create(planetData);
}

// READ (GET - Obtener información del planeta)
planetsSchema.statics.list = async function(){
    return await this.find()
    .populate("residents", ["_id", "name"])
    .populate("films", ["_id", "title"]);
}

// READ (GET - Obtener información del planeta)
planetsSchema.statics.get = async function (id) {
    return await this.findById(id)
        .populate("residents", ["_id", "name"])
        .populate("films", ["_id", "title"]);
}

// UPDATE (PUT - Actualizar un planeta completo)
planetsSchema.statics.update = async function (id, updatedPlanetData) {
    return await this.findByIdAndUpdate(id, updatedPlanetData, { new: true })
        .populate("residents", ["_id", "name"])
        .populate("films", ["_id", "title"]);
}

// PATCH (Actualizar parcialmente el planeta)
planetsSchema.statics.patch = async function (id, updatedData) {
    return await this.findByIdAndUpdate(id, { $set: updatedData }, { new: true })
        .populate("residents", ["_id", "name"])
        .populate("films", ["_id", "title"]);
}

// DELETE (Eliminar un planeta)
planetsSchema.statics.delete = async function (id) {
    return await this.findByIdAndDelete(id);
}
module.exports = planetsSchema;