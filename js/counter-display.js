// counter-display.js
import { state } from "./state.js";

class CounterDisplay extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.render();
	}

	connectedCallback() {
		window.addEventListener("stateChange", this.handleStateChange);
	}

	disconnectedCallback() {
		window.removeEventListener("stateChange", this.handleStateChange);
	}

	handleStateChange = (event) => {
		const { count, color } = state;
		if ("count" in event.detail || "color" in event.detail) {
			this.render();
		}
	};

	render() {
		const { count, color } = state;
		this.shadowRoot.innerHTML = `
      <style>
        h1 {
          color: ${color};
        }
      </style>
      <div>
        <h1>Count: ${count}</h1>
      </div>
    `;
	}
}

customElements.define("counter-display", CounterDisplay);
