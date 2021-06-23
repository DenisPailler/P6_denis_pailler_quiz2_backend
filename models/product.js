const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  instock: { type: Boolean, required: true },
}, {
  writeConcern: {
      w: 'majority',
      j: true,
      wtimeout: 1000
  }
});


module.exports = mongoose.model('Product', productSchema);