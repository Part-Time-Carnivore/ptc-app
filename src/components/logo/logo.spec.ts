import { PTCLogo } from "./logo";

describe("app", () => {
  it("builds", () => {
    expect(new PTCLogo()).toBeTruthy();
  });
});
