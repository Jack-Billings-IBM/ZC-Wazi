const mongoose = require("mongoose");

const phoneSchema = mongoose.Schema({
  itemID: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  imagePath: { type: String, required: true },
  RAM: { type: String, required: true},
  internalStorage: { type: String, required: true},
  screenResolution: { type: String, required: true},
  screenSize: { type: String, required: true},

});

module.exports = mongoose.model("Phone", phoneSchema);
