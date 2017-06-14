var HTMLReport = require('jasmine-xml2html-converter');

var htmlReportConfig = {
  reportTitle: 'TestMyBot Execution Report',
  outputPath: '.'
};
new HTMLReport().from(__dirname + '/junitresults.xml', htmlReportConfig);

//http://testmybot-sample-calculator.s3-website-eu-west-1.amazonaws.com