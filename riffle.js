function isRiffle(half1, half2, shuffle) {
	var half1index = 0, half2index = 0;

	for (var i = 0; i < shuffle.length; i++) {
		if (half1index < half1.length) {
			if (half1[half1index] === shuffle[i]) {
				half1index++;
			}
		} else if (half2[half2index] < half2.length) {
			if (half2[half2index] === shuffle[i]) {
				half2index++;
			}
		} else {
			return false;
		}
	}
	return true;
}