var webdriverio = require('webdriverio');
var options = {
    desiredCapabilites: {
        browerName: 'phantomjs'
    },
    port: 4444
};

webdriverio
    .remote(options)
    .init()
    .url('http://www.google.com')
    .title(function(err, res) {
        console.log('Title was: '+ res.value)
    })
    .end();