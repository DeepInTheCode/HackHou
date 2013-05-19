/*
CSV 2 JSON utility: 
It reads in all the content from the csv line by line (may be read out of order)
It then use underscorejs to convert into key + value pairs and finally dump into
a json file

Developer: Antony Wu (antony@meshway.com)
*/

var csv = require('csv'),
    fs = require('fs'),
    _ = require('underscore'),
    masterOptions = {
        inputFile: '../fee-schedule-master-file-fy13_displayFields.csv',
        outputFile: 'fee-schedule-master-file-fy13.json'
    },
    alcoholOptions = {
        inputFile: '../alcohol-fee-schedule.csv',
        outputFile: 'alcohol-fee-schedule.json'
    };

(function(options) {
    var header = null;
    var output = [];
    csv()
        .from(options.inputFile)
        .on('record', function(row,index){
            if (index === 0)
                header = row;
            else
                output.push(_.object(header, row));
        })
        .on('end', function(count){
            console.log('Number of lines: '+count);
            fs.writeFile(options.outputFile, JSON.stringify(output), function (err) {
              if (err) throw err;
              console.log('It\'s saved!');
            });
        });

})(masterOptions);