const sonarqube = require('sonarqube-scanner');

// options Map (optional) Used to pass extra parameters for the analysis.
// See the [official documentation](https://docs.sonarqube.org/latest/analysis/analysis-parameters/) for more details.
const options = {
	'sonar.projectKey': 'My_Zoom',

	// projectName - defaults to project key
	'sonar.projectName': 'My_Zoom',

	// Path is relative to the sonar-project.properties file. Defaults to .
	'sonar.sources': 'src',

	// source language
	'sonar.language': 'js',

	'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info',

	// Encoding of the source code. Default is default system encoding
	'sonar.sourceEncoding': 'UTF-8',
};

// parameters for sonarqube-scanner
const params = {
	serverUrl: 'http://34.234.167.196:9000/',
	token: '',
	options,
};

const sonarScanner = async () => {
	if (!params.serverUrl) {
		console.log('SonarQube url not set. Nothing to do...');
		return;
	}

	//  Function Callback (the execution of the analysis is asynchronous).
	const callback = (result) => {
		console.log('Sonarqube scanner result:', result);
	};

	sonarqube(params, callback);
};

sonarScanner().catch((err) => console.error('Error during sonar scan', err));
