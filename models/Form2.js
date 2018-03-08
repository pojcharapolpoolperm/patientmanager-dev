const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const Form2 = new Schema({
  date:{
    type: Date,
    default: Date.now
  },
  patient_name: {
    type: String
  },
  patient_age: {
    type: String
  },
  HN: {
    type: String
  },
  history_Other: {
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
  A: {
    type: String
  },
  L: {
    type: String
  },
  Last: {
    type: String
  },
  Preg: {
    type: String
  },
  Preg_sym: {
    type: String
  },
  Labour: {
    type: String
  },
  Labour_field: {
    type: String
  },
  Labour_hurt: {
    type: String
  },
  phase1_hour: {
    type: String
  },
  phase1_min: {
    type: String
  },
  uterus: {
    type: String
  },
  phase2_hour: {
    type: String
  },
  phase2_min: {
    type: String
  },
  bornDate: {
    type: String
  },
  bornTime: {
    type: String
  },
  phase3_hour: {
    type: String
  },
  phase3_min: {
    type: String
  },
  placenta: {
    type: String
  },
  MR: {
    type: String
  },
  MR_date: {
    type: String
  },
  MR_time: {
    type: String
  },
  appearance: {
    type: String
  },
  med_time_does: {
    type: String
  },
  Delivery: {
    type: String
  },
  delivery_field: {
    type: String
  },
  Indication: {
    type: String
  },
  birth_delivery: {
    type: String
  },
  Episiotomy: {
    type: String
  },
  Perineum: {
    type: String
  },
  Suture: {
    type: String
  },
  placenta_cord: {
    type: String
  },
  placenta_w: {
    type: String
  },
  cord_length: {
    type: String
  },
  placenta_app: {
    type: String,
  },
  placenta_app_field: {
    type: String
  },
  placenta_all: {
    type: String
  },
  abnormalcord_text: {
    type: String
  },
  POSTPARTUM: {
    type: String
  },
  blood_loss: {
    type: String
  },
  BP: {
    type: String
  },
  mmHg: {
    type: String
  },
  med_time_does2: {
    type: String
  },
  time1: {
    type: String
  },
  BP1: {
    type: String
  },
  mmHg1: {
    type: String
  },
  PR1: {
    type: String
  },
  note1: {
    type: String
  },
  time2: {
    type: String
  },
  BP2: {
    type: String
  },
  mmHg2: {
    type: String
  },
  PR2: {
    type: String
  },
  note2: {
    type: String
  },
  time3: {
    type: String
  },
  BP3: {
    type: String
  },
  mmHg3: {
    type: String
  },
  PR3: {
    type: String
  },
  note3: {
    type: String
  },
  time4: {
    type: String
  },
  BP4: {
    type: String
  },
  mmHg4: {
    type: String
  },
  PR4: {
    type: String
  },
  note4: {
    type: String
  },
  time5: {
    type: String
  },
  BP5: {
    type: String
  },
  mmHg5: {
    type: String
  },
  PR5: {
    type: String
  },
  note5: {
    type: String
  },
  gender: {
    type: String
  },
  weight: {
    type: String
  },
  min1:{
    type: String
  },
  min5: {
    type: String
  },
  min10: {
    type: String
  },
  OF: {
    type: String
  },
  chest: {
    type: String
  },
  length:{
    type: String
  },
  infant: {
    type: String
  },
  remark: {
    type: String
  },
  mom_state: {
    type: String
  },
  baby_state: {
    type: String
  },
  T_cc: {
    type: String
  },
  PR_min: {
    type: String
  },
  R_min: {
    type: String
  },
  BP_mmHg: {
    type: String
  },
  temp: {
    type: String
  },
  uterus_contract: {
    type: String
  },
  baby_milk: {
    type: String
  },
  urine_out: {
    type: String
  },
  excretion: {
    type: String
  },
  breast_milk: {
    type: String
  },
  baby_abnormalities: {
    type: String
  },
  mom_abnormalities: {
    type: String
  },
  logged_nurse: {
    type: String
  },
  user_created: {
    type: String
  },
  user_updated: {
    type: String
  }
});

mongoose.model('form2', Form2);