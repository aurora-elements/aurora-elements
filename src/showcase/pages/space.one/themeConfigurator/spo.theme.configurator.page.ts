
import "../../../../apps/spo/themeConfigurator/spo.theme.configurator.app";
import {LitElement, html, css} from 'lit';

const styles = css`
  ae-p2f-grid {
    width: 100%;
    box-sizing: border-box;
  }

`;

class SpoThemeConfiguratorPage extends LitElement {

  static get styles() {
    return [styles];
  }

  /* Render template */
  render() {
    return html`
      <div style="display: block;position: absolute;top: 0;left: 0;width: 100%;height: 100%;z-index: 1000000;background: #e6e9ef;overflow-y:auto;">
        <ae-spo-theme-configurator></ae-spo-theme-configurator>
      </div>
  `;
  }
}
customElements.define('spo-theme-configurator-page', SpoThemeConfiguratorPage);
