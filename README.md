node-cron
=========

[![Build Status](https://secure.travis-ci.org/ncb000gt/node-cron.png)](http://travis-ci.org/#!/ncb000gt/node-cron)
[![wercker status](https://app.wercker.com/status/0cadfe5d45ad7bc819efb636026cf230/s "wercker status")](https://app.wercker.com/project/bykey/0cadfe5d45ad7bc819efb636026cf230)

Originally this project was a NodeJS fork of [James Padolsey's][jamespadolsey] [cron.js](http://github.com/padolsey/cron.js).

After [Craig Condon][crcn] made some updates and changes to the code base this has evolved to something that has a bit of both. The cron syntax parsing is mostly James' while using timeout instead of interval is Craig's.

Additionally, this library goes beyond the basic cron syntax and allows you to supply a Date object. This will be used as the trigger for your callback. Cron syntax is still an acceptable CronTime format. Although the Cron patterns suported here extend on the standard Unix format to support seconds digits, leaving it off will default to 0 and match the Unix behavior.

If You Are Submitting Bugs/Issues
=============

Because we can't magically know what you are doing to expose an issue, it is best if you provide a snippet of code. This snippet need not include your secret sauce, but it must replicate the issue you are describing. The issues that get closed without resolution tend to be the ones without code examples. Thanks.


Versions and Backwards compatability breaks:
==========

As goes with semver, breaking backwards compatibility should be explicit in the versioning of your library. As such, we'll upgrade the version of this module in accordance with breaking changes (I'm not always great about doing it this way so if you notice that there are breaking changes that haven't been bumped appropriately please let me know). This table lists out the issues which were the reason for the break in backward compatibility.

<table>
<tr>
<td>Node Cron Ver</td><td>Issue #</td>
</tr>
<tr>
<td>1.0.0</td><td><ul><li><a href="https://github.com/ncb000gt/node-cron/pull/41">GH-41</a></li><li><a href="https://github.com/ncb000gt/node-cron/pull/36">GH-36</a></li></ul></td>
</tr>
</table>


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

