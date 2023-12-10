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
