
import "../../../elements/embedded.webview.element";
import "../../../elements/dashboard/number.dashlet.element";
import {LitElement, html, css} from 'lit';
const styles = css`
  :host {padding-top:80px;}
`;
class DashletsPage extends LitElement {

  static get styles() {
    return [styles];
  }

  /* Render template */
  render() {
    return html`

      <ae-number-dashlet number-value="32" label="Dokumente"></ae-number-dashlet>

      <embedded-webview src="https://space.one/"></embedded-webview>

  `;
  }
}
customElements.define('dashlets-page', DashletsPage);
