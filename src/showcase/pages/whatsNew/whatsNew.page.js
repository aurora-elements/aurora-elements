import {LitElement} from 'lit-element';
import {template} from './whatsnews.template';

class Whatsnew extends LitElement {
  /* Render template */
  render() {
    return template(this);
  }
}
customElements.define('whatsnew-page', Whatsnew);
