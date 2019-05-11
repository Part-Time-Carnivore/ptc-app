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
        <div class="header-content">
          <ptc-logo>Part-Time Carnivore</ptc-logo>
          <h2>has gone into hibernation</h2>
        </div>
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
