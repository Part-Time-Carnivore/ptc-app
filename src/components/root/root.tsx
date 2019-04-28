import { Component } from "@stencil/core";

@Component({
  tag: "ptc-root",
  styleUrl: "root.css",
  shadow: true
})
export class AppRoot {
  render() {
    return (
      <div>
        <header>
          <h1>Stencil App Starter</h1>
        </header>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="ptc-home" exact={true} />
              <stencil-route url="/profile/:name" component="ptc-profile" />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
