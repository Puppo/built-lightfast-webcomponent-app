import { TemplateRender } from "./template-render.js";
import { sharedStyle } from "./sharedStyle.js";

export class ProfileCard extends TemplateRender {
  static get observedAttributes() {
    return ["profile-data"];
  }

  constructor() {
    super();

    this.profileData = {};
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (newValue && name === "profile-data") {
      this.profileData = super.decodeAttributeObject(newValue);
      this.removeAttribute(name);

      if (Object.entries(this.profileData)) {
        this.removeAttribute("hidden");
      } else {
        this.setAttribute("hidden");
      }
    }

    this.render();
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("click", () =>
      this.dispatchEvent(
        new CustomEvent("openDialog", {
          detail: this.profileData,
          bubbles: true,
          composed: true,
        })
      )
    );
  }

  get template() {
    return `
        <style>
            :host {
                margin: 2px;
                padding: 30px;
                cursor: pointer;
                background: rgba(0, 0, 0, 0.1);
                text-align: center;
                width: calc(25% - 4px);
                box-sizing: border-box;
                opacity: 0;
            }

            :host(:not(hidden)) {
                display: block;
            }

            ${sharedStyle.card}
        </style>
        ${
          Object.entries(this.profileData).length > 0
            ? `<img src=${this.profileData.picture.thumbnail} />
          <h1>${this.profileData.name.first} ${this.profileData.name.last}</h1>`
            : ""
        }
        `;
  }
}
