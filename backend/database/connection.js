const mongoose  =  require('mongoose')
const dotenv = require ('dotenv')
dotenv.config();
mongoose.set('strictQuery', false);
const connectdb = (url) =>{
    mongoose.connect(url, {useUnifiedtoplogy :  true, useNewUrlParser : true})
}

module.exports =  connectdb