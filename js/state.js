// state.js
const defaultState = {
	count: 0,
	color: "#ff0000",
};

// Function to load the initial state from local storage or set defaults
function loadState() {
	const savedState = localStorage.getItem("appState");
	return savedState ? JSON.parse(savedState) : { ...defaultState };
}

// Function to reset the state to default values
export function resetState() {
	Object.assign(state, { ...defaultState });
}

// Initialize state with Proxy
export const state = new Proxy(loadState(), {
	set(target, property, value) {
		target[property] = value;

		// Save updated state to local storage
		localStorage.setItem("appState", JSON.stringify(target));

		// Dispatch a 'stateChange' event with the updated property
		window.dispatchEvent(
			new CustomEvent("stateChange", { detail: { [property]: value } })
		);
		return true;
	},
});
