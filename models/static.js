var mongoose = require('mongoose');
mongoose.Promise = require('es6-promise');

var staticDataSchema = new mongoose.Schema ({
    type: String,
    centername: String,
    website: String,
    address: String,
    phone: String,
    director: String,
    contactperson: String,
    financialsupport: [String],
    annualbudget: Number,
    employedstaff: [String],
    operationhours: String,
    referringparties: [String],
    pickupsfromstreet: String,
    measurealcohollevels: String,
    casemanagement: String,
    housingreferrals: String,
    accesstomedicalorpsychiatriccare: String,
    medicationsdispensed: String,
    IVfluids: String,
    food: String,
    showers: String,
    laundry: String,
    averagestaylength: Number
});

//compile a 'data' model using the DataSchema as the structure
module.exports = mongoose.model('staticData', staticDataSchema, 'data');