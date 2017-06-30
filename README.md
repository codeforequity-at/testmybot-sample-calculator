# Testmybot Sample Chatbot: Calculator

[ ![Codeship Status for codeforequity-at/testmybot-sample-calculator](https://app.codeship.com/projects/1f8248b0-31a6-0135-af58-3a3212f0f89d/status?branch=master)](https://app.codeship.com/projects/225784)

This is a very advanced scientific calculator, wrapped into a Chatbot!

For demonstration purposes.

## Codeship Continuous Integration

Every Push to this repository triggers an automated test run on Codeship. The test reports are published into an [Amazon S3 bucket](http://testmybot-sample-calculator.s3-website-eu-west-1.amazonaws.com).

### Codeship Test Setup Commands

	$ npm install
	$ pip install awscli

### Codeship Test Commands

	$ npm test
	$ npm run-script test-export
	$ aws s3 cp test-html-report.html s3://testmybot-sample-calculator/test-html-report.$(date +'%Y_%m_%d_%H%M').html	
	

