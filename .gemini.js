module.exports = {
  rootUrl: 'http://localhost:3000',
  gridUrl: 'http://127.0.0.1:4444/wd/hub',
  windowSize: '1366x788',
  system: {
    plugins: {
      'html-reporter/gemini': {
        enabled: true,
        defaultView: 'all',
      }
    }
  },
  browsers: {
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          args: ["disable-gpu", "no-sandbox"],
        },
      }
    },
  }
};
