var HTMLReport = require('jasmine-xml2html-converter');

var htmlReportConfig = {
  reportTitle: 'TestMyBot Execution Report',
  outputPath: '.'
};
new HTMLReport().from(__dirname + '/junitresults.xml', htmlReportConfig);
