var mongoose = require('mongoose');
mongoose.Promise = require('es6-promise');

var continuousDataSchema = new mongoose.Schema ({
    type: String,
    centername: String,
    fromdate: String,
    todate: String,
    encounters: Number,
    uniqueindividuals: Number,
    gender: {male: Number, female: Number},
    race: {white: Number, black: Number, asian: Number, other: Number},
    ethnicity: {hispanic: Number, nonhispanic: Number},
    housing: {homelesscurrently: Number, homelesslastyear: Number, supportivehousing: Number},
    breathalcohol: Number,
    dischargedestination: {streetprivate: Number, shelter: Number, detoxrehabprogram: Number, jail: Number, hospital: Number},
    complications: {death: Number, hospitalization: Number, arrests: Number, alcoholwithdrawal: Number},
    servicesutilized: {casemanagement: Number, detoxrehabservices: Number, housingservices: Number}
});

//compile a 'data' model using the DataSchema as the structure
module.exports = mongoose.model('continousData', continuousDataSchema, 'data');
