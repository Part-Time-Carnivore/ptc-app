import { PTCProfile } from "./profile";

describe("ptc-profile", () => {
  it("builds", () => {
    expect(new PTCProfile()).toBeTruthy();
  });

  describe("normalization", () => {
    it("returns a blank string if the name is undefined", () => {
      const component = new PTCProfile();
      expect(component.normalize(undefined)).toEqual("");
    });

    it("returns a blank string if the name is null", () => {
      const component = new PTCProfile();
      expect(component.normalize(null)).toEqual("");
    });

    it("capitalizes the first letter", () => {
      const component = new PTCProfile();
      expect(component.normalize("quincy")).toEqual("Quincy");
    });

    it("lower-cases the following letters", () => {
      const component = new PTCProfile();
      expect(component.normalize("JOSEPH")).toEqual("Joseph");
    });

    it("handles single letter names", () => {
      const component = new PTCProfile();
      expect(component.normalize("q")).toEqual("Q");
    });
  });
});
