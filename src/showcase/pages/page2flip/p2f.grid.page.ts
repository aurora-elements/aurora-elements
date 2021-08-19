
import "../../components/headlineBlock.component";
import "../../../modules/p2f/grid/p2f.grid.module";
import "../../../elements/card.element";
import "../../../elements/loader.element";
import {LitElement, html, css} from 'lit';
const styles = css`
  ae-p2f-grid {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    min-height: 100vh;
    z-index:10;
  }
`;
class P2fGridPage extends LitElement {

  static get styles() {
    return [styles];
  }

  /* Render template */
  render() {
    return html`
      <ae-p2f-grid
        url="https://page2flip-staging.customer.space.one"
        spoql-query="at 'thenewp2f' select item from 'p2fDocumentItem' where %7Bitems publishedstate eq 'PUBLISHED'%7D orderby %7Bcreated descending%7D limit 4"
        space-key="thenewp2f">
      </ae-p2f-grid>
      <ae-confirm-dialog></ae-confirm-dialog>
  `;
  }
}
customElements.define('p2f-grid-page', P2fGridPage);
