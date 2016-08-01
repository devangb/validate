#!/usr/bin/env node
'use strict';

const program = require('commander'),
  request = require("request");


let validateNum = (number,option) => {
  var access_key = '5897967950821a17fbff92b7cc531bb9';
  var validUrl = 'http://apilayer.net/api/validate' + '?access_key=' + access_key + '&number=' + number;
  request(validUrl, function(error,response,body){
     response = JSON.parse(body);
     console.log("Valid: "+ response.valid);
     console.log("Phone number: "+ response.international_format);
     console.log("Country name: "+ response.country_name);
     console.log("Location: "+ response.location);
     console.log("Carrier: "+ response.carrier);
     console.log("Country code: "+ response.country_code);
  });
};

program
  .version('1.0.0')
  .command('[number]','Number to be validated' )
  .description('A CLI to validate phone number')
  //.option('','')
  .action(validateNum);

program.parse(process.argv);
