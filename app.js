
const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const { ensureAuthenticated } = require('./helpers/auth');

// const Materialize = require('materialize-css');


const app = express();

require("./models/User");
const User = mongoose.model('users');
require("./models/Form1");
const Form1 = mongoose.model('form1');
// Load rotues
const patient = require('./routes/patient');
const user = require('./routes/user');

// Passport Config
require('./config/passport')(passport);

// DB Config
const db = require('./config/database');

// Handlebars Helpers
const {
  select,
  formatDate,
  setChecked,
  ifAllExist,
  tableValue
} = require('./helpers/hbs');

// Connect to database
mongoose.connect(db.mongoURI)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// Load Models
require('./models/Patient');
const Patient = mongoose.model('patient');

// Handlebars Middleware
app.engine('handlebars', exphbs({
  helpers: {
    select: select,
    formatDate: formatDate,
    setChecked: setChecked,
    ifAllExist: ifAllExist,
    tableValue: tableValue
  },
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// Method Override Middleware
app.use(methodOverride('_method'));

// Express-Session Middleware
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true,
}))

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect-Flash Middleware
app.use(flash());

// Global variables
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});

// BodyParser Middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Index Route
app.get('/', (req, res) => {
  res.redirect('/user/login');
});

// About Route
app.get('/about', (req, res) => {
  res.render('about');
});

// Patient Dashboard
app.get('/patients/dashboard', ensureAuthenticated, (req, res) => {
  Patient.find()
    .then(patients => {
      res.render('patient/dashboard', {
        patients: patients
      });
    });
});

app.get('/patients/dashboard/search', ensureAuthenticated, (req, res) => {
  res.redirect('/patients/dashboard');
})

// Search patient
app.post('/patients/dashboard/search', ensureAuthenticated, (req, res) => {
  // Split search_input into array
  var name = req.body.search;
  var searchArray = name.split(" ");

  let searchResult = [];
  let exist = false;

  // Find all patient
  Patient.find({})
    .then(patient => {
      if (patient) {
        var patientArray;
        for (var i = 0; i < searchArray.length; i++) {
          for (var j = 0; j < patient.length; j++) {
            // split each patient name into arrays
            var patientLower =  patient[j].name.toLowerCase();
            patientArray = patientLower.split(" ");
            // compare search_array with each patient_array
            for (var k = 0; k < patientArray.length; k++) {
              if (patientArray[k].localeCompare(searchArray[i].toLowerCase()) == 0) {
                // check if matched array has already been pushed
                for(var z=0; z<searchResult.length; z++){
                  if(patient[j]._id.toString().localeCompare(searchResult[z]._id.toString()) != 0){
                    exist = false;
                  } else {
                    // if exist get out of loop
                    exist = true;
                    break;
                  }
                }
                // if not exist push into result array
                if(!exist) searchResult.push(patient[j]);
              }
            }
          }
        }
        // if none exist recheck by filtering HN
        if(searchResult.length < 1){
          for(var i = 0; i< searchArray.length; i++){
            for(var j = 0; j < patient.length; j++){
              console.log(searchArray[i] + " " + patient[j].HN );
              if(searchArray[i].localeCompare(patient[j].HN) == 0){
                console.log('matched');
                searchResult.push(patient[j]);
              }
            }
          }
        }
        // console.log(searchResult);
        res.render('patient/search', {
          searched_Patient: searchResult
        })
      }
    })
})


// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Use routes
app.use('/patient', patient);
app.use('/user', user);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
