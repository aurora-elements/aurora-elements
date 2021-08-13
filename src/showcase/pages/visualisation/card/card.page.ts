
import "../../../../modules/p2f.grid.module";
import "../../../../elements/card.element";
import "../../../../elements/loader.element";
import "../../../components/headlineBlock.component";
import {LitElement, html} from 'lit';


class Card extends LitElement {

  /* Render template */
  render() {

		

    return html`
    
    <ae-headline-block class="space-bottom-m40" headline="Card">
      This chronological list shows all of the components that have been added
      or updated in the aurora elements library.
    </ae-headline-block> 
    <ae-p2f-grid 
		url="https://page2flip-staging.customer.space.one"
		space-key="thenewp2f">
	</ae-p2f-grid>
 `;
  }
}
customElements.define('card-page', Card);
