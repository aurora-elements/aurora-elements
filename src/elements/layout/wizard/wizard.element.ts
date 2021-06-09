import { LitElement, html, css } from 'lit';
import { customElement, property, query, queryAssignedNodes } from 'lit/decorators.js';

import './tab.wizard.element';

const styles = css`
    :host {
    display: block;
    contain: content;
    }
    #steps {
    display: grid;
    grid-auto-flow: column;
    text-align: center;
    padding: 20px;
    }
    .step {
    position: relative;
    --step-color: #c1c1c1;
    --step-color--active: blue;
    }
    .step[active] svg,
    .step[active] span {
    color: var(--step-color--active);
    }
    .step:before {
    content: '';
    position: absolute;
    height: 2px;
    background: var(--step-color);
    width: 100%;
    top: 50%;
    margin-top: -2px;
    }
    .step:last-of-type:before {
    display: none;
    }
    .step svg {
    background: #fff;
    position: relative;
    z-index: 10;
    width: 24px;
    color: var(--step-color);
    }
    .step span {
    background: #fff;
    position: absolute;
    z-index: 10;
    left: 50%;
    top: 25px;
    color: var(--step-color);
    transform: translateX(-50%);
    }
`;

@customElement('ae-wizard')
export class Wizard extends LitElement {
    /* Properties */
    @property({ attribute: false })
    steps: Array<string> = [];

    @property({ attribute: false })
    stepActive?: string;

    @property({ attribute: false })
    private stepNext?: string;

    /* Queries */
    @query('#button')
    nextStepBtn?: HTMLElement;

    @queryAssignedNodes(
        undefined,
        true,
        'ae-wizard-tab'
    )
    private tabs?: NodeListOf<HTMLElement>;

    /* Template parts */
    protected stepsTemplate() {
        return html`
      <div id="steps">
        ${this.steps.map(
            (step, index) =>
                html`
              <div 
                class="step"
                ?active=${index === 0} 
                target="step-${index + 1}">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-circle"
                  style="width: 24px;"
                >
                  <circle cx="12" cy="12" r="10" />
                </svg>
                <span>${step}</span>
              </div>            `
        )}
      </div>
    `;
    }

    /* Template */
    protected render() {
        return html`
      ${this.stepsTemplate()}
      <section id="container">
        <slot></slot>
        <footer>
          <slot name="footer">
             <div id="button" @click=${this.nextStep}>Next step</div>
          </slot>
        </footer>
      </section>
    `;
    }

    /* Methods */
    // eventuell eine komponente wizard btn die einen event feuert mit der nächsten tab id oder so
    nextStep = () => {
        console.log('stepActive', this.stepActive)
        console.log('stepNext', this.stepNext)
    }

    private initTabs(): void {
        let tabsArray = Array.from(this.tabs!);
        let tabNamesArray: Array<string> = [];

        this.tabs!.forEach((tab: any, index) => {
            let id: number = index + 1;

            tab.setAttribute('id', 'step-' + id)
            if (tab.id === 'step-1') {
                let nextId: number = index + 2;
                let nextStep: string = 'step-' + nextId;
                let nextStepEvent: CustomEvent =
                    new CustomEvent('wizard-next-step-event', {
                        detail: {
                            stepActive: tab.id,
                            stepNext: nextStep
                        },
                        bubbles: true,
                        composed: true
                    });
                this.dispatchEvent(nextStepEvent);

                tab.setAttribute('active', '');
            }
        });

        tabsArray.forEach((item: any) => {
            let tabName: string = item.getAttribute('header');

            tabNamesArray.push(tabName);
        });

        this.steps = tabNamesArray;
    }

    protected firstUpdated() {
        this.initTabs();

        console.log('active step first updated: ', this.stepActive)
    }

    connectedCallback() {
        super.connectedCallback();

        document.addEventListener('wizard-next-step-event', ((event: CustomEvent) => {
            let stepActive: string = event.detail.stepActive;
            let stepNext: string = event.detail.stepNext;

            this.stepActive = stepActive;
            this.stepNext = stepNext;
            console.log('active step inside: ', this.stepActive)
        }) as EventListener);

        console.log('active step outside: ', this.stepActive)
    }

    disconnectedCallback() {
        document.addEventListener('wizard-next-step-event', () => {
            console.log('event');
        });

        super.disconnectedCallback();
    }

    /* Styling */
    static styles = styles;
}

declare global {
    interface HTMLElementTagNameMap {
        'ae-wizard': Wizard;
    }
}


