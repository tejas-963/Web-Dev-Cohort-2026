if (!Array.prototype.reduceIt) {
	Array.prototype.reduceIt = function (callback, initialValue) {
		if (typeof callback !== "function")
			throw new TypeError("Callback must be a functions");
		
		const array = this;
		const length = array.length;

		if (length === 0 && initialValue === undefined)
			throw new TypeError("Reduce of empty array with no initial value");

		let accumulator;
		let startIndex;

		if (initialValue !== undefined) {
			accumulator = initialValue;
			startIndex = 0;
		} else {
			accumulator = array[0];
			startIndex = 1;
		}

		for (let i = startIndex; i < length; i++) {
			if (i in array) {
				accumulator = callback(accumulator, array[i], i, array);
			}
		}

		return accumulator;
	};
}
