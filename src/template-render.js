export class TemplateRender extends HTMLElement {
  connectedCallback() {
    // eslint-disable-next-line wc/attach-shadow-constructor
    if (!this.noShadow) this.attachShadow({ mode: "open" });
    this.render();
  }

  render(template) {
    if (this.noShadow) {
      this.innerHTML = template || this.template;
    } else {
      this.shadowRoot.innerHTML = template || this.template;
    }
  }

  // eslint-disable-next-line class-methods-use-this
  encodeAttributeObject(value) {
    return encodeURIComponent(JSON.stringify(value));
  }

  // eslint-disable-next-line class-methods-use-this
  decodeAttributeObject(value) {
    return JSON.parse(decodeURIComponent(value));
  }
}
