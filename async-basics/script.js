"use strict";

// New API URL
// https://countries-api-836d.onrender.com/countries/

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
const renderCountry = function (data) {
	console.log(data);

	const lang = Object.values(data.languages)[0];
	const cur = Object.values(data.currencies)[0].name;

	const html = `<article class="country">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
				+data.population / 1000000
			).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${lang}</p>
      <p class="country__row"><span>💰</span>${cur}</p>
    </div>
  </article>`;
	countriesContainer.insertAdjacentHTML("beforeend", html);
};

const renderError = function (msg) {
	countriesContainer.insertAdjacentText("beforeend", msg);
	countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = "Something went wrong") {
	return fetch(url).then((response) => {
		if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

		return response.json();
	});
};
///////////////////////////////////////
// Our First AJAX Call: XMLHttpRequest
// const getCountryData = function (country) {
// 	const request = new XMLHttpRequest();
// 	request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
// 	request.send();

// 	request.addEventListener("load", function () {
// 		console.log(this.responseText);

// 		const [data] = JSON.parse(this.responseText);
// 		const lang = Object.values(data.languages)[0];
// 		const cur = Object.values(data.currencies)[0].name;
// 		console.log(data);
// 		console.log(data.languages);
// 		console.log(cur);
// 		const html = `<article class="country">
//           <img class="country__img" src="${data.flag}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name.common}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
// 							+data.population / 1000000
// 						).toFixed(1)} people</p>
//             <p class="country__row"><span>🗣️</span>${lang}</p>
//             <p class="country__row"><span>💰</span>${cur}</p>
//           </div>
//         </article>`;
// 		countriesContainer.insertAdjacentHTML("beforeend", html);
// 		countriesContainer.style.opacity = 1;
// 	});
// };

// getCountryData("portugal");
// getCountryData("japan");

///////////////////////////////////////
// Welcome to Callback Hell
// const getCountryAndNeighbour = function (country) {
// 	// AJAX call country 1
// 	const request = new XMLHttpRequest();
// 	request.open("GET", `https://restcountries.eu/rest/v2/name/${country}`);
// 	request.send();

// 	request.addEventListener("load", function () {
// 		const [data] = JSON.parse(this.responseText);
// 		console.log(data);

// 		// Render country 1
// 		renderCountry(data);

// 		// Get neighbour country (2)
// 		const [neighbour] = data.borders;

// 		if (!neighbour) return;

// 		// AJAX call country 2
// 		const request2 = new XMLHttpRequest();
// 		request2.open("GET", `https://restcountries.eu/rest/v2/alpha/${neighbour}`);
// 		request2.send();

// 		request2.addEventListener("load", function () {
// 			const data2 = JSON.parse(this.responseText);
// 			console.log(data2);

// 			renderCountry(data2, "neighbour");
// 		});
// 	});
// };

// // getCountryAndNeighbour('portugal');
// getCountryAndNeighbour("usa");

// setTimeout(() => {
// 	console.log("1 second passed");
// 	setTimeout(() => {
// 		console.log("2 seconds passed");
// 		setTimeout(() => {
// 			console.log("3 second passed");
// 			setTimeout(() => {
// 				console.log("4 second passed");
// 			}, 1000);
// 		}, 1000);
// 	}, 1000);
// }, 1000);

///////////////////////////////////////
// Consuming Promises
// Chaining Promises
// Handling Rejected Promises
// Throwing Errors Manually

const request = fetch("https://restcountries.com/v3.1/name/portugal");

// Chaining Promises
const getCountryData = function (country) {
	// Country 1
	getJSON(`https://restcountries.com/v3.1/name/${country}`, "Country not found")
		.then(function (data) {
			console.log(data);
			renderCountry(data[0]);
			const capital = data[0].capital?.[0];
			if (!capital) throw new Error("No capital found!");
			// Capital
			return fetch(`https://restcountries.com/v3.1/capital/${capital}`);
		})
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			return renderCountry(data, "capital");
		})
		.catch(function (err) {
			console.error(`${err}`);
			renderError(`Something went wrong ${err.message}`);
		})
		.finally(function () {
			countriesContainer.style.opacity = 1;
		});
};

btn.addEventListener("click", function () {
	getCountryData("japan");
});

// getCountryData("japan");

///////////////////////////////////////
// The Event Loop in Practice
console.log("Test start");
setTimeout(() => console.log("0 sec timer"), 0);
Promise.resolve("Resolved promise 1").then((res) => console.log(res));

Promise.resolve("Resolved promise 2").then((res) => {
	for (let i = 0; i < 1000000000; i++) {}
	console.log(res);
});

console.log("Test end");

///////////////////////////////////////
// Building a Simple Promise
const lotteryPromise = new Promise(function (resolve, reject) {
	console.log("Lotter draw is happening 🔮");
	setTimeout(function () {
		if (Math.random() >= 0.5) {
			resolve("You WIN 💰");
		} else {
			reject(new Error("You lost your money 💩"));
		}
	}, 2000);
});

lotteryPromise
	.then((res) => console.log(res))
	.catch((err) => console.error(err));

// Promisifying setTimeout
const wait = function (seconds) {
	return new Promise(function (resolve) {
		setTimeout(resolve, seconds * 1000);
	});
};

wait(1)
	.then(() => {
		console.log("1 second passed");
		return wait(1);
	})
	.then(() => {
		console.log("2 second passed");
		return wait(1);
	})
	.then(() => {
		console.log("3 second passed");
		return wait(1);
	})
	.then(() => console.log("4 second passed"));

// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 seconds passed');
//     setTimeout(() => {
//       console.log('3 second passed');
//       setTimeout(() => {
//         console.log('4 second passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

Promise.resolve("abc").then((x) => console.log(x));
Promise.reject(new Error("Problem!")).catch((x) => console.error(x));

//////////////////////////////////////
// Consuming Promises with Async/Await
// Error Handling With try...catch

// const getPosition = function () {
// 	return new Promise(function (resolve, reject) {
// 		navigator.geolocation.getCurrentPosition(resolve, reject);
// 	});
// };

// fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(res => console.log(res))

// const whereAmI = async function () {
// 	try {
// 		// Geolocation
// 		const pos = await getPosition();
// 		const { latitude: lat, longitude: lng } = pos.coords;

// 		// Reverse geocoding
// 		const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
// 		if (!resGeo.ok) throw new Error("Problem getting location data");

// 		const dataGeo = await resGeo.json();
// 		console.log(dataGeo);

// 		// Country data
// 		const res = await fetch(
// 			`https://restcountries.eu/rest/v2/name/${dataGeo.country}`
// 		);

// 		// BUG in video:
// 		// if (!resGeo.ok) throw new Error('Problem getting country');

// 		// FIX:
// 		if (!res.ok) throw new Error("Problem getting country");

// 		const data = await res.json();
// 		console.log(data);
// 		renderCountry(data[0]);
// 	} catch (err) {
// 		console.error(`${err} 💥`);
// 		renderError(`💥 ${err.message}`);
// 	}
// };
whereAmI();
whereAmI();
whereAmI();
console.log("FIRST");

// try {
//   let y = 1;
//   const x = 2;
//   y = 3;
// } catch (err) {
//   alert(err.message);
// }

///////////////////////////////////////
// Returning Values from Async Functions
const getPosition = function () {
	return new Promise(function (resolve, reject) {
		navigator.geolocation.getCurrentPosition(resolve, reject);
	});
};

const whereAmI = async function () {
	try {
		// Geolocation
		const pos = await getPosition();
		const { latitude: lat, longitude: lng } = pos.coords;

		// Reverse geocoding
		const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
		if (!resGeo.ok) throw new Error("Problem getting location data");
		const dataGeo = await resGeo.json();

		// Country data
		const res = await fetch(
			`https://restcountries.eu/rest/v2/name/${dataGeo.country}`
		);
		if (!resGeo.ok) throw new Error("Problem getting country");
		const data = await res.json();
		renderCountry(data[0]);

		return `You are in ${dataGeo.city}, ${dataGeo.country}`;
	} catch (err) {
		console.error(`${err} 💥`);
		renderError(`💥 ${err.message}`);

		// Reject promise returned from async function
		throw err;
	}
};

console.log("1: Will get location");
// const city = whereAmI();
// console.log(city);

// whereAmI()
//   .then(city => console.log(`2: ${city}`))
//   .catch(err => console.error(`2: ${err.message} 💥`))
//   .finally(() => console.log('3: Finished getting location'));

(async function () {
	try {
		const city = await whereAmI();
		console.log(`2: ${city}`);
	} catch (err) {
		console.error(`2: ${err.message} 💥`);
	}
	console.log("3: Finished getting location");
})();

///////////////////////////////////////
// Running Promises in Parallel
const get3Countries = async function (c1, c2, c3) {
	try {
		// const [data1] = await getJSON(
		//   `https://restcountries.eu/rest/v2/name/${c1}`
		// );
		// const [data2] = await getJSON(
		//   `https://restcountries.eu/rest/v2/name/${c2}`
		// );
		// const [data3] = await getJSON(
		//   `https://restcountries.eu/rest/v2/name/${c3}`
		// );
		// console.log([data1.capital, data2.capital, data3.capital]);

		const data = await Promise.all([
			getJSON(`https://restcountries.eu/rest/v2/name/${c1}`),
			getJSON(`https://restcountries.eu/rest/v2/name/${c2}`),
			getJSON(`https://restcountries.eu/rest/v2/name/${c3}`),
		]);
		console.log(data.map((d) => d[0].capital));
	} catch (err) {
		console.error(err);
	}
};
get3Countries("portugal", "canada", "tanzania");

///////////////////////////////////////
// Other Promise Combinators: race, allSettled and any
// Promise.race
(async function () {
	const res = await Promise.race([
		getJSON(`https://restcountries.eu/rest/v2/name/italy`),
		getJSON(`https://restcountries.eu/rest/v2/name/egypt`),
		getJSON(`https://restcountries.eu/rest/v2/name/mexico`),
	]);
	console.log(res[0]);
})();

const timeout = function (sec) {
	return new Promise(function (_, reject) {
		setTimeout(function () {
			reject(new Error("Request took too long!"));
		}, sec * 1000);
	});
};

Promise.race([
	getJSON(`https://restcountries.eu/rest/v2/name/tanzania`),
	timeout(5),
])
	.then((res) => console.log(res[0]))
	.catch((err) => console.error(err));

// Promise.allSettled
Promise.allSettled([
	Promise.resolve("Success"),
	Promise.reject("ERROR"),
	Promise.resolve("Another success"),
]).then((res) => console.log(res));

Promise.all([
	Promise.resolve("Success"),
	Promise.reject("ERROR"),
	Promise.resolve("Another success"),
])
	.then((res) => console.log(res))
	.catch((err) => console.error(err));

// Promise.any [ES2021]
Promise.any([
	Promise.resolve("Success"),
	Promise.reject("ERROR"),
	Promise.resolve("Another success"),
])
	.then((res) => console.log(res))
	.catch((err) => console.error(err));
