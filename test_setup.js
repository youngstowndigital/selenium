var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().
	withCapabilities(webdriver.Capabilities.chrome()).
	build();

driver.get('http://www.lambdatest.com');
driver.quit();
