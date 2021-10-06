
import "../../../../apps/p2f/kiosk/p2f.kiosk.app";
import {LitElement, html, css} from 'lit';

const styles = css`
  ae-p2f-grid {
    width: 100%;
    box-sizing: border-box;
  }

`;

class P2fKioskPage extends LitElement {

  static get styles() {
    return [styles];
  }

  /* Render template */
  render() {
    return html`
      <div style="display: block;position: fixed;top: 0;left: 0;width: 100%;height: 100%;z-index: 1000000;background: #fff;overflow-y:auto;">
        <ae-p2f-kiosk 
          url="https://ae.devdock.space.one"
          key="kiosk">
        </ae-p2f-kiosk>
      </div>
  `;
  }
}
customElements.define('p2f-kiosk-page', P2fKioskPage);
