const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: true },
},{ id: false });

userSchema.virtual('id').get(function(){
  return this._id.toHexString();
});

userSchema.set('toJSON', {
  virtuals: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;
