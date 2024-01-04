"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
const nav = document.querySelector(".nav");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

///////////////////////////////////////
// Modal window

const openModal = function (e) {
	e.preventDefault();
	modal.classList.remove("hidden");
	overlay.classList.remove("hidden");
};

const closeModal = function () {
	modal.classList.add("hidden");
	overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
	if (e.key === "Escape" && !modal.classList.contains("hidden")) {
		closeModal();
	}
});

// Buttong scrolling
btnScrollTo.addEventListener("click", (e) => {
	const s1coords = section1.getBoundingClientRect();
	console.log(s1coords);

	console.log(e.target.getBoundingClientRect());

	console.log("Current scroll (X/Y)", window.scrollX, window.scrollY);

	// Scrolling
	// window.scrollTo(
	// 	s1coords.left + window.scrollX,
	// 	s1coords.top + window.scrollY
	// );

	// window.scrollTo({
	// 	left: s1coords.left + window.scrollX,
	// 	top: s1coords.top + window.scrollY,
	// 	behavior: "smooth",
	// });

	// Modern way of smooth scrolling
	section1.scrollIntoView({ behavior: "smooth" });
});
///////////////////////////////////////
// Page navigation

document.querySelector(".nav__links").addEventListener("click", function (e) {
	e.preventDefault();

	// Matching strategy
	if (e.target.classList.contains("nav__link")) {
		console.log("LINK");
		const id = e.target.getAttribute("href");
		document.querySelector(id).scrollIntoView({ behavior: "smooth" });
	}
});

// Tabbed component

tabsContainer.addEventListener("click", (e) => {
	const clicked = e.target.closest(".operations__tab");

	// Guard clause
	if (!clicked) return;

	// Remove active classes
	tabs.forEach((t) => t.classList.remove("operations__tab--active"));
	tabsContent.forEach((c) => c.classList.remove("operations__content--active"));

	// Activate tab
	clicked.classList.add("operations__tab--active");

	// Activate content area
	document
		.querySelector(`.operations__content--${clicked.dataset.tab}`)
		.classList.add("operations__content--active");
});

// Menu fade animation
const handleHover = function (e) {
	if (e.target.classList.contains("nav__link")) {
		const link = e.target;
		const siblings = link.closest(".nav").querySelectorAll(".nav__link");
		const logo = link.closest(".nav").querySelector("img");

		siblings.forEach((el) => {
			if (el !== link) el.style.opacity = this;
		});

		logo.style.opacity = this;
	}
};
nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));

// Stick navigation
// const intialCoords = section1.getBoundingClientRect();

// window.addEventListener("scroll", function () {
// 	console.log(window.scrollY);
// 	if(this.window.scrollY > intialCoords.top) nav.classList.add("stick");
// 	else
// });

// Stick navigation: Intersection Observer API
// const obsCallback = (entries, observer) => {
// 	entries.forEach((entry) => {
// 		console.log(entry);
// 	});
// };

// const obsOptions = {
// 	root: null,
// 	threshold: [0, 0.2],
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

const header = document.querySelector(".header");
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
	const [entry] = entries;
	console.log(entry);
	if (!entry.isIntersecting) nav.classList.add("sticky");
	else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
	root: null,
	threshold: 0,
	rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

///////////////////////////////////////
// Selecting, Creating, and Deleting Elements
// Selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

// const header = document.querySelector(".header");
const allSections = document.querySelectorAll(".section");
console.log(allSections);

document.getElementById("section--1");
const allButtons = document.getElementsByTagName("button");
console.log(allButtons);

console.log(document.getElementsByClassName("btn"));

// Creating and inserting elements
const message = document.createElement("div");
message.classList.add("cookie-message");
// message.textContent = 'We use cookied for improved functionality and analytics.';
message.innerHTML =
	'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message);
// header.append(message);
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

// Delete elements
// document
// 	.querySelector(".btn--close-cookie")
// 	.addEventListener("click", function () {
// 		// message.remove();
// 		message.parentElement.removeChild(message);
// 	});

///////////////////////////////////////
// Styles, Attributes and Classes

// Styles
message.style.backgroundColor = "#37383d";
message.style.width = "120%";

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
	Number.parseFloat(getComputedStyle(message).height) + 40 + "px";

// document.documentElement.style.setProperty("--color-primary", "orangered");

// Attributes
const logo = document.querySelector(".nav__logo");
console.log(logo.alt);

const link = document.querySelector(".nav__link--btn");
console.log(link.href);
console.log(link.getAttribute("href"));

// Data Attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add("c");
logo.classList.remove("c");
logo.classList.toggle("c");
logo.classList.contains("c"); // not includes

// Don't use - overwrites current classes
// logo.className = "jonas"

// Smooth Scrolling
// const btnScrollTo = document.querySelector(".btn--scroll-to");
// const section1 = document.querySelector("#section--1");

// btnScrollTo.addEventListener("click", (e) => {
// 	const s1coords = section1.getBoundingClientRect();
// 	console.log(s1coords);

// 	console.log(e.target.getBoundingClientRect());

// 	console.log("Current scroll (X/Y)", window.scrollX, window.scrollY);

// 	// Scrolling
// 	// window.scrollTo(
// 	// 	s1coords.left + window.scrollX,
// 	// 	s1coords.top + window.scrollY
// 	// );

// 	// window.scrollTo({
// 	// 	left: s1coords.left + window.scrollX,
// 	// 	top: s1coords.top + window.scrollY,
// 	// 	behavior: "smooth",
// 	// });

// 	// Modern way of smooth scrolling
// 	section1.scrollIntoView({ behavior: "smooth" });
// });

///////////////////////////////////////
// Types of Events and Event Handlers
const h1 = document.querySelector("h1");

// h1.onmouseenter = (e) => {
// 	alert("addEventListener: Great! You are reading the heading");
// };

///////////////////////////////////////
// Event Propagation in Practice
const randomInt = (min, max) =>
	Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
	`rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

///////////////////////////////////////
// DOM Traversing

// Going downwards: child
console.log(h1.querySelectorAll(".highlight"));
console.log(h1.childNodes);
console.log(h1.children);
// h1.firstElementChild.style.color = "white";

// Going upwards
console.log(h1.parentNode);
console.log(h1.parentElement);

// h1.closest(".header").style.background = "var(--gradient-secondary)";

// Going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
	if (el !== h1) el.style.transform = "scale(0.5)";
});
