import { newE2EPage } from "@stencil/core/testing";

describe("ptc-logo", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent("<ptc-logo></ptc-logo>");

    const element = await page.find("ptc-logo");
    expect(element).toHaveClass("hydrated");
  });

  it("renders the title", async () => {
    const page = await newE2EPage();
    await page.setContent("<ptc-logo>Logo</ptc-logo>");

    const element = await page.find("ptc-logo");
    expect(element.textContent).toEqual("Logo");
  });
});
