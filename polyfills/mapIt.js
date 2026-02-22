if (!Array.prototype.mapIt) {
	Array.prototype.mapIt = function (callback) {
		if (typeof callback !== "function")
			throw new TypeError("Callback must be a functions");

		const result = [];

		for (let i = 0; i < this.length; i++) {
			result.push(callback(this[i], i, this));
		}

		return result;
	};
}
