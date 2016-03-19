var webA = require('./websiteAnalyzer');

//    mock web usage:
webA.reportPageAccess('google.com');
webA.reportPageAccess('google.com');
webA.reportPageAccess('google.com');
webA.reportPageAccess('google.com');
webA.reportPageAccess('google.com');
webA.reportPageAccess('yahoo.com');
webA.reportPageAccess('yahoo.com');
webA.reportPageAccess('yahoo.com');
webA.reportPageAccess('amazon.com');


console.log('Top 2 pages are: ', webA.getTopNPages(2));
console.log('Top page is: ', webA.getTopNPages(1));
