import { Component } from "@stencil/core";

@Component({
  tag: "ptc-root",
  styleUrl: "root.css",
  shadow: true
})
export class PTCRoot {
  render() {
    return [
      <header>
        <ptc-logo>Part-Time Carnivore</ptc-logo>
        <h2>is hibernating</h2>
      </header>,
      <main>
        <stencil-router>
          <stencil-route-switch scrollTopOffset={0}>
            <stencil-route url="/" component="ptc-home" exact={true} />
            <stencil-route url="/profile/:name" component="ptc-profile" />
          </stencil-route-switch>
        </stencil-router>
      </main>
    ];
  }
}
