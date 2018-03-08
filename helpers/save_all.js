const express = require('express');
const mongoose = require('mongoose');
const flash = require('connect-flash');

// Load Models
require('../models/Patient');
require('../models/Form1');
require('../models/Form2');
require('../models/Form3');
require('../models/Form4');

const Patient = mongoose.model('patient');
const Form1 = mongoose.model('form1');
const Form2 = mongoose.model('form2');
const Form3 = mongoose.model('form3');
const Form4 = mongoose.model('form4');

var save_function = require('./save_function');

module.exports = {
  save: function (req, res, n) {
      Patient.findOne({_id: req.params.id})
        .then(patient => {
          // save form
          var newPatient_form = module.exports.saveForm(req, res, n);
          // get saved form_id
          var form = newPatient_form._id;
          // update existing patient by adding form_id
          module.exports.updateForm(patient, req, res, form, n);
        });
    // } else {
    //   var newPatient_form = module.exports.saveForm(req, res, n);
    //       // get form id
    //       var form = newPatient_form._id;
    //       // initialize new patient
    //       var newPatient = module.exports.newPatient(req, form, n);
    //       // save new patient and redirect
    //       newPatient.save().then(patient => {
    //         req.flash('success_msg', 'New patient added');
    //         res.redirect('/patients/dashboard');
    //       });
    // }
  },
  checkSentForm: function (patient, n) {
    switch (n) {
      case 1:
        return patient.form1
        break;
      case 2:
        return patient.form2
        break;
      case 3:
        return patient.form3
        break;
      case 4:
        return patient.form4
        break;
      default:
        break;
    }
  },
  // newPatient: function (req, form, n) {
  //   switch (n) {
  //     case 1:
  //       return new Patient({
  //         name: req.body.patient_name,
  //         form1: form
  //       });
  //       break;
  //     case 2:
  //       return new Patient({
  //         name: req.body.patient_name,
  //         form2: form
  //       });
  //       break;
  //     case 3:
  //       return new Patient({
  //         name: req.body.name,
  //         form3: form
  //       });
  //       break;
  //     case 4:
  //       return new Patient({
  //         name: req.body.name[0],
  //         form4: form
  //       });
  //       break;

  //     default:
  //       break;
  //   }
  // },
  saveForm: function (req, res, n) {

    var newPatient_form;
    switch (n) {
      case 1:
        newPatient_form = save_function.saveForm1(req, res);
        break;
      case 2:
        newPatient_form = save_function.saveForm2(req, res);
        break;
      case 3:
        newPatient_form = save_function.saveForm3(req, res);
        break;
      case 4:
        newPatient_form = save_function.saveForm4(req, res);
        break;
      default:
        console.log('error')
    }
    return newPatient_form;
  },
  updateForm: function (patient, req, res, form, n) {
    switch (n) {
      case 1:
        Patient.update({ _id: patient._id }, { $set: { form1: form } }, function (err, result) {
          if (err) console.log(err);
          else {
            req.flash('success_msg', 'Patient Form Added');
            res.redirect(`/patient/show/${patient.id}`);
          }
        });
        break;
      case 2:
        Patient.update({ _id: patient._id }, { $set: { form2: form } }, function (err, result) {
          if (err) console.log(err);
          else {
            req.flash('success_msg', 'Patient Form Added');
            res.redirect(`/patient/show/${patient.id}`);
          }
        });
        break;
      case 3:
        Patient.update({ _id: patient._id }, { $set: { form3: form } }, function (err, result) {
          if (err) console.log(err);
          else {
            req.flash('success_msg', 'Patient Form Added');
            res.redirect(`/patient/show/${patient.id}`);
          }
        });
        break;
      case 4:
        Patient.update({ _id: patient._id }, { $set: { form4: form } }, function (err, result) {
          if (err) console.log(err);
          else {
            req.flash('success_msg', 'Patient Form Added');
            res.redirect(`/patient/show/${patient.id}`);
          }
        });
        break;
      default:
        console.log('error')
    }
  }
  // edit: function (req, res, patient, n) {
  //   var edit_Form;
  //   switch (n) {
  //     case 1:
  //       console.log(req.body);
  //       console.log(patient);
  //       edit_Form = save_function.init_form1(req, res);
  //       edit_Form.user_updated = req.user.firstName + ' ' + req.user.lastName; Form1.update({ _id: patient.form1 }, edit_Form, function (err, result) {
  //         if (err) console.log(err);
  //         else {
  //           req.flash('success_msg', 'Patient Data Updated');
  //           res.redirect('/patients/dashboard');
  //         }
  //       });
  //       break;
  //     case 2:
  //       edit_Form = save_function.init_form2(req, res);
  //       edit_Form.user_updated = req.user.firstName + ' ' + req.user.lastName; 
  //       Form2.update({ _id: patient.form2 }, edit_Form, function (err, result) {
  //         if (err) console.log(err);
  //         else {
  //           req.flash('success_msg', 'Patient Data Updated');
  //           res.redirect('/patients/dashboard');
  //         }
  //       });
  //       break;
  //     case 3:
  //       edit_Form = save_function.init_form3(req, res);
  //       edit_Form.user_updated = req.user.firstName + ' ' + req.user.lastName; Form3.update({ _id: patient.form3 }, edit_Form, function (err, result) {
  //         if (err) console.log(err);
  //         else {
  //           req.flash('success_msg', 'Patient Data Updated');
  //           res.redirect('/patients/dashboard');
  //         }
  //       });
  //       break;
  //     case 4:
  //       edit_Form = save_function.init_form4(req, res);
  //       edit_Form.user_updated = req.user.firstName + ' ' + req.user.lastName;
  //       Form4.update({ _id: patient.form4 }, edit_Form, function (err, result) {
  //         if (err) console.log(err);
  //         else {
  //           req.flash('success_msg', 'Patient Data Updated');
  //           res.redirect('/patients/dashboard');
  //         }
  //       });
  //       break;
  //     default:
  //       console.log('error')
  //   }
  //   return edit_Form;
  // }
}

