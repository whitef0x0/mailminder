'use strict';

var nodemailer = require('nodemailer'),
    swig = require('swig'),
    moment = require('moment'),
    readline = require('readline'),
    g_api = require('googleapis'),
    utils = require('./utils');

// //Create Google Docs File
// var auth = new googleapis.OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);

// googleapis.discover('drive', 'v2').execute(function(err, client) {
//   var url = auth.generateAuthUrl({ scope: SCOPE });
//   var getAccessToken = function(code) {
//     auth.getToken(code, function(err, tokens) {
//       if (err) {
//         console.log('Error while trying to retrieve access token', err);
//         return;
//       }
//       auth.credentials = tokens;
//       upload();
//     });
//   };
//   var upload = function() {
//     client.drive.files
//       .insert({ title: month_and_day_num+" Weekly Report", mimeType: 'text/plain' })
//       .withMedia('text/plain', 'Hello World!')
//       .withAuthClient(auth).execute(console.log);
//   };
//   console.log('Visit the url: ', url);
//   rl.question('Enter the code here:', getAccessToken);
// });

function WeeklyReminder() {}

WeeklyReminder.send_reminder = function(emails_file_path){
    console.log("hello");
    var month_name = moment(Date.now()).format('MMMM');
    var day_name = moment(Date.now()).format('dddd');
    var month_and_day_num = month_name + " " + moment(Date.now()).format('Do'); 
    var emails = utils.getEmailsFromFile(emails_file_path);

    var template = swig.compileFile('../templates/reminder_template.html');
    var html_email = template({
        pagename: 'Reminder',
        greeting: 'Hello everyone',
        reminder_body: 'A reminder that the weekly report for',
        month_date: month_and_day_num,
        day_of_week: day_name,
        closing: "Have a great weekend!",
        google_docs_url: 'https://drive.google.com/folderview?id=0B7N2PGptzyQxYmJfNmxabGMyMGc&usp=sharing',
        from: "The MetaOptima Reminder Bot"
    });

    // create reusable transporter object using SMTP transport
    var transporter = nodemailer.createTransport({
        service:'Mandrill',
        auth: {
            user: 'xxxxx@xxxxx.com',
            pass: 'xxxxxxxxxxxxxxxxxx'
        },
    });

    // NB! No need to recreate the transporter object. You can use
    // the same transporter object for all e-mails

    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: 'MetaOptima Reminder Bot <reminders@molescope.com>', // sender address
        to: emails, // list of receivers
        subject: 'Weekly Report Reminder', // Subject line
        html: html_email // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
        }else{
            console.log('Message sent: ' + info.response);
        }
    });
}

module.exports = WeeklyReminder;