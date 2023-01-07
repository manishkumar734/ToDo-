const mongoosev=  require('mongoose')
const properySchema = new mongoose.Schema({
    activity : {String},
    status : {String},
    timeTaken : {Number},
    action : {String},
    
}, {timestamps:true})

const Property = mongoose.model('propert',  properySchema);

module.exports  =  Property