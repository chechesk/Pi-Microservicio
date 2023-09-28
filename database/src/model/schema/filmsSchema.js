const { Schema } = require("mongoose");

const filmSchema = new Schema({
    _id: String,
    title: String,
    opening_crawl: String,
    director: String,
    producer: String,
    release_date: Date,
    characters: [{type:String, ref:"Character"}],
    planets: [{type:String, ref:"Planet"}]
})

filmSchema.statics.list = async function(){
    return await this.find()
    .populate("characters")
    .populate("planets")
}

filmSchema.statics.get = async function(id){
    return await this.findById(id)
    .populate("characters", ["_id", "name"])
    .populate("planets", ["_id","name"])   
}

filmSchema.statics.insert = async function(films){
    return await this.create(films)
}

filmSchema.statics.update = async function(id, updatedFilm) {
    return await this.findByIdAndUpdate(id, updatedFilm, { new: true })
        .populate("characters")
        .populate("planets");
}

filmSchema.statics.patch = async function(id, updatedData) {
    return await this.findByIdAndUpdate(id, { $set: updatedData }, { new: true })
        .populate("characters")
        .populate("planets");
}
filmSchema.statics.delete = async function(id) {
    return await this.findByIdAndDelete(id);
}

module.exports = filmSchema;