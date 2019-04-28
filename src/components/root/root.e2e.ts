import { newE2EPage } from "@stencil/core/testing";

describe("ptc-root", () => {
  it("renders", async () => {
    const page = await newE2EPage({ url: "/" });

    const element = await page.find("ptc-root");
    expect(element).toHaveClass("hydrated");
  });
});
