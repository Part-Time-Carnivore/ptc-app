import { AppHome } from "./home";

describe("app", () => {
  it("builds", () => {
    expect(new AppHome()).toBeTruthy();
  });
});
