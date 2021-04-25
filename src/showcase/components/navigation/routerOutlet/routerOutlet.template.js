import { html } from "lit-element";

export function template() {
    return html`
      <welcome-page route="welcome"></welcome-page>
      <whatsnew-page route="whatsnew"></whatsnew-page>
      <imprint-page route="imprint"></imprint-page>
      <card-page route="card"></card-page>
      <not-found-page route="not-found"></not-found-page>
    `
}