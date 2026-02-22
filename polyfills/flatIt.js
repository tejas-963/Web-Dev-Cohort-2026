if (!Array.prototype.flatIt) {
	Array.prototype.flatIt = function (depth = 1) {
		if ((depth !== Infinity && !Number.isInteger(depth)) || depth < 0)
			throw new TypeError("Argument should be an positive integer");

		const flatten = (arr, depth) => {
			if (depth <= 0) return arr.slice();

			const result = [];

			for (let i = 0; i < arr.length; i++) {
				const element = arr[i];
				if (Array.isArray(element)) {
					if (depth === Infinity)
						result.push(...flatten(element, Infinity));
					else 
						result.push(...flatten(element, depth - 1));
				} else 
					result.push(element);
			}

			return result;
		};

		return flatten(this, depth);
	};
}
