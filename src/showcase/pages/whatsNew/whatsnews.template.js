import {html} from 'lit-element';
import changelog_0_0_1 from './changelog_0_0_1.json';
import changelog_0_0_2 from './changelog_0_0_2.json';
import changelog_0_0_3 from './changelog_0_0_3.json';
import changelog_0_0_4 from './changelog_0_0_4.json';

export function template(data) {
  return html`
    <ae-headline-block class="space-bottom-m40" headline="What's new">
      This chronological list shows all of the components that have been added
      or updated in the aurora elements library.
    </ae-headline-block>

    <ae-headline-block
      is-subheadline 
      part="space-bottom-m40"
      headline="Version 0.0.5">
    </ae-headline-block>
    <ae-data-table
      column-labels='["Date","Component","Description"]'
      rows="${changelog_0_0_4}">
    </ae-data-table>

    <ae-headline-block
      is-subheadline 
      part="space-bottom-m40"
      headline="Version 0.0.3">
    </ae-headline-block>
    <ae-data-table
      column-labels='["Date","Component","Description"]'
      rows="${changelog_0_0_3}">
    </ae-data-table>

    <ae-headline-block
      is-subheadline 
      part="space-bottom-m40"
      headline="Version 0.0.2">
    </ae-headline-block>
    <ae-data-table
      column-labels='["Date","Component","Description"]'
      rows="${changelog_0_0_2}">
    </ae-data-table>

    <ae-headline-block
      is-subheadline 
      part="space-bottom-m40"
      headline="Version 0.0.1">
    </ae-headline-block>
    <ae-data-table
      column-labels='["Date","Component","Description"]'
      rows="${changelog_0_0_1}">
    </ae-data-table>
  `;
}
