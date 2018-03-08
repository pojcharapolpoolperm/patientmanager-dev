const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { ensureAuthenticated } = require('../helpers/auth');
const moment = require('moment');

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

let today = moment().format('Do MMMM[,] YYYY');
let time = moment().format('h:mm');

// Save & Edit functions
var save_all = require('../helpers/save_all');
var edit_function = require('../helpers/edit_function');
var showList = require('../helpers/show');

// Patient Show Page 
router.get('/show/:id', ensureAuthenticated, (req, res) => {
  showList.show(req, res);
});

// Add New Patient
router.get('/add/new', ensureAuthenticated, (req, res) => {
  res.render('patient/newPatient');
});

// Add New Patient Process
router.post('/add/new/save', ensureAuthenticated, (req, res) => {
  const newPatient = new Patient({
    name: req.body.name,
    age: req.body.age,
    job: req.body.job,
    weight: req.body.weight,
    height: req.body.height,
    HN: req.body.HN,
    ward: req.body.ward,
    G: req.body.G,
    P: req.body.P,
    A: req.body.A,
    L: req.body.L,
    GA: req.body.GA,
    addr1: req.body.addr1,
    addr2: req.body.addr2,
    addr3: req.body.addr3,
    addr4: req.body.addr4,
    addr5: req.body.addr5,
    phone: req.body.phone
  });

  newPatient.save().then(patient => {
    req.flash('success_msg', 'New patient added');
    res.redirect(`/patient/add/forms/${patient.id}`);
  });
});

// Edit Patient 
router.get('/edit/:id', ensureAuthenticated, (req, res) => {
  Patient.findOne({ _id: req.params.id })
    .then(patient => {
      res.render('patient/edit', {
        patient: patient
      });
    });
});

router.put('/edit/save/:id', ensureAuthenticated, (req, res) => {
  Patient.findOne({ _id: req.params.id })
    .then(patient => {
      patient.name = req.body.name;
      patient.age = req.body.age;
      patient.job = req.body.job;
      patient.weight = req.body.weight;
      patient.height = req.body.height;
      patient.HN = req.body.HN;
      patient.ward = req.body.ward;
      patient.G = req.body.G;
      patient.P = req.body.P;
      patient.A = req.body.A;
      patient.L = req.body.L;
      patient.GA = req.body.GA;
      patient.addr1 = req.body.addr1;
      patient.addr2 = req.body.addr2;
      patient.addr3 = req.body.addr3;
      patient.addr4 = req.body.addr4;
      patient.addr5 = req.body.addr5;
      patient.phone = req.body.phone;

      patient.save().then(patient => {
        req.flash('success_msg', 'Patient Data Updated');
        res.redirect('/patients/dashboard');
      });
    });
});

// Add Form List (add button from patient)
router.get('/add/forms/:id', ensureAuthenticated, (req, res) => {
  Patient.findOne({ _id: req.params.id })
    .then(patient => {
      res.render('patient/forms', {
        patient: patient
      });
    })
})

// Add Patient Form1 Route 
router.get('/add/forms/1/:id', ensureAuthenticated, (req, res) => {
  Patient.findOne({ _id: req.params.id })
    .then(patient => {
      res.render('patient/add_form/add_form1', {
        patient: patient,
        today: today,
        time: time
      });
    });
});

// Add Patient Form2 Route 
router.get('/add/forms/2/:id', ensureAuthenticated, (req, res) => {
  Patient.findOne({ _id: req.params.id })
    .then(patient => {
      res.render('patient/add_form/add_form2', {
        patient: patient,
        today: today,
        time: time
      });
    });
});

// Add Patient Form3 Route 
router.get('/add/forms/3/:id', ensureAuthenticated, (req, res) => {
  Patient.findOne({ _id: req.params.id })
    .then(patient => {
      res.render('patient/add_form/add_form3', {
        patient: patient,
        today: today,
        time: time
      });
    });
});

// Add Patient Form4 Route 
router.get('/add/forms/4/:id', ensureAuthenticated, (req, res) => {
  Patient.findOne({ _id: req.params.id })
    .then(patient => {
      res.render('patient/add_form/add_form4', {
        patient: patient,
        today: today,
        time: time,
        init4: true
      });
    });
});

// Add Process Form1 (Existing Patient)
router.post('/form1/save/:id', ensureAuthenticated, (req, res) => {
  const update = {
    name: req.body.patient_name,
    age: req.body.patient_age,
    job: req.body.job,
    HN: req.body.HN,
    ward: req.body.ward,
    G: req.body.G,
    P: req.body.P,
    A: req.body.A,
    L: req.body.L,
    GA: req.body.GA
  };

  Patient.update({ _id: req.params.id }, {
    '$set': update
  }, function (err, result) {
    if (err) console.log(err);
    else {
      req.flash('success_msg', 'Patient Data Updated');
      save_all.save(req, res, 1);
    }
  });
});

// Add Process Form2 (Existing Patient)
router.post('/form2/save/:id', ensureAuthenticated, (req, res) => {
  const update = {
    name: req.body.patient_name,
    age: req.body.patient_age,
    HN: req.body.HN,
    G: req.body.G,
    P: req.body.P,
    A: req.body.A,
    L: req.body.L,
  };

  Patient.update({ _id: req.params.id }, {
    '$set': update
  }, function (err, result) {
    if (err) console.log(err);
    else {
      req.flash('success_msg', 'Patient Data Updated');
      save_all.save(req, res, 2);
    }
  });
  
});

// Add Process Form3 (Existing Patient)
router.post('/form3/save/:id', ensureAuthenticated, (req, res) => {
  const update = {
    name: req.body.name,
    age: req.body.age,
    job: req.body.job,
    HN: req.body.HN,
    addr1: req.body.addr1,
    addr2: req.body.addr2,
    addr3: req.body.addr3,
    addr4: req.body.addr4,
    addr5: req.body.addr5,
    weight: req.body.weight,
    height: req.body.height,
    phone: req.body.phone,
    G: req.body.G,
    P: req.body.P,
    GA: req.body.GA
  };

  Patient.update({ _id: req.params.id }, {
    '$set': update
  }, function (err, result) {
    if (err) console.log(err);
    else {
      req.flash('success_msg', 'Patient Data Updated');
      save_all.save(req, res, 3);
    }
  });
});



// Add Process Form4 (Existing Patient)
router.post('/form4/save/:id', ensureAuthenticated, (req, res) => {
  const update = {
    name: req.body.name[0],
    age: req.body.age[0],
    job: req.body.job,
    HN: req.body.HN[0],
    ward: req.body.wardInput[1],
    G: req.body.G,
    P: req.body.P,
    A: req.body.A,
    L: req.body.L,
    GA: req.body.GA
  };

  Patient.update({ _id: req.params.id }, {
    '$set': update
  }, function (err, result) {
    if (err) console.log(err);
    else {
      req.flash('success_msg', 'Patient Data Updated');
      save_all.save(req, res, 4);
    }
  });
});



// Edit Patient Form1 Route
router.get('/edit/form/1/:id', ensureAuthenticated, (req, res) => {
  Patient.findOne({ form1: req.params.id })
    .then(patient => {
      Form1.findOne({ _id: req.params.id })
        .then(form1 => {
          res.render('patient/edit_form/edit_form1', {
            patient: patient,
            form1: form1
          });
        });
    });
});

// Edit Patient Form2 Route
router.get('/edit/form/2/:id', ensureAuthenticated, (req, res) => {
  Patient.findOne({ form2: req.params.id })
    .then(patient => {
      Form2.findOne({ _id: req.params.id })
        .then(form2 => {
          res.render('patient/edit_form/edit_form2', {
            patient: patient,
            form2: form2
          });
        });
    });
});

// Edit Patient Form3 Route
router.get('/edit/form/3/:id', ensureAuthenticated, (req, res) => {
  Patient.findOne({ form3: req.params.id })
    .then(patient => {
      Form3.findOne({ _id: req.params.id })
        .then(form3 => {
          res.render('patient/edit_form/edit_form3', {
            patient: patient,
            form3: form3
          });
        });
    });
});

// Edit Patient Form4 Route
router.get('/edit/form/4/:id', ensureAuthenticated, (req, res) => {
  Patient.findOne({ form4: req.params.id })
    .then(patient => {
      Form4.findOne({ _id: req.params.id })
        .then(form4 => {
          res.render('patient/edit_form/edit_form4', {
            patient: patient,
            form4: form4,
            init4: true
          });
        });
    });
});



// Edit Form1 Process
router.put('/edit/form/1/:id', ensureAuthenticated, (req, res) => {
  const update = {
    name: req.body.patient_name,
    age: req.body.patient_age,
    job: req.body.job,
    HN: req.body.HN,
    ward: req.body.ward,
    G: req.body.G,
    P: req.body.P,
    A: req.body.A,
    L: req.body.L,
    GA: req.body.GA
  };

  Patient.update({ form1: req.params.id }, {
    '$set': update
  }, function (err, result) {
    if (err) console.log(err);
    else {
      edit_function.editform1(req, res);
    }
  });

});

// Edit Form2 Process
router.put('/edit/form/2/:id', ensureAuthenticated, (req, res) => {
  const update = {
    name: req.body.patient_name,
    age: req.body.patient_age,
    HN: req.body.HN,
    G: req.body.G,
    P: req.body.P,
    A: req.body.A,
    L: req.body.L,
  };

  Patient.update({ form2: req.params.id }, {
    '$set': update
  }, function (err, result) {
    if (err) console.log(err);
    else {
      edit_function.editform2(req, res);
    }
  });
});

// Edit Form3 Process
router.put('/edit/form/3/:id', ensureAuthenticated, (req, res) => {
  const update = {
    name: req.body.name,
    age: req.body.age,
    job: req.body.job,
    HN: req.body.HN,
    addr1: req.body.addr1,
    addr2: req.body.addr2,
    addr3: req.body.addr3,
    addr4: req.body.addr4,
    addr5: req.body.addr5,
    weight: req.body.weight,
    height: req.body.height,
    phone: req.body.phone,
    G: req.body.G,
    P: req.body.P,
    GA: req.body.GA
  };

  Patient.update({ form3: req.params.id }, {
    '$set': update
  }, function (err, result) {
    if (err) console.log(err);
    else {
      edit_function.editform3(req, res);
    }
  });
  
});
// Edit Form4 Process
router.put('/edit/form/4/:id', ensureAuthenticated, (req, res) => {
  const update = {
    name: req.body.name[0],
    age: req.body.age[0],
    job: req.body.job,
    HN: req.body.HN[0],
    ward: req.body.wardInput[1],
    G: req.body.G,
    P: req.body.P,
    A: req.body.A,
    L: req.body.L,
    GA: req.body.GA
  };

  Patient.update({ form4: req.params.id }, {
    '$set': update
  }, function (err, result) {
    if (err) console.log(err);
    else {
      edit_function.editform4(req, res);
    }
  });
  
});



// Delete Form1
router.delete('/delete/1/:id', ensureAuthenticated, (req, res) => {
  Patient.findOne({ form1: req.params.id })
    .then(patient => {
      Form1.remove({ _id: req.params.id })
        .then(() => {
          Patient.update({ form1: req.params.id }, { $unset: { form1: 1 } }, function (err, result) {
            if (err) console.log(err);
            else {
              req.flash('success_msg', 'Form removed');
              res.redirect(`/patient/show/${patient.id}`);
            }
          });
        });
    })
});

// Delete Form2
router.delete('/delete/2/:id', ensureAuthenticated, (req, res) => {
  Patient.findOne({ form2: req.params.id })
    .then(patient => {
      Form2.remove({ _id: req.params.id })
        .then(() => {
          Patient.update({ form2: req.params.id }, { $unset: { form2: 1 } }, function (err, result) {
            if (err) console.log(err);
            else {
              req.flash('success_msg', 'Form removed');
              res.redirect(`/patient/show/${patient.id}`);
            }
          });
        });
    })

});

// Delete Form3
router.delete('/delete/3/:id', ensureAuthenticated, (req, res) => {
  Patient.findOne({ form3: req.params.id })
    .then(patient => {
      Form3.remove({ _id: req.params.id })
        .then(() => {
          Patient.update({ form3: req.params.id }, { $unset: { form3: 1 } }, function (err, result) {
            if (err) console.log(err);
            else {
              req.flash('success_msg', 'Form removed');
              res.redirect(`/patient/show/${patient.id}`);
            }
          });
        });
    })
});

// Delete Form4
router.delete('/delete/4/:id', ensureAuthenticated, (req, res) => {
  Patient.findOne({ form4: req.params.id })
    .then(patient => {
      Form4.remove({ _id: req.params.id })
        .then(() => {
          Patient.update({ form4: req.params.id }, { $unset: { form4: 1 } }, function (err, result) {
            if (err) console.log(err);
            else {
              req.flash('success_msg', 'Form removed');
              res.redirect(`/patient/show/${patient.id}`);
            }
          });
        });
    })
});

// Patient Profile Remove
router.delete('/profile/remove/:id', ensureAuthenticated, (req, res) => {

  Patient.findOne({
    _id: req.params.id
  })
    .then((patient) => {
      if (patient.form1) {
        Form1.remove({ _id: patient.form1 }).then(() => { })
      }
      if (patient.form2) {
        Form2.remove({ _id: patient.form2 }).then(() => { })
      }
      if (patient.form3) {
        Form3.remove({ _id: patient.form3 }).then(() => { })
      }
      if (patient.form4) {
        Form4.remove({ _id: patient.form4 }).then(() => { })
      }
      Patient.remove({ _id: req.params.id }).then(() => {
        req.flash('success_msg', 'Patient removed');
        res.redirect('/patients/dashboard');
      })
    })
})

// Show Form1
router.get('/show/form/1/:id', ensureAuthenticated, (req, res) => {
  Patient.findOne({ form1: req.params.id })
    .then(patient => {
      Form1.findOne({ _id: req.params.id })
        .then(form1 => {
          res.render('patient/show_form/show_form1', {
            patient: patient,
            form1: form1,
            print: true
          });
        });
    });
});

// Show Form2
router.get('/show/form/2/:id', ensureAuthenticated, (req, res) => {
  Patient.findOne({ form2: req.params.id })
    .then(patient => {
      Form2.findOne({ _id: req.params.id })
        .then(form2 => {
          res.render('patient/show_form/show_form2', {
            patient: patient,
            form2: form2,
            print: true
          });
        });
    });
});

// Show Form3
router.get('/show/form/3/:id', ensureAuthenticated, (req, res) => {
  Patient.findOne({ form3: req.params.id })
    .then(patient => {
      Form3.findOne({ _id: req.params.id })
        .then(form3 => {
          res.render('patient/show_form/show_form3', {
            patient: patient,
            form3: form3,
            print: true
          });
        });
    });
});

// Show Form4
router.get('/show/form/4/:id', ensureAuthenticated, (req, res) => {
  Patient.findOne({ form4: req.params.id })
    .then(patient => {
      Form4.findOne({ _id: req.params.id })
        .then(form4 => {
          res.render('patient/show_form/show_form4', {
            patient: patient,
            form4: form4,
            init4: true,
            print: true
          });
        });
    });
});




module.exports = router;
