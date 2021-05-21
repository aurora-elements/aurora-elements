import { html } from "lit";

export function template() {
    return html`
      <welcome-page route="welcome"></welcome-page>
      <whatsnew-page route="whatsnew"></whatsnew-page>
      <imprint-page route="imprint"></imprint-page>
<<<<<<< HEAD
      <card-page route="card"></card-page>
=======
      <wizard-page route="wizard"></wizard-page>
>>>>>>> feature/switchToLit
      <not-found-page route="not-found"></not-found-page>
    `
}