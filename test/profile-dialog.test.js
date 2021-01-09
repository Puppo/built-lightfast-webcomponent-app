import { fixture, expect } from "@open-wc/testing";

import { profileData } from "./_mock.js";
import "../src/profile-dialog-register.js";

describe("<profile-dialog>", () => {
  it("has an empty default prop", async () => {
    const el = await fixture("<profile-dialog></profile-dialog>");
    expect(el.profileData).to.deep.equal({});
    expect(el.opened).to.equal(false);
  });

  it("should open and set opened to true", async () => {
    const el = await fixture("<profile-dialog></profile-dialog>");
    el.open();
    expect(el.hasAttribute("opened")).to.equal(true);
  });

  it("should close and set opened to false", async () => {
    const el = await fixture("<profile-dialog></profile-dialog>");
    el.open();
    expect(el.hasAttribute("opened")).to.equal(true);

    el.close();
    expect(el.hasAttribute("opened")).to.equal(false);
  });

  it("should open without content if no prop fed in", async () => {
    const el = await fixture("<profile-dialog></profile-dialog>");
    el.open();
    expect(el).shadowDom.to.equal('<dialog open=""></dialog >');
  });

  it("should open with content if prop fed in", async () => {
    const el = await fixture("<profile-dialog></profile-dialog>");
    el.open(profileData);
    expect(el).shadowDom.to.equal(`
        <dialog open="">
            <img src="https://randomuser.me/api/portraits/thumb/women/57.jpg">
            <h1>
              Alexandra Ferguson
            </h1>
            <section>
              <div>
                <img
                  class="icon"
                  src="https://www.materialui.co/materialIcons/hardware/smartphone_black_96x96.png"
                >
                <p>
                  0736-706-970
                </p>
              </div>
              <div>
                <img
                  class="icon"
                  src="https://www.materialui.co/materialIcons/communication/email_black_96x96.png"
                >
                <p>
                  016973 34686
                </p>
              </div>
            </section>
            <p>
              Proin finibus lectus vitae accumsan lacinia. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas volutpat aliquet sapien sit amet faucibus. Donec id velit sit amet felis pharetra tincidunt. Proin vitae nibh a massa commodo blandit. Sed quam lorem, molestie ac nisi in, blandit interdum tortor. Nunc interdum id quam nec vestibulum.
            </p>
        </dialog>`);
  });
});
