const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const Form4 = new Schema({
  reportFrom: {
    type: String
  },
  wardInput: {
    type: String
  },
  name: {
    type: String
  },
  age: {
    type: String
  },
  HN: {
    type: String
  },
  analysis: {
    type: String
  },
  roomType: {
    type: String
  },
  equip1: {
    type: String
  },
  equip2: {
    type: String
  },
  equip3: {
    type: String
  },
  equip4: {
    type: String
  },
  equipmentOther: {
    type: String
  },
  reporter: {
    type: String
  },
  reportDate: {
    type: String
  },
  reportTime: {
    type: String
  },
  reported: {
    type: String
  },
  checkDoc1: {
    type: String
  },
  checkDoc2: {
    type: String
  },
  checkDoc3: {
    type: String
  },
  checkDoc4: {
    type: String
  },
  checkDoc5: {
    type: String
  },
  checkDocOther:{
    type: String
  },
  bring: {
    type: String
  },
  bringOther: {
    type: String
  },
  examiner: {
    type: String
  },
  checkInDate: {
    type: String
  },
  checkInTime: {
    type: String
  },
  transport: {
    type: String
  },
  transportOther: {
    type: String
  },
  symptom: {
    type: String
  },
  G: {
    type: String
  },
  P: {
    type: String
  },
  A: {
    type: String
  },
  L: {
    type: String
  },
  GA: {
    type: String
  },
  ANC: {
    type: String
  },
  beforeArrive: {
    type: String
  },
  Temp: {
    type: String
  },
  Pulse: {
    type: String
  },
  Resp: {
    type: String
  },
  BP: {
    type: String
  },
  O2Sat: {
    type: String
  },
  vitalOther: {
    type: String
  },
  cannotTell3:{
    type: String
  },
  genetics: {
    type: String
  },
  geneticsOther: {
    type: String
  },
  anyMedication: {
    type: String
  },
  anyMedicationOther: {
    type: String
  },
  medicalProblems: {
    type: String
  },
  medicalProblemsOther: {
    type: String
  },
  surgicalHistory: {
    type: String
  },
  surgicalHistoryOther: {
    type: String
  },
  medicationHistory: {
    type: String
  },
  medicationHistoryOther: {
    type: String
  },
  roleInFamily: {
    type: String
  },
  educationLevel: {
    type: String
  },
  relationshipStatus: {
    type: String
  },
  job: {
    type: String
  },
  religion: {
    type: String
  },
  secondaryContact: {
    type: String
  },
  secondaryContactRelation: {
    type: String
  },
  tel: {
    type: String
  },
  contactPlace: {
    type: String
  },
  user_created: {
    type: String
  },
  user_updated: {
    type: String
  }
});

mongoose.model('form4', Form4);