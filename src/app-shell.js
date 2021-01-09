import { TemplateRender } from "./template-render.js";
import { sharedStyle } from "./sharedStyle.js";
import "./profile-card-animator-register.js";
import "./profile-card-register.js";
import "./profile-dialog-register.js";

export class AppShell extends TemplateRender {
  constructor() {
    super();

    this.noShadow = true;
    this.people = [];
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("openDialog", (e) =>
      this.querySelector("profile-dialog").open(e.detail)
    );
    this.getPeople();
  }

  async getPeople() {
    this.setPeople(
      await fetch("https://randomuser.me/api?results=50")
        .then((res) => res.json())
        .then((res) => res.results)
    );
  }

  setPeople(people) {
    this.people = people;
    this.render();
  }

  get template() {
    return `
        <style>
            :root {
                --primary: #2196f3;
            }
            app-shell {
                position: fixed;
                ${sharedStyle.trbl}
                overflow-y: overlay;
            }
        </style>
        <profile-dialog></profile-dialog>
        <profile-card-animator>
            ${
              this.people
                ? this.people
                    .map(
                      (person) =>
                        `<profile-card profile-data="${super.encodeAttributeObject(
                          person
                        )}"></profile-card>`
                    )
                    .join("")
                : ""
            }
        </profile-card-animator>
        `;
  }
}
