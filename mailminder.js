var startStopDaemon = require('start-stop-daemon');

var mail = require('./lib/send_mail'),
	CronJob = require('cron').CronJob,
	parser = require('cron-parser'),
	fs = require('fs');

//Default Schedule is every Friday at 6PM
var default_schedule = '00 18 * * 5',
    default_timezone = "America/Los_Angeles";


startStopDaemon(function(){
var argv = require('minimist')(process.argv.slice(2));
	if(argv.file){
		var cron_tab = default_schedule;
		var tz = default_timezone;


		var email_file = argv.file;

		if( argv.tz ) timezone = argv.tz;
		if( argv.interval ) cron_tab = interval;

		var job = new CronJob({
		  cronTime: cron_tab,
		  onTick: function() {
		    // Runs every time the cronjob is called 
			mail.send_reminder(email_file);
		  },
		  start: false,
		  timeZone: tz
		});

		job.start()
	}
}).on('start', function(){
	this.console.write('Starting mailminder at '+ new Date() + '\n');
});