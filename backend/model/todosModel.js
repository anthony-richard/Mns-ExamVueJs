const mongoose = require('mongoose');

//schema du json todos / définission valeurs
const modelJson = mongoose.Schema;

exports.schemaModelJson = new modelJson({
    done: Boolean,
    description: String,
});
