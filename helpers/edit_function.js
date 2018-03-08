const express = require('express');
const mongoose = require('mongoose');

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

module.exports = {
  editform1: function (req, res) {
    Form1.findOne({
      _id: req.params.id
    })
      .then(form1 => {
        // new values
        form1.recordDate = req.body.recordDate;
        form1.recordTime = req.body.recordTime;
        form1.history = req.body.history;
        form1.history_Other = req.body.history_Other;
        form1.CC = req.body.CC;
        form1.PI = req.body.PI;
        form1.G = req.body.G;
        form1.P = req.body.P;
        form1.A = req.body.A;
        form1.L = req.body.L;
        form1.Last = req.body.Last;
        form1.LMP = req.body.LMP;
        form1.EDC = req.body.EDC;
        form1.Preg = req.body.Preg;
        form1.ANC = req.body.ANC;
        form1.first_ANC = req.body.first_ANC;
        form1.count_ANC = req.body.count_ANC;
        form1.TT = req.body.TT;
        form1.TT_more = req.body.TT_more;
        form1.VDRL = req.body.VDRL;
        form1.HbsAg = req.body.HbsAg;
        form1.HbeAg = req.body.HbeAg;
        form1.AntiHIV = req.body.AntiHIV;
        form1.Hct = req.body.Hct;
        form1.Blood_Group = req.body.Blood_Group;
        form1.Rh = req.body.Rh;
        form1.OF = req.body.OF;
        form1.DCIP = req.body.DCIP;
        form1.Thallasemia = req.body.Thallasemia;
        form1.preg_sym = req.body.preg_sym;
        form1.Past_Hx = req.body.Past_Hx;
        form1.med_Allergic = req.body.med_Allergic;
        form1.smoke = req.body.smoke;
        form1.personal_smoke_text = req.body.personal_smoke_text;
        form1.alcohol = req.body.alcohol;
        form1.personal_alcohol_text = req.body.personal_alcohol_text;
        form1.drug = req.body.drug;
        form1.personal_drug_text = req.body.personal_drug_text;
        form1.job = req.body.job;
        form1.DM = req.body.DM;
        form1.HT = req.body.HT;
        form1.Asthma = req.body.Asthma;
        form1.Renal_disease = req.body.Renal_disease;
        form1.Heart_disease = req.body.Heart_disease;
        form1.Blood_disease = req.body.Blood_disease;
        form1.Other_disease = req.body.Other_disease;
        form1.family_Other = req.body.family_Other;
        form1.Social_Hx = req.body.Social_Hx;
        form1.HEENT = req.body.HEENT;
        form1.heent_Other = req.body.heent_Other;
        form1.Respiratory = req.body.Respiratory;
        form1.respiratory_Other = req.body.respiratory_Other;
        form1.Cardiovascular = req.body.Cardiovascular;
        form1.cardiovascular_Other = req.body.cardiovascular_Other;
        form1.Gastrointestital = req.body.Gastrointestital;
        form1.gastro_Other = req.body.gastro_Other;
        form1.Genito = req.body.Genito;
        form1.genito_Other = req.body.genito_Other;
        form1.Gynecological = req.body.Gynecological;
        form1.gynecological_Other = req.body.gynecological_Other;
        form1.Neurology = req.body.Neurology;
        form1.neurology_Other = req.body.neurology_Other;
        form1.Other = req.body.Other;
        form1.other_Other = req.body.other_Other;
        form1.T = req.body.T;
        form1.PR = req.body.PR;
        form1.RR = req.body.RR;
        form1.BP = req.body.BP;
        form1.BW = req.body.BW;
        form1.HT = req.body.HT;
        form1.GA = req.body.GA;
        form1.Skin = req.body.Skin;
        form1.HEENT_lower = req.body.HEENT_lower;
        form1.Heart = req.body.Heart;
        form1.Lung = req.body.Lung;
        form1.Abdomen = req.body.Abdomen;
        form1.Extremities = req.body.Extremities;
        form1.Neuro = req.body.Neuro;
        form1.Others = req.body.Others;
        form1.HF = req.body.HF;
        form1.Position = req.body.Position;
        form1.FHS = req.body.FHS;
        form1.Cervix = req.body.Cervix;
        form1.Eff = req.body.Eff;
        form1.Station = req.body.Station;
        form1.Membrane = req.body.Membrane;
        form1.AF = req.body.AF;
        form1.AF_time = req.body.AF_time;
        form1.Preg_other = req.body.Preg_other;
        form1.Inves_hct = req.body.Inves_hct;
        form1.Urine_Albumin = req.body.Urine_Albumin;
        form1.Urine_Sugar = req.body.Urine_Sugar;
        form1.Inves_other = req.body.Inves_other;
        form1.imp = req.body.imp;
        form1.plan = req.body.plan;
        form1.doctor_sign = req.body.doctor_sign;
        form1.staff_sign = req.body.staff_sign;
        form1.patient_name = req.body.patient_name;
        form1.patient_age = req.body.patient_age;
        form1.ward = req.body.ward;
        form1.room = req.body.room;
        form1.HN = req.body.HN;
        form1.AN = req.body.AN;
        form1.doctor_assigned = req.body.doctor_assigned;
        form1.user_created = form1.user_created;
        form1.user_updated = req.user.firstName + ' ' + req.user.lastName;

        Patient.findOne({ form1: req.params.id })
          .then(patient => {
            if (patient.form2) {
              const update = {
                patient_name: req.body.patient_name,
                patient_age: req.body.patient_age,
                HN: req.body.HN,
                G: req.body.G,
                P: req.body.P,
                A: req.body.A,
                L: req.body.L,
              };
              Form2.update({ _id: patient.form2 }, {
                '$set': update
              }, function (err, result) {
                if (err) console.log(err);
                else if (result) console.log('form2 updated');
              });
            }
            if (patient.form3) {
              const update = {
                name: req.body.patient_name,
                age: req.body.patient_age,
                job: req.body.job,
                HN: req.body.HN,
                G: req.body.G,
                P: req.body.P,
                GA: req.body.GA
              };

              Form3.update({ _id: patient.form3 }, {
                '$set': update
              }, function (err, result) {
                if (err) console.log(err);
                else if (result) console.log('form3 updated');
              });
            }
            if (patient.form4) {
              const update = {
                name: req.body.patient_name,
                age: req.body.patient_age,
                job: req.body.job,
                HN: req.body.HN,
                wardInput: req.body.ward,
                G: req.body.G,
                P: req.body.P,
                A: req.body.A,
                L: req.body.L,
                GA: req.body.GA
              };

              Form4.update({ _id: patient.form4 }, {
                '$set': update
              }, function (err, result) {
                if (err) console.log(err);
                else if (result) console.log('form4 updated');
              });
            }

            form1.save()
              .then(form1 => {
                //Find patient with this formID
                Patient.findOne({ form1: form1._id })
                  .populate('form1')
                  .then(patient => {
                    //if exist
                    if (patient) {
                      req.flash('success_msg', 'Patient Form Updated');
                      res.redirect(`/patient/show/${patient.id}`);
                    }
                  });
              });
          });
      });
  },
  editform2: function (req, res) {
    Form2.findOne({
      _id: req.params.id
    })
      .then(form2 => {
        // new values
        form2.patient_name = req.body.patient_name;
        form2.patient_age = req.body.patient_age;
        form2.HN = req.body.HN;
        form2.G = req.body.G;
        form2.P = req.body.P;
        form2.A = req.body.A;
        form2.L = req.body.L;
        form2.Last = req.body.Last;
        form2.Preg = req.body.Preg;
        form2.Preg_sym = req.body.Preg_sym;
        form2.Labour = req.body.Labour;
        form2.Labour_field = req.body.Labour_field;
        form2.Labour_hurt = req.body.Labour_hurt;
        form2.phase1_hour = req.body.phase1_hour;
        form2.phase1_min = req.body.phase1_min;
        form2.uterus = req.body.uterus;
        form2.phase2_hour = req.body.phase2_hour;
        form2.phase2_min = req.body.phase2_min;
        form2.bornDate = req.body.bornDate;
        form2.bornTime = req.body.bornTime;
        form2.phase3_hour = req.body.phase3_hour;
        form2.phase3_min = req.body.phase3_min;
        form2.placenta = req.body.placenta;
        form2.MR = req.body.MR;
        form2.MR_date = req.body.MR_date;
        form2.MR_time = req.body.MR_time;
        form2.appearance = req.body.appearance;
        form2.med_time_does = req.body.med_time_does;
        form2.Delivery = req.body.Delivery;
        form2.delivery_field = req.body.delivery_field;
        form2.Indication = req.body.Indication;
        form2.birth_delivery = req.body.birth_delivery;
        form2.Episiotomy = req.body.Episiotomy;
        form2.Perineum = req.body.Perineum;
        form2.Suture = req.body.Suture;
        form2.placenta_cord = req.body.placenta_cord;
        form2.placenta_w = req.body.placenta_w;
        form2.cord_length = req.body.cord_length;
        form2.placenta_app = req.body.placenta_app;
        form2.placenta_app_field = req.body.placenta_app_field;
        form2.placenta_all = req.body.placenta_all;
        form2.abnormalcord_text = req.body.abnormalcord_text;
        form2.POSTPARTUM = req.body.POSTPARTUM;
        form2.blood_loss = req.body.blood_loss;
        form2.BP = req.body.BP;
        form2.mmHg = req.body.mmHg;
        form2.med_time_does2 = req.body.med_time_does2;
        form2.time1 = req.body.time1;
        form2.BP1 = req.body.BP1;
        form2.mmHg1 = req.body.mmHg1;
        form2.PR1 = req.body.PR1;
        form2.note1 = req.body.note1;
        form2.time2 = req.body.time2;
        form2.BP2 = req.body.BP2;
        form2.mmHg2 = req.body.mmHg2;
        form2.PR2 = req.body.PR2;
        form2.note2 = req.body.note2;
        form2.time3 = req.body.time3;
        form2.BP3 = req.body.BP3;
        form2.mmHg3 = req.body.mmHg3;
        form2.PR3 = req.body.PR3;
        form2.note3 = req.body.note3;
        form2.time4 = req.body.time4;
        form2.BP4 = req.body.BP4;
        form2.mmHg4 = req.body.mmHg4;
        form2.PR4 = req.body.PR4;
        form2.note4 = req.body.note4;
        form2.time5 = req.body.time5;
        form2.BP5 = req.body.BP5;
        form2.mmHg5 = req.body.mmHg5;
        form2.PR5 = req.body.PR5;
        form2.note5 = req.body.note5;
        form2.gender = req.body.gender;
        form2.weight = req.body.weight;
        form2.min1 = req.body.min1;
        form2.min5 = req.body.min5;
        form2.min10 = req.body.min10;
        form2.OF = req.body.OF;
        form2.chest = req.body.chest;
        form2.length = req.body.length;
        form2.infant = req.body.infant;
        form2.remark = req.body.remark;
        form2.mom_state = req.body.mom_state;
        form2.baby_state = req.body.baby_state;
        form2.T_cc = req.body.T_cc;
        form2.PR_min = req.body.PR_min;
        form2.R_min = req.body.R_min;
        form2.BP_mmHg = req.body.BP_mmHg;
        form2.temp = req.body.temp;
        form2.uterus_contract = req.body.uterus_contract;
        form2.baby_milk = req.body.baby_milk;
        form2.urine_out = req.body.urine_out;
        form2.excretion = req.body.excretion;
        form2.breast_milk = req.body.breast_milk;
        form2.baby_abnormalities = req.body.baby_abnormalities;
        form2.mom_abnormalities = req.body.mom_abnormalities;
        form2.logged_nurse = req.body.logged_nurse;
        form2.user_created = form2.user_created;
        form2.user_updated = req.user.firstName + ' ' + req.user.lastName;

        Patient.findOne({ form2: req.params.id })
          .then(patient => {
            if (patient.form1) {
              const update = {
                patient_name: req.body.patient_name,
                patient_age: req.body.patient_age,
                HN: req.body.HN,
                G: req.body.G,
                P: req.body.P,
                A: req.body.A,
                L: req.body.L,
              };
              Form1.update({ _id: patient.form1 }, {
                '$set': update
              }, function (err, result) {
                if (err) console.log(err);
                else if (result) console.log('form1 updated');
              });
            }
            if (patient.form3) {
              const update = {
                name: req.body.patient_name,
                age: req.body.patient_age,
                HN: req.body.HN,
                G: req.body.G,
                P: req.body.P
              };

              Form3.update({ _id: patient.form3 }, {
                '$set': update
              }, function (err, result) {
                if (err) console.log(err);
                else if (result) console.log('form3 updated');
              });
            }
            if (patient.form4) {
              const update = {
                name: req.body.patient_name,
                age: req.body.patient_age,
                HN: req.body.HN,
                G: req.body.G,
                P: req.body.P,
                A: req.body.A,
                L: req.body.L
              };

              Form4.update({ _id: patient.form4 }, {
                '$set': update
              }, function (err, result) {
                if (err) console.log(err);
                else if (result) console.log('form4 updated');
              });
            }

            form2.save()
              .then(form2 => {
                Patient.findOne({ form2: form2._id })
                  .populate('form2')
                  .then(patient => {
                    //if exist
                    if (patient) {
                      req.flash('success_msg', 'Patient Form Updated');
                      res.redirect(`/patient/show/${patient.id}`);
                    }
                  });
              });

          });


      });
  },
  editform3: function (req, res) {
    Form3.findOne({
      _id: req.params.id
    })
      .then(form3 => {
        // new values
        form3.dorm = req.body.dorm;
        form3.room = req.body.room;
        form3.name = req.body.name;
        form3.age = req.body.age;
        form3.HN = req.body.HN;
        form3.addr1 = req.body.addr1;
        form3.addr2 = req.body.addr2;
        form3.addr3 = req.body.addr3;
        form3.addr4 = req.body.addr4;
        form3.addr5 = req.body.addr5;
        form3.phone = req.body.phone;
        form3.nearbyplace = req.body.nearbyplace;
        form3.job = req.body.job;
        form3.checkInDate = req.body.checkInDate;
        form3.checkInTime = req.body.checkInTime;
        form3.doctor = req.body.doctor;
        form3.symptom = req.body.symptom;
        form3.G = req.body.G;
        form3.P = req.body.P;
        form3.GA = req.body.GA;
        form3.currentSymptom = req.body.currentSymptom;
        form3.complications = req.body.complications;
        form3.congenitalDisorder = req.body.congenitalDisorder;
        form3.T = req.body.T;
        form3.pressure = req.body.pressure;
        form3.R = req.body.R;
        form3.BP = req.body.BP;
        form3.O2Sat = req.body.O2Sat;
        form3.weight = req.body.weight;
        form3.height = req.body.height;
        form3.BMI = req.body.BMI;
        form3.Diagnosis1 = req.body.Diagnosis1;
        form3.Diagnosis2 = req.body.Diagnosis2;

        form3.user_created = form3.user_created;
        form3.user_updated = req.user.firstName + ' ' + req.user.lastName;

        Patient.findOne({ form3: req.params.id })
          .then(patient => {
            if (patient.form1) {
              const update = {
                patient_name: req.body.name,
                patient_age: req.body.age,
                job: req.body.job,
                HN: req.body.HN,
                G: req.body.G,
                P: req.body.P,
                GA: req.body.GA
              };
              Form1.update({ _id: patient.form1 }, {
                '$set': update
              }, function (err, result) {
                if (err) console.log(err);
                else if (result) console.log('form1 updated');
              });
            }
            if (patient.form2) {
              const update = {
                patient_name: req.body.name,
                patient_age: req.body.age,
                HN: req.body.HN,
                G: req.body.G,
                P: req.body.P
              };

              Form2.update({ _id: patient.form2 }, {
                '$set': update
              }, function (err, result) {
                if (err) console.log(err);
                else if (result) console.log('form2 updated');
              });
            }
            if (patient.form4) {
              const update = {
                name: req.body.name,
                age: req.body.age,
                job: req.body.job,
                HN: req.body.HN,
                G: req.body.G,
                P: req.body.P,
                GA: req.body.GA
              };

              Form4.update({ _id: patient.form4 }, {
                '$set': update
              }, function (err, result) {
                if (err) console.log(err);
                else if (result) console.log('form4 updated');
              });
            }

            form3.save()
              .then(form3 => {
                Patient.findOne({ form3: form3._id })
                  .populate('form3')
                  .then(patient => {
                    //if exist
                    if (patient) {
                      req.flash('success_msg', 'Patient Form Updated');
                      res.redirect(`/patient/show/${patient.id}`);
                    }
                  });
              });

          });

      });
  },
  editform4: function (req, res) {
    Form4.findOne({
      _id: req.params.id
    })
      .then(form4 => {
        // new values
        let name = req.body.name[0];
        let age = req.body.age[0];
        let HN = req.body.HN[0];
        let wardInput = req.body.wardInput[0];

        form4.reportFrom = req.body.reportFrom;
        form4.wardInput = wardInput,
          form4.name = name,
          form4.age = age,
          form4.HN = HN,
          form4.analysis = req.body.analysis;
        form4.roomType = req.body.roomType;
        form4.equip1 = req.body.equip1;
        form4.equip2 = req.body.equip2;
        form4.equip3 = req.body.equip3;
        form4.equip4 = req.body.equip4;
        form4.equipmentOther = req.body.equipmentOther;
        form4.reporter = req.body.reporter;
        form4.reportDate = req.body.reportDate;
        form4.reportTime = req.body.reportTime;
        form4.reported = req.body.reported;
        form4.checkDoc1 = req.body.checkDoc1;
        form4.checkDoc2 = req.body.checkDoc2;
        form4.checkDoc3 = req.body.checkDoc3;
        form4.checkDoc4 = req.body.checkDoc4;
        form4.checkDoc5 = req.body.checkDoc5;
        form4.checkDocOther = req.body.checkDocOther;
        form4.bring = req.body.bring;
        form4.bringOther = req.body.bringOther;
        form4.examiner = req.body.examiner;
        form4.checkInDate = req.body.checkInDate;
        form4.checkInTime = req.body.checkInTime;
        form4.transport = req.body.transport;
        form4.transportOther = req.body.transportOther;
        form4.symptom = req.body.symptom;
        form4.G = req.body.G;
        form4.P = req.body.P;
        form4.A = req.body.A;
        form4.L = req.body.L;
        form4.GA = req.body.GA;
        form4.ANC = req.body.ANC;
        form4.beforeArrive = req.body.beforeArrive;
        form4.Temp = req.body.Temp;
        form4.Pulse = req.body.Pulse;
        form4.Resp = req.body.Resp;
        form4.BP = req.body.BP;
        form4.O2Sat = req.body.O2Sat;
        form4.vitalOther = req.body.vitalOther;
        form4.cannotTell3 = req.body.cannotTell3;
        form4.genetics = req.body.genetics;
        form4.geneticsOther = req.body.geneticsOther;
        form4.anyMedication = req.body.anyMedication;
        form4.anyMedicationOther = req.body.anyMedicationOther;
        form4.medicalProblems = req.body.medicalProblems;
        form4.medicalProblemsOther = req.body.medicalProblemsOther;
        form4.surgicalHistory = req.body.surgicalHistory;
        form4.surgicalHistoryOther = req.body.surgicalHistoryOther;
        form4.medicationHistory = req.body.medicationHistory;
        form4.medicationHistoryOther = req.body.medicationHistoryOther;
        form4.roleInFamily = req.body.roleInFamily;
        form4.educationLevel = req.body.educationLevel;
        form4.relationshipStatus = req.body.relationshipStatus;
        form4.job = req.body.job;
        form4.religion = req.body.religion;
        form4.secondaryContact = req.body.secondaryContact;
        form4.secondaryContactRelation = req.body.secondaryContactRelation;
        form4.tel = req.body.tel;
        form4.contactPlace = req.body.contactPlace;

        form4.user_created = form4.user_created;
        form4.user_updated = req.user.firstName + ' ' + req.user.lastName;

        Patient.findOne({ form4: req.params.id })
          .then(patient => {
            if (patient.form1) {
              const update = {
                patient_name: name,
                patient_age: age,
                job: req.body.job,
                HN: HN,
                ward: wardInput,
                G: req.body.G,
                P: req.body.P,
                A: req.body.A,
                L: req.body.L,
                GA: req.body.GA
              };
              Form1.update({ _id: patient.form1 }, {
                '$set': update
              }, function (err, result) {
                if (err) console.log(err);
                else if (result) console.log('form1 updated');
              });
            }
            if (patient.form2) {
              const update = {
                patient_name: name,
                patient_age: age,
                HN: HN,
                G: req.body.G,
                P: req.body.P,
                A: req.body.A,
                L: req.body.L,
              };

              Form2.update({ _id: patient.form2 }, {
                '$set': update
              }, function (err, result) {
                if (err) console.log(err);
                else if (result) console.log('form2 updated');
              });
            }
            if (patient.form3) {
              const update = {
                name: name,
                age: age,
                job: req.body.job,
                HN: HN,
                G: req.body.G,
                P: req.body.P,
                GA: req.body.GA
              };

              Form3.update({ _id: patient.form3 }, {
                '$set': update
              }, function (err, result) {
                if (err) console.log(err);
                else if (result) console.log('form3 updated');
              });
            }

            form4.save()
              .then(form4 => {
                Patient.findOne({ form4: form4._id })
                  .populate('form4')
                  .then(patient => {
                    //if exist
                    if (patient) {
                      req.flash('success_msg', 'Patient Form Updated');
                      res.redirect(`/patient/show/${patient.id}`);
                    }
                  })
              })

          });
      });
  }
}