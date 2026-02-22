if (!Array.prototype.forEvery) {
	Array.prototype.forEvery = function (callback) {
		if (typeof callback !== "function")
			throw new TypeError("Callback must be a functions");

		for (let i = 0; i < this.length; i++) callback(this[i], i, this);
	};
}
