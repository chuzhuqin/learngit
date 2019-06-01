module.exports = function main(inputs) {
    var fee1 = getfee(inputs['distance']);
    var fee2 = 0.25*(inputs['parkTime']);
    var fee = Math.round(fee1+fee2)
    return fee;
};

function getfee (distance) {
	var fee = 6;
	if (distance > 2) {
		fee = fee + 0.8*(distance-2);
	}
	if (distance > 8) {
		fee = fee + 0.4*(distance-8);
	}
	return fee;
};