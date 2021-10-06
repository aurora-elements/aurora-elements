import "../../../modules/login/login.module";
import { html } from "lit";
import { imageLogin } from "./images";

export function loginTemplate() {
    return html`
        <section id="loginForm">
            <div>
              ${imageLogin()}
              </div>
              <div>
                <h3>Willkommen,</h3>
                <p>auf meiner Webseite. Wenn du Zugangsdaten hast, wünsche ich dir viel Spass.</p>
                <ae-login></ae-login>
              </div>
        </section>
    `;
}