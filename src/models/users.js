const mongoose = require('mongoose');
//mongoose
//Schema định nghia cau truc doc(table)(shape data)
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    city: String,
});
//model thao tac vs database
const User = mongoose.model('User', userSchema);
// const silence = new Kitten({ name: 'Quang kui' });
// silence.save();
module.exports = User;
