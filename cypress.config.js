const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.google.com',
    "experimentalSessionAndOrigin": true,
    "experimentalOriginDependencies" : true
  },
  
});
