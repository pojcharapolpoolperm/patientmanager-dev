const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const Form1 = new Schema({
  date:{
    type: Date,
    default: Date.now
  },
  recordDate: {
    type: String
  },
  recordTime: {
    type: String
  },
  history: {
    type: String
  },
  history_Other: {
    type: String
  },
  CC: {
    type: String
  },
  PI: {
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
  Last: {
    type: String
  },
  LMP: {
    type: String
  },
  EDC: {
    type: String
  },
  Preg: {
    type: String
  },
  ANC: {
    type: String
  },
  first_ANC: {
    type: String
  },
  count_ANC: {
    type: String
  },
  TT: {
    type: String
  },
  TT_more: {
    type: String
  },
  VDRL: {
    type: String
  },
  HbsAg: {
    type: String
  },
  HbeAg: {
    type: String
  },
  AntiHIV: {
    type: String
  },
  Hct: {
    type: String
  },
  Blood_Group: {
    type: String
  },
  Rh: {
    type: String
  },
  OF: {
    type: String
  },
  DCIP: {
    type: String
  },
  Thallasemia: {
    type: String
  },
  preg_sym: {
    type: String
  },
  Past_Hx: {
    type: String
  },
  med_Allergic: {
    type: String
  },
  smoke: {
    type: String
  },
  personal_smoke_text: {
    type: String
  },
  alcohol: {
    type: String
  },
  personal_alcohol_text: {
    type: String
  },
  drug: {
    type: String
  },
  personal_drug_text: {
    type: String
  },
  job: {
    type: String
  },
  DM: {
    type: String
  },
  HT: {
    type: String
  },
  Asthma: {
    type: String
  },
  Renal_disease: {
    type: String
  },
  Heart_disease: {
    type: String,
  },
  Blood_disease: {
    type: String
  },
  Other_disease: {
    type: String
  },
  family_Other: {
    type: String
  },
  Social_Hx: {
    type: String
  },
  HEENT: {
    type: String
  },
  heent_Other: {
    type: String
  },
  Respiratory: {
    type: String
  },
  respiratory_Other: {
    type: String
  },
  Cardiovascular: {
    type: String
  },
  cardiovascular_Other: {
    type: String
  },
  Gastrointestital: {
    type: String
  },
  gastro_Other: {
    type: String
  },
  Genito: {
    type: String
  },
  genito_Other: {
    type: String
  },
  Gynecological: {
    type: String
  },
  gynecological_Other: {
    type: String
  },
  Neurology: {
    type: String
  },
  neurology_Other: {
    type: String
  },
  Other: {
    type: String
  },
  other_Other: {
    type: String
  },
  T: {
    type: String
  },
  PR: {
    type: String
  },
  RR: {
    type: String
  },
  BP: {
    type: String
  },
  BW: {
    type: String
  },
  HT: {
    type: String
  },
  GA: {
    type: String
  },
  Skin: {
    type: String
  },
  HEENT_lower: {
    type: String
  },
  Heart: {
    type: String
  },
  Lung: {
    type: String
  },
  Abdomen: {
    type: String
  },
  Extremities: {
    type: String
  },
  Neuro: {
    type: String
  },
  Others: {
    type: String
  },
  HF: {
    type: String
  },
  Position: {
    type: String
  },
  FHS: {
    type: String
  },
  Cervix: {
    type: String
  },
  Eff: {
    type: String
  },
  Station: {
    type: String
  },
  Membrane: {
    type: String
  },
  AF: {
    type: String
  },
  AF_time: {
    type: String
  },
  Preg_other: {
    type: String
  },
  Inves_hct: {
    type: String
  },
  Urine_Albumin: {
    type: String
  },
  Urine_Sugar: {
    type: String
  },
  Inves_other: {
    type: String
  },
  imp:{
    type: String
  },
  plan: {
    type: String
  },
  doctor_sign: {
    type: String
  },
  staff_sign: {
    type: String
  },
  patient_name: {
    type: String
  },
  patient_age: {
    type: String
  },
  ward: {
    type: String
  },
  room: {
    type: String
  },
  HN: {
    type: String
  },
  AN: {
    type: String
  },
  doctor_assigned: {
    type: String
  },
  user_created: {
    type: String
  },
  user_updated: {
    type: String
  }

});

mongoose.model('form1', Form1);