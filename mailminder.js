var argv = require('minimist')(process.argv.slice(2));

var mail = require('./lib/send_mail'),
	CronJob = require('cron').CronJob,
	parser = require('cron-parser'),
	fs = require('fs');

//Default Schedule is every Friday at 6PM
var default_schedule = '06 00 06 * 5',
    default_timezone = "America/Los_Angeles";


if( argv._[0] === 'start' && argv.file){
	var cron_tab = default_schedule;
	var tz = default_timezone;


	var email_file = argv.file;

	if( argv.tz ) timezone = argv.tz;
	if( argv.interval ) cron_tab = interval;

	var job = new CronJob({
	  cronTime: '* * * * *', //'00 18 * * 5' ,
	  onTick: function() {
	    // Runs every Friday at 6:00 PM. 
		mail.send_reminder(email_file);
	  },
	  start: false,
	  timeZone: tz
	});

	job.start()
	// require('daemon')();
	// console.log(process.pid);
}
