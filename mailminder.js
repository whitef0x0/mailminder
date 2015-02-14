var argv = require('minimist')(process.argv.slice(2));

var mail = require('./lib/send_mail'),
	CronJob = require('cron').CronJob,
	parser = require('cron-parser'),
	fs = require('fs');

//Default Schedule is every Friday at 6PM
var default_schedule = '06 00 06 * 5',
    default_timezone = "America/Los_Angeles";


if( argv._[0] === 'start' && argv.file){

	var email_file = argv.file;
	var tz = default_timezone;
	var cron_tab = default_schedule;

	if( argv.tz ) timezone = argv.tz;
	if( argv.interval ) cron_tab = interval;

	if( argv.interval ){
		cron_tab =  argv.interval;
	} else{
		cron_tab = default_schedule;
	}

	var job = new CronJob({
	  cronTime: '* * * * *', //'00 18 * * 5' ,
	  onTick: function() {
	    // Runs every Friday at 6:00 PM. 
	    // It does not run on Saturday
	    // or Sunday.
	    console.log("cron job executing");
		mail.send_reminder(email_file);
	  },
	  start: false,
	  timeZone: "America/Los_Angeles"
	});

	job.start()
}