const mongoose = require('mongoose');
//mongoose
//Schema định nghia cau truc doc(table)(shape data)
const kittySchema = new mongoose.Schema({
    name: String,
});
//model thao tac vs database
const Kitten = mongoose.model('Kitten', kittySchema);
// const silence = new Kitten({ name: 'Quang kui' });
// silence.save();
module.exports = Kitten;
