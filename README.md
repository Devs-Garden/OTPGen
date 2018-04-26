# OTPGen
Generate random number generator for OTP usage

#Usage
var OTPGen = require('otpgen');

OTPGen.getOTP(5, function(otp) {
	console.log(JSON.stringify(otp));
});

