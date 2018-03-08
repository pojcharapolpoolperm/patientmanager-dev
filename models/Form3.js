const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const Form3 = new Schema({
  dorm: {
    type: String
  },
  room: {
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
  addr1: {
    type: String
  },
  addr2: {
    type: String
  },
  addr3: {
    type: String
  },
  addr4: {
    type: String
  },
  addr5: {
    type: String
  },
  phone: {
    type: String
  },
  nearbyplace: {
    type: String
  },
  job: {
    type: String
  },
  checkInDate: {
    type: String
  },
  checkInTime: {
    type: String
  },
  symptom:{
    type: String
  },
  doctor: {
    type: String
  },
  G: {
    type: String
  },
  P: {
    type: String
  },
  GA: {
    type: String
  },
  currentSymptom: {
    type: String
  },
  complications: {
    type: String
  },
  congenitalDisorder: {
    type: String
  },
  T: {
    type: String
  },
  pressure: {
    type: String
  },
  R: {
    type: String
  },
  BP: {
    type: String
  },
  O2Sat: {
    type: String
  },
  weight: {
    type: String
  },
  height: {
    type: String
  },
  BMI: {
    type: String
  },
  Diagnosis1: {
    type: String
  },
  Diagnosis2: {
    type: String
  },
  user_created: {
    type: String
  },
  user_updated: {
    type: String
  }
});

mongoose.model('form3', Form3);