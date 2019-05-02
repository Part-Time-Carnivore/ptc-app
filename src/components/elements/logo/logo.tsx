import { Component } from "@stencil/core";

@Component({
  tag: "ptc-logo",
  styleUrl: "logo.css",
  shadow: true
})
export class PTCLogo {
  render() {
    return [
      <h1>
        <slot />
      </h1>
    ];
  }
}
