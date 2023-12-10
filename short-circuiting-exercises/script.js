// AND Short-Circuit (&&)
const showAdminPanel = () => {
	console.log("Show admin panel");
};

let isLoggedIn = true;
let hasPrivileges = true;

isLoggedIn && hasPrivileges && showAdminPanel();
