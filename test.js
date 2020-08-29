var OTPGen = require('./index.js');

OTPGen.getOTP(6, function(otp) {
	console.log(JSON.stringify(otp));
});
