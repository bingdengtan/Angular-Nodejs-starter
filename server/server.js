var express = require('express');
var path = require('path');
var mount = require('mount-routes');

var scheduleService = require('./services/scheduleService')

var app = express();

//Set up schedule
var Agenda = require('agenda');
var agenda = new Agenda({db: {address: 'mongodb://localhost:27017/agenda'}});

agenda.define('ear.reminder', function (job, done) {
    try {
      scheduleService.sendEmail();
      done()
    }catch (err) {
      done(new Error(err))
    }
})
agenda.on('ready', function () {
    console.log("====>>>agenda start successful<<<<===")
    agenda.start();
})

//Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1:27017/foundation';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
//end mongoose connection

bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;  
console.log('Listening port number: ' + port);

//Set up router
var company = require('./routes/company');
var fund = require('./routes/fund');
var fundStock = require('./routes/fundStock')
var stock = require('./routes/stock')
var user = require('./routes/user')

app.use("/", express.static(path.join(__dirname,'..','client/dist')))
mount(app);
app.use('/company', company);
app.use('/fund', fund);
app.use('/fundStock', fundStock);
app.use('/stock', stock);
app.use('/user', user);

app.listen(port);
console.log('Server is running...');