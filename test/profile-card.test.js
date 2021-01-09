import { html, fixture, expect } from "@open-wc/testing";

import { profileData } from "./_mock.js";
import "../src/profile-card-register.js";

describe("<profile-card>", () => {
  it("has an empty default profileData prop", async () => {
    const el = await fixture("<profile-card></profile-card>");
    expect(el.profileData).to.deep.equal({});
  });

  it("has no content without profileData", async () => {
    const el = await fixture("<profile-card></profile-card>");
    expect(el).shadowDom.to.equal("");
  });

  it("has content with data in profileData", async () => {
    const el = await fixture(
      html`<profile-card .profileData=${profileData}></profile-card>`
    );
    expect(el).shadowDom.to.equal(`
        <img src="https://randomuser.me/api/portraits/thumb/women/57.jpg">
        <h1>Alexandra Ferguson</h1>`);
  });

  it("has no attribute but has profileData", async () => {
    const el = await fixture(
      `<profile-card profile-data=${encodeURIComponent(
        JSON.stringify(profileData)
      )}></profile-card>`
    );
    expect(el.profileData).to.deep.equal(profileData);
    expect(el.getAttribute("profile-data")).to.be.null;
  });
});
