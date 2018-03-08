
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const Patient = new Schema({
  name:{
    type: String,
    required: true
  },
  age:{
    type: Number,
  },
  job:{
    type: String
  },
  G:{
    type: String
  },
  P:{
    type: String
  },
  A:{
    type: String
  },
  L:{
    type: String
  },
  GA:{
    type: String
  },
  weight:{
    type: Number
  },
  height:{
    type: Number
  },
  HN:{
    type: String
  },
  ward:{
    type: String,
  },
  addr1:{
    type: String
  },
  addr2:{
    type: String
  },
  addr3:{
    type: String
  },
  addr4:{
    type: String
  },
  addr5:{
    type: String
  },
  phone:{
    type: String
  },
  form1:{
    type: Schema.Types.ObjectId,
    ref: 'form1'
  },
  form2:{
    type: Schema.Types.ObjectId,
    ref: 'form2'
  },
  form3:{
    type: Schema.Types.ObjectId,
    ref: 'form3'
  },
  form4:{
    type: Schema.Types.ObjectId,
    ref: 'form4'
  },
  date:{
    type: Date,
    default: Date.now
  }
});

mongoose.model('patient', Patient);