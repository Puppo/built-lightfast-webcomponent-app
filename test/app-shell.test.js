import { fixture, expect } from "@open-wc/testing";

import { people } from "./_mock.js";
import "../src/app-shell-register.js";

describe("<app-shell>", () => {
  it("has an empty default prop", async () => {
    const el = await fixture("<app-shell></app-shell>");
    expect(el.people).to.deep.equal([]);
  });

  it("should fetch data and show all", async () => {
    const el = await fixture("<app-shell></app-shell>");
    el.setPeople(people);
    expect(el.people).to.deep.equal(people);
    expect(el).dom.to.equal(`
    <app-shell>
      <profile-dialog>
      </profile-dialog>
      <profile-card-animator>
        <profile-card>
        </profile-card>
        <profile-card>
        </profile-card>
        <profile-card>
        </profile-card>
        <profile-card>
        </profile-card>
        <profile-card>
        </profile-card>
      </profile-card-animator>
    </app-shell>`);
  });

  it("should be open the dialog", async () => {
    const el = await fixture("<app-shell></app-shell>");
    el.setPeople(people);
    el.querySelector("profile-card").click();
    expect(el.querySelector("profile-dialog").hasAttribute("opened")).to.equal(
      true
    );
  });
});
