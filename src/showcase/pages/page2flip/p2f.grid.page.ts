
import "../../../elements/dashboard/number.dashlet.element";
import "../../components/headlineBlock.component";
import "../../../modules/p2f/grid/p2f.grid.module";
import "../../../elements/card.element";
import "../../../elements/loader.element";
import {LitElement, html, css} from 'lit';
const styles = css`
  ae-p2f-grid {
    width: 100%;
    box-sizing: border-box;
  }
`;
class P2fGridPage extends LitElement {

  static get styles() {
    return [styles];
  }

  /* Render template */
  render() {
    return html`
      <ae-headline-block headline="page2flip Grid" style="margin-bottom: 60px;">
        Das page2flip Grid...
      </ae-headline-block>
      <small style="width: 100%;display: block;padding-bottom: 40px;opacity: .5;">Version 0.0.8</small>
      <div style="background-color:var(--grey-ligthest);padding:40px;margin-bottom:40px;">
        <ae-p2f-grid
          size="2"
          base-url="https://lyreco.devdock.space.one"
          space-key="lyreco">
        </ae-p2f-grid>
      </div>
      <span style="width: 100%;display: block;padding: 0 0 10px 0;font-weight: 400;font-size: 20px;">Mit spoQL</span>
      <div style="background-color:var(--grey-ligthest);padding:40px;margin-bottom:40px;">
        <ae-p2f-grid 
          base-url="https://page2flip-staging.customer.space.one"
          spoql-query="at 'thenewp2f' select item from 'p2fDocumentItem' where %7Bitems publishedstate eq 'PUBLISHED'%7D orderby %7Bcreated descending%7D limit 3">
        </ae-p2f-grid>
      </div>
      <ae-confirm-dialog></ae-confirm-dialog>
  `;
  }
}
customElements.define('p2f-grid-page', P2fGridPage);
