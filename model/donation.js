'use strict';

const mongoose = require('mongoose');

const donationSchema = mongoose.Schema({
  amount: { type: Number, required: true },
  inHonorOf: { type: String },
  charity: { type: mongoose.Schema.Types.ObjectId, required: true},
  profile: { type: mongoose.Schema.Types.ObjectId, required: true},
  created: {type: Date, default: () => new Date()},
});

module.exports = mongoose.model('donation', donationSchema);
