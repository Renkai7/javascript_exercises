const isPrime = (n) => {
	if (n <= 1) {
		return false;
	}

	if (n <= 3) {
		return true;
	}

	if (n % 2 === 0) {
		return false;
	}

	for (let i = 3; i <= Math.sqrt(n); i += 2) {
		if (n % i === 0) {
			return false;
		}
	}
};

if (isPrime(5)) {
	console.log("Is Prime");
} else {
	console.log("Not a prime");
}

const findPrimesInRange = (start, end) => {
	for (let i = start; i < end; i++) {
		if (isPrime(i)) {
			console.log(i, " is prime.");
		}
	}
};

findPrimesInRange(1, 20);
