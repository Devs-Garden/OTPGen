var OTPGen = require('./index.js');

OTPGen.getOTP(5, function(otp) {
	console.log(JSON.stringify(otp));
});
