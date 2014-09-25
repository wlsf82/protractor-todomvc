protractor-todomvc
==================
To install protractor and the webdriver-manager, run the following command:

npm install -g protractor

Then update the webdriver-manager with the below command:

webdriver-manager update

And to start the webdriver-manager (needed for the test execution), let a terminal opened and run the following command:

webdriver-manager start

______________________________________________________________________________________________________

The conf.js file provides the information from where the Selenium Webdriver will be running, and which spec file must be used for the test execution.
It can also provide information about which browser will be used for testing, or even if multi-browser testing is needed.
