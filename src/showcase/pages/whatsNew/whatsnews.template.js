import {html} from 'lit-element';

export function template(data) {
  return html`
    <aurora-headline-block class="space-bottom-m40" headline="What's new">
      This chronological list shows all of the components that have been added
      or updated in the aurora elements library.
    </aurora-headline-block>

    <aurora-data-table
      column-labels='["Date","Component","Description"]'
      rows="/dist/showcase/pages/whatsnew/whatsnew.json">
    </aurora-data-table>
  `;
}