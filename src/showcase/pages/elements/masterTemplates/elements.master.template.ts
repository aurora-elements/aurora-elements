
import "../../../../elements/tabs/tab/tab.element";
import "../../../../elements/tabs/tabs.element";import "../../../components/dataTable.component";
import "../../../components/codeMirror.component";
import "../../../../elements/card.element";
import "../../../components/headlineBlock.component";
import { html } from "lit";

export function elementsMasterTemplate(
    isSubheadline:boolean,
    headline:string, 
    description:string, 
    version:any,
    element:any,
    HTMLCode:any, 
    HTMLAttributes:any, 
    slots:any, 
    parts:any, 
    css:any) {
    return html`
        ${headline ? 
            html`
                <ae-headline-block 
                    headline="${headline}" 
                    ?is-subheadline="${isSubheadline}">
                    ${description}
                </ae-headline-block>
            ` : 
            html``
        }
        ${version ? 
            html`
                <small>Version ${version}</small>
            ` : 
            html``
        }
        ${element ? 
            html`
                <div class="element-preview">
                    ${element}
                </div>
            ` : 
            html``
        }
        ${HTMLCode ? 
            html`
                <ae-code-mirror language="xml">${HTMLCode}</ae-code-mirror>
            ` : 
            html``
        }
        <ae-tabs>
            ${HTMLAttributes ? 
                html`
                    <ae-tab name="ATTRIBUTES">
                        <ae-data-table rows="${HTMLAttributes}" type="html"></ae-data-table>
                    </ae-tab>
                ` : html``
            }
            ${slots ? 
                html`
                    <ae-tab name="SLOTS">
                        <ae-data-table rows="${slots}" type="slots"></ae-data-table>
                    </ae-tab>
                ` : html``
            }
            ${parts ? 
                html`
                    <ae-tab name="PARTS">
                        <ae-data-table rows="${parts}" type="parts"></ae-data-table>
                    </ae-tab>
                ` : html``
            } 
            ${css ? 
                html`
                    <ae-tab name="CSS">
                        <ae-data-table rows="${css}" type="css"></ae-data-table>
                    </ae-tab>
                ` : html``
            }                        
        </ae-tabs>
    `;
}