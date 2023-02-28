const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    url : 'https://store.steampowered.com/login/',
    userName: 'the4fantastiquest',
    password: 'testautomation'
  },
});
