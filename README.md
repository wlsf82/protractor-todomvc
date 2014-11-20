protractor-todomvc
==================
To install protractor and the webdriver-manager, run the following command:

npm install -g protractor

Then update the webdriver-manager with the below command:

webdriver-manager update

And to start the webdriver-manager (needed for the test execution), let a terminal opened and run the following command:

webdriver-manager start

_____________________________________________________________________________________________________

The conf.js file provides the information from where the Selenium Webdriver will be running, and which spec file must be used for the test execution.
It can also provide information about which browser will be used for testing, or even if multi-browser testing is needed.

The spec.js file has the tests themselves.

And the *.helper.js files are just helpers to keep the repeated complex logic code separated from the test.

_____________________________________________________________________________________________________

To install the protractor version focused on performance testing, use the below command:

npm install -g protractor-perf

And then to execute the protractor tests focusing on performance metrics, use the following command on the folder where the tests are:

protractor-perf conf.js
