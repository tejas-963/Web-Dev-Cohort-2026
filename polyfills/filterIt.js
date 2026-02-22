if (!Array.prototype.filterIt) {
	Array.prototype.filterIt = function (callback) {
		if (typeof callback !== "function")
			throw new TypeError("Callback must be a functions");

		const result = [];

		for (let i = 0; i < this.length; i++) {
			if (callback(this[i], i, this)) result.push(this[i]);
		}

		return result;
	};
}
