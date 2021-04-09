import {html} from 'lit-element';
import changelog_0_0_0 from './changelog_0_0_0.json';

export function template(data) {
  return html`
    <ae-headline-block class="space-bottom-m40" headline="What's new">
      This chronological list shows all of the components that have been added
      or updated in the aurora elements library.
    </ae-headline-block>
    <ae-headline-block
      is-subheadline 
      part="space-bottom-m40"
      headline="Version 0.0.0">
    </ae-headline-block>
    <ae-data-table
      column-labels='["Date","Component","Description"]'
      rows="${changelog_0_0_0}">
    </ae-data-table>
  `;
}
