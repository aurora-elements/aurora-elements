
import "../../../../elements/tabs/tab/tab.element";
import "../../../../elements/tabs/tabs.element";
import "../../../components/dataTable.component";
import "../../../components/codeMirror.component";
import "../../../../elements/card.element";
import "../../../components/headlineBlock.component";
import { html } from "lit";
import '@justinribeiro/code-block';

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

    let copyToClipboard = function(e:Event) { 
        e.preventDefault();
        let button = e.target! as HTMLElement;
        let parent = button.firstElementChild.parentNode.parentElement.parentElement;
        navigator.clipboard.writeText(HTMLCode).then(() => {
            parent.classList.add('code-copied')
            setTimeout(() => {
                parent.classList.remove('code-copied')
            }, 2000);

        }), () => {
            console.log('Error writing to the clipboard');
        };
    }
    
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
                <div class="code-block-wrapper">
                    <a href="#" @click=${copyToClipboard}>
                        <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z" />
                        </svg>
                    </a>
                    <code-block language="markup" theme="/src/showcase/assets/prism.css">${HTMLCode}</code-block>
                </div>
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