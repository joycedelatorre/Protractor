// conf.js
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js']
  }

// conf.js STEP 3 CHANGING THE CONFIGURATION: The configuration file lets you change things like which browsers are used and how to connect to the Selenium Server.
// exports.config = {
//   framework: 'jasmine',
//   seleniumAddress: 'http://localhost:4444/wd/hub',
//   specs: ['spec.js'],
//   capabilities: {
//     browserName: 'firefox'
//   }
// }

// conf.js using multiple browser
// exports.config = {
//   framework: 'jasmine',
//   seleniumAddress: 'http://localhost:4444/wd/hub',
//   specs: ['spec.js'],
//   multiCapabilities: [{
//     browserName: 'firefox'
//   }, {
//     browserName: 'chrome'
//   }]
// }
