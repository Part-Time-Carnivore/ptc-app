import { Component } from "@stencil/core";

@Component({
  tag: "ptc-home"
})
export class PTCHome {
  render() {
    return (
      <div class="ptc-home">
        <p>Bear with us. Part-Time Carnivore will be back, better than ever.</p>

        <ptc-subscribe-form />
      </div>
    );
  }
}
