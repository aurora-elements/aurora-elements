import {LitElement} from 'lit-element';
import {template} from './card.template';

class Card extends LitElement {
  /* Render template */
  render() {
    return template(this);
  }
}
customElements.define('card-page', Card);
