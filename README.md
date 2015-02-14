mailminder
=========

[![Build Status](https://secure.travis-ci.org/ncb000gt/node-cron.png)](http://travis-ci.org/#!/ncb000gt/node-cron)

This is a tool (build for my team) that allows you to send customizable weekly email reminders. Please note that this is a work in progress so there may be some bugs as we iron this out!

If You Are Submitting Bugs/Issues
=============

Because we can't magically know what you are doing to expose an issue, it is best if you provide a snippet of code. This snippet need not include your secret sauce, but it must replicate the issue you are describing. The issues that get closed without resolution tend to be the ones without code examples. Thanks.


Usage (basic commandline usage):
==========

To start with a weekly reminder (default schedule is every Friday at 6:00PM PST)

    node ./mailminder start --from==example@domain.com --to==someone@somewhere.com
    
If you want to specify a list of line seperated emails, use the -f option

    node ./mailminder start -f ./example_emails

If you want to specify a specific crontab schedule use the --interval option

    node ./mailminder start --from==example@domain.com --to==someone@somewhere.com --interval=='*****'
    
    

    
Install
==========

    From source: `npm install`
    From npm: `npm install mailminder`

Contributors
===========

* [David Baldwynn][whitef0x0]

License
==========

MIT


[whitef0x0]:http://github.com/whitef0x0

