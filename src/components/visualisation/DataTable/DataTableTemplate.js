import { html } from "lit-element";
import { until } from 'lit-html/directives/until';
import { repeat } from 'lit-html/directives/repeat.js';

export function template(data) {
    return html`
        <table>
            <thead>
                ${data.columnsLabels.map((item, index) =>
                    html`<th id=${index + 1}>${item}</th>`
                )}               
            </thead>
            <tbody>
                ${until(
                    fetch(data.rows)
                    .then(res => res.json())
                    .then(items => html`                        
                        ${repeat(
                            items,
                            item => item.id,
                            ({ property, type, defaultValue, description }, index) => html`
                                <tr id=${index + 1}>
                                    <td><strong>${property}</strong></td>
                                    <td>${type}</td>
                                    <td>${defaultValue}</td>
                                    <td>${description}</td>
                                </tr>
                            `,
                         )}
                    `),
                    html`
                        <tr>
                            <td>Loading...</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    `
                )}          
            </tbody>  
        </table>   
    `;
}