import { Component } from "@stencil/core";

@Component({
  tag: "ptc-subscribe-form",
  styleUrl: "subscribe-form.css",
  shadow: true
})
export class PTCSubscribeForm {
  render() {
    return [
      <form
        id="subForm"
        class="js-cm-form"
        action="https://www.createsend.com/t/subscribeerror?description="
        method="post"
        data-id="92D4C54F0FEC16E5ADC2B1904DE9ED1AD10031396CB9AD704E2418540894E0DA968ED51176D741D88B03D7CCC849D5F34C04DEFE0848CCE29914DC7B00258FEB"
      >
        <label htmlFor="fieldEmail">Be the first to know</label>
        <input
          id="fieldEmail"
          name="cm-vkiuy-vkiuy"
          type="email"
          class="js-cm-email-input"
          placeholder="email"
          required
        />
        <button class="js-cm-submit-button" type="submit">
          Subscribe
        </button>
      </form>
    ];
  }
}
