import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import changelog_0_0_1 from './changelog/changelog_0_0_1.json';
import changelog_0_0_2 from './changelog/changelog_0_0_2.json';
import changelog_0_0_3 from './changelog/changelog_0_0_3.json';
import changelog_0_0_5 from './changelog/changelog_0_0_5.json';
import changelog_0_0_6 from './changelog/changelog_0_0_6.json';
import changelog_0_0_7 from './changelog/changelog_0_0_7.json';

@customElement('whatsnew-page')
export class Whatsnew extends LitElement {
  /* Render template */
  render() {
    return html`
      <ae-headline-block class="space-bottom-m40" headline="What's new">
        This chronological list shows all of the components that have been added
        or updated in the aurora elements library.
      </ae-headline-block>
      
      <ae-headline-block is-subheadline part="space-bottom-m40" headline="Version 0.0.7">
      </ae-headline-block>
      <ae-data-table column-labels='["Date","Component","Description"]' rows="${changelog_0_0_7}">
      </ae-data-table>
      
      <ae-headline-block is-subheadline part="space-bottom-m40" headline="Version 0.0.6">
      </ae-headline-block>
      <ae-data-table column-labels='["Date","Component","Description"]' rows="${changelog_0_0_6}">
      </ae-data-table>
    
      <ae-headline-block is-subheadline part="space-bottom-m40" headline="Version 0.0.5">
      </ae-headline-block>
      <ae-data-table column-labels='["Date","Component","Description"]' rows="${changelog_0_0_5}">
      </ae-data-table>
      
      <ae-headline-block is-subheadline part="space-bottom-m40" headline="Version 0.0.3">
      </ae-headline-block>
      <ae-data-table column-labels='["Date","Component","Description"]' rows="${changelog_0_0_3}">
      </ae-data-table>
      
      <ae-headline-block is-subheadline part="space-bottom-m40" headline="Version 0.0.2">
      </ae-headline-block>
      <ae-data-table column-labels='["Date","Component","Description"]' rows="${changelog_0_0_2}">
      </ae-data-table>
      
      <ae-headline-block is-subheadline part="space-bottom-m40" headline="Version 0.0.1">
      </ae-headline-block>
      <ae-data-table column-labels='["Date","Component","Description"]' rows="${changelog_0_0_1}">
      </ae-data-table>
  `;
  }
}
