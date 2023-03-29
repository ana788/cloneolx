const mongoose = require('mongoose'); //mongoose pacote oficial pra mexer com mongodb
mongoose.Promise = global.Promise;

const modelSchema = new mongoose.Schema({
    name: String,
    email: String,
    state: String,
    passwordHash: String,
    token: String
});

const modelName = 'User';
if(mongoose.connection && mongoose.connection.models[modelName]){
    module.exports = mongoose.connections.models[modelName];
}else{
    module.exports = mongoose.model(modelName, modelSchema);
}
