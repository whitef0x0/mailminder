"use strict";

var fs = require('fs');

var Utils = function(){}

Utils.getEmailsFromFile = function(file_path) {
  var emails = fs.readFileSync(file_path).toString().split("\n").join(", ");
  return emails;
}

module.exports = Utils;