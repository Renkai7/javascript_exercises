// AND Short-Circuit (&&)
const showAdminPanel = () => {
	console.log("Show admin panel");
};

let isLoggedIn = true;
let hasPrivileges = true;

isLoggedIn && hasPrivileges && showAdminPanel();

// OR Short-Circuit (||)
const getDefaultUsername = () => {
	username = "guest";
	return username;
};

let username = "";

username || getDefaultUsername();
console.log(username);

// Combining AND and OR
let isAuthenticated = true;
let hasError = false;
let isAdmin = false;

if ((isAuthenticated && !hasError) || isAdmin) {
	console.log("Access granted!");
} else {
	console.log("Access...DENIED!");
}

// Nested Short-Circuiting
let a = true;
let b = false;
let c = true;

const performAction = () => {
	console.log("Perform action");
};

if (a || b) {
	c && performAction();
}

// Practical Usage in Event Handling
const isUserLoggedIn = () => {
	return true;
};

const handleButtonClick = () => {
	console.log("Button clicked!");
};

isUserLoggedIn() && handleButtonClick();
