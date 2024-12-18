// tweakpane.js
import { Pane } from "https://cdn.jsdelivr.net/npm/tweakpane@4.0.5/dist/tweakpane.min.js";
import { state, resetState } from "./state.js";

// Create a preset object based on the current state
const params = {
	count: state.count,
	color: state.color,
};

// Initialize Tweakpane
const pane = new Pane();

// Add 'count' input
pane
	.addBinding(params, "count", {
		min: 0,
		max: 100,
		step: 1,
	})
	.on("change", (ev) => {
		state.count = ev.value; // Update state when Tweakpane changes
	});

// Add 'color' input
pane.addBinding(params, "color").on("change", (ev) => {
	state.color = ev.value;
});

const resetButton = pane.addButton({ title: "Reset" });
resetButton.on("click", () => {
	resetState();
});

// Update Tweakpane inputs when state changes elsewhere
window.addEventListener("stateChange", (event) => {
	const property = Object.keys(event.detail)[0];
	const value = event.detail[property];

	params[property] = value; // Update params
	pane.refresh(); // Refresh Tweakpane to reflect new values
});
