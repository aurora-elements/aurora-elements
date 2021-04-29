import { html } from "lit";

export function template() {
    return html`
      <welcome-page route="welcome"></welcome-page>
      <whatsnew-page route="whatsnew"></whatsnew-page>
      <imprint-page route="imprint"></imprint-page>
      <not-found-page route="not-found"></not-found-page>
    `
}