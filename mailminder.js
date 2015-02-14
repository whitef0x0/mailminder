var argv = require('minimist')(process.argv.slice(2));

var mail = require('./send_mail'),
	CronJob = require('cron').CronJob,
	parser = require('cron-parser'),
	fs = require('fs');

//Default Schedule is every Friday at midnight
var default_schedule = '00 00 06 * 5',
    default_timezone = "America/Los_Angeles";


if( argv._[0] === 'start' && argv.f){

	var email_file = argv.f

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