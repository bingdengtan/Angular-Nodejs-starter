var mongoose = require('mongoose');
var schema = mongoose.Schema;

var UserSchema = new schema(
    {
        password: {type: String, required: true},
        username: {type: String, required: true},
        creation_date: {type: Date},
        creation_by: {type: String},
        last_updated_date: {type: Date},
        last_updated_by: {type: Date}
    }, 
    {
        collection: "user"
    }
)

module.exports = mongoose.model('User', UserSchema);