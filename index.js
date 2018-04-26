
function getOTP(length, callback) {
	var maxVal = '9';
	for (i=0;i<length;i++) {
		maxVal = maxVal + '0';
		if (i == length-1) {
			var otp = Math.floor(1000 + Math.random() * parseInt(maxVal));
			callback({
				'otp': otp
			});			
		}
	}
}

module.exports.getOTP = getOTP;