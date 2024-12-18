// counter-button.js
import { state } from "./state.js";

class CounterButton extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}

	connectedCallback() {
		this.render();
		this.shadowRoot
			.querySelector("button")
			.addEventListener("click", this.incrementCount);
	}

	disconnectedCallback() {
		this.shadowRoot
			.querySelector("button")
			.removeEventListener("click", this.incrementCount);
	}

	incrementCount = () => {
		state.count += 1;
	};

	render() {
		this.shadowRoot.innerHTML = `
      <button>Increment</button>
    `;
	}
}

customElements.define("counter-button", CounterButton);
