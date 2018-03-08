if(process.env.NODE_ENV === 'production'){
  module.exports = {mongoURI: 'mongodb://gildzz:48025Ba0@ds121118.mlab.com:21118/patientmanager-dev'}
} else {
  module.exports ={mongoURI: 'mongodb://localhost/patientmanager-dev'}
}