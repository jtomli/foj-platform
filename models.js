var mongoose = require('mongoose');

var Volunteer = mongoose.model('Volunteer', {
    fname: {
      type: String,
      required: true
    },
    lname: {
      type: String,
      required: true
    },
    email: String,
    address: String,
    city: String,
    state: String,
    zip: Number,
    phone: String,
    active: String,
    appDate: Date,
    dob: Date,
    availability: String,
    client: Boolean,
    languages: Object,
    roles: []
});

module.exports = {
  Volunteer: Volunteer
}
