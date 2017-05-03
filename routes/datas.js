var express = require('express');
var router = express.Router();

var json2csv = require('json2csv');
var fs = require('fs');

var staticData = require('../models/static');
var continuousData = require('../models/continuous');

router.post('/database/insert', function (request, response) {
    var dataObj = JSON.parse(request.body.data);
    if (dataObj.updateStatic == 'Yes') {
        // staticData.findOneAndUpdate({'type': 'Static','centername': request.session.center},
        //     {$set:{name:"Naomi"}}, function (err, data) {
        //         if (err) return console.error(err);
        //         console.log('Document removed successfully!');
        // });
        var staticDoc = new staticData({
            type: 'Static',
            centername: dataObj.centerName,
            website: dataObj.website,
            address: dataObj.address,
            phone: dataObj.phone,
            director: dataObj.director,
            contactperson: dataObj.contactPerson,
            financialsupport: dataObj.financialSupport,
            annualbudget: dataObj.annualBudget,
            employedstaff: dataObj.employedStaff,
            operationhours: dataObj.operationHours,
            referringparties: dataObj.referringParties,
            pickupsfromstreet: dataObj.pickupsFromStreet,
            measurealcohollevels: dataObj.measureAlcoholLevels,
            casemanagement: dataObj.caseManagement,
            housingreferrals: dataObj.housingReferrals,
            accesstomedicalorpsychiatriccare: dataObj.accesstoMedicalorPsychiatricCare,
            medicationsdispensed: dataObj.medicationsDispensed,
            IVfluids: dataObj.IVFluids,
            food: dataObj.food,
            showers: dataObj.showers,
            laundry: dataObj.laundry,
            averagestaylength: dataObj.averageStayLength
        });
        staticDoc.save(function (err) {
            if (err) return console.error(err);
            console.log('Static document saved successfully!');

            if (fs.existsSync('utility/files/static_data.csv')) {
                fs.unlink('utility/files/static_data.csv',function(err){
                    if(err) return console.log(err);
                    console.log('Static csv file deleted successfully!');
                });
            }

            staticData.find({}, function (err, data) {
                if (err) return console.error(err);

                var staticData = new Array();
                for (var i = 0; i < data.length; i++) {
                    if (data[i].type == 'Static') {
                        staticData.push(data[i]);
                    }
                }

                var static_fields = ['centername', 'website', 'address', 'phone', 'director', 'contactperson',
                    'financialsupport', 'annualbudget', 'employedstaff', 'operationhours', 'referringparties',
                    'pickupsfromstreet', 'measurealcohollevels', 'casemanagement', 'housingreferrals',
                    'accesstomedicalorpsychiatriccare', 'medicationsdispensed', 'IVfluids',
                    'food', 'showers', 'laundry', 'averagestaylength'];
                var static_csv = json2csv({ data: staticData, fields: static_fields });
                fs.writeFile('utility/files/static_data.csv', static_csv, function(err) {
                    if (err) console.error(err);
                    console.log('Static csv file saved!');
                });
            });
        });
    }
    var continuousDoc = new continuousData({
        type: 'Continuous',
        centername: request.session.center,
        fromdate: dataObj.fromDate,
        todate: dataObj.toDate,
        encounters: dataObj.encounters,
        uniqueindividuals: dataObj.uniqueIndividuals,
        gender: {
            male: Number(dataObj.gender.male),
            female: Number(dataObj.gender.female)
        },
        race: {
            white: Number(dataObj.race.white),
            black: Number(dataObj.race.black),
            asian: Number(dataObj.race.asian),
            other: Number(dataObj.race.otherRace)
        },
        ethnicity: {
            hispanic: Number(dataObj.ethnicity.hispanic),
            nonhispanic: Number(dataObj.ethnicity.nonHispanic)
        },
        housing: {
            homelesscurrently: Number(dataObj.housing.homelessCurrently),
            homelesslastyear: Number(dataObj.housing.homelessLastYear),
            supportivehousing: Number(dataObj.housing.supportiveHousing)
        },
        breathalcohol: dataObj.breathAlcohol,
        dischargedestination: {
            streetprivate: Number(dataObj.dischargeDestination.streetPrivate),
            shelter: Number(dataObj.dischargeDestination.shelter),
            detoxrehabprogram: Number(dataObj.dischargeDestination.detoxRehabProgram),
            jail: Number(dataObj.dischargeDestination.jail),
            hospital: Number(dataObj.dischargeDestination.hospital)
        },
        complications: {
            death: Number(dataObj.complications.death),
            hospitalization: Number(dataObj.complications.hospitalization),
            arrests: Number(dataObj.complications.arrests),
            alcoholwithdrawal: Number(dataObj.complications.alcoholWithdrawal)
        },
        servicesutilized: {
            casemanagement: Number(dataObj.servicesUtilized.caseManagement),
            detoxrehabservices: Number(dataObj.servicesUtilized.detoxRehabServices),
            housingservices: Number(dataObj.servicesUtilized.housingServices)
        }
    });
    continuousDoc.save(function (err) {
        if (err) return console.error(err);
        console.log('Contonuous document saved successfully!');

        if (fs.existsSync('utility/files/continuous_data.csv')) {
            fs.unlink('utility/files/continuous_data.csv',function(err){
                if(err) return console.log(err);
                console.log('Continuous csv file deleted successfully!');
            });
        }

        continuousData.find({}, function (err, data) {
            if (err) return console.error(err);

            var continuousData = new Array();
            for (var i = 0; i < data.length; i++) {
                if (data[i].type == 'Continuous') {
                    continuousData.push(data[i]);
                }
            }

            var continuous_fields = ['centername', 'fromdate', 'todate', 'encounters', 'uniqueindividuals',
                'gender.male', 'gender.female', 'race.white', 'race.black', 'race.asian', 'race.other',
                'ethnicity.hispanic', 'ethnicity.nonhispanic', 'housing.homelesscurrently', 'housing.homelesslastyear',
                'housing.supportivehousing', 'breathalcohol', 'dischargedestination.streetprivate',
                'dischargedestination.shelter', 'dischargedestination.detoxrehabprogram',
                'dischargedestination.jail', 'dischargedestination.hospital', 'complications.death',
                'complications.hospitalization', 'complications.arrests', 'complications.alcoholwithdrawal',
                'servicesutilized.casemanagement', 'servicesutilized.detoxrehabservices', 'servicesutilized.housingservices'];
            var continuous_csv = json2csv({ data: continuousData, fields: continuous_fields });
            fs.writeFile('utility/files/continuous_data.csv', continuous_csv, function(err) {
                if (err) console.error(err);
                console.log('Continuous csv file saved!');
            });
        });
    });
    response.json(null);
});

router.get('/database/query', function (request, response) {
    staticData.find({}, function (err, data) {
        if (err) return console.error(err);
        //console.log(data);
        response.json(data);
    });
});

module.exports = router;