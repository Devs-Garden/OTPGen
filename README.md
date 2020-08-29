# OTPGen
Generate a random number of specified length, very much suitable for OTPs.

#Usage

```javascript
var OTPGen = require('otpgen');

OTPGen.getOTP(5, function(otp) {
	console.log(JSON.stringify(otp));
});
```
