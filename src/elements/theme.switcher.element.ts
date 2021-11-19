import { LitElement, html, css } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { aeEvent } from "../functionalities/directives/event.directive";

const styles = css`
    :host {
        display: block;
        cursor: pointer;
        width:32px;
    }

    slot {
        display: block;
    }

    slot[name=theme-icon-dark] #fill {
        fill: var(--fill-icon-dark, var(--color-text-primary, #b0b3b8));
    }
    slot[name=theme-icon-light] #fill {
        fill: var(--fill-icon-light, var(--color-accent-primary, #ee8735));
    }
    @media (prefers-color-scheme: dark) {
        slot[name=theme-icon-dark] {display: block;}
        slot[name=theme-icon-light] {display: none;}
    }
    @media (prefers-color-scheme: light) {
        slot[name=theme-icon-dark] {display: none;}
        slot[name=theme-icon-light] {display: block;}
    }
`;
const template = html`
    <slot name="theme-icon-light">
    <svg
        width="32px"
        height="32px"
        viewBox="0 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
    >
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="fill">
            <path
            d="M22.0066312,18 C22.0214714,17.835319 22.0290527,17.6685448 22.0290527,17.5 C22.0290527,14.4624337 19.566619,12 16.5290527,12 C13.4914865,12 11.0290527,14.4624337 11.0290527,17.5 C11.0290527,17.6685448 11.036634,17.835319 11.0514742,18 L12.0565171,18 C12.0383694,17.8358331 12.0290527,17.6690045 12.0290527,17.5 C12.0290527,15.0147185 14.0437712,13 16.5290527,13 C19.0143342,13 21.0290527,15.0147185 21.0290527,17.5 C21.0290527,17.6690045 21.0197361,17.8358331 21.0015883,18 L22.0066312,18 L22.0066312,18 L22.0066312,18 Z M16.5290527,8 C16.2529104,8 16.0290527,8.2157526 16.0290527,8.49538898 L16.0290527,10.504611 C16.0290527,10.7782068 16.2609863,11 16.5290527,11 C16.8051951,11 17.0290527,10.7842474 17.0290527,10.504611 L17.0290527,8.49538898 C17.0290527,8.2217932 16.7971191,8 16.5290527,8 L16.5290527,8 L16.5290527,8 Z M23.2671105,10.7909949 C23.0718484,10.5957328 22.760997,10.5900017 22.5632642,10.7877344 L21.1425297,12.208469 C20.9490683,12.4019304 20.9562386,12.7227637 21.1457902,12.9123153 C21.3410523,13.1075774 21.6519037,13.1133085 21.8496365,12.9155758 L23.270371,11.4948412 C23.4638325,11.3013798 23.4566621,10.9805465 23.2671105,10.7909949 L23.2671105,10.7909949 L23.2671105,10.7909949 Z M26.0581055,17.5290527 C26.0581055,17.2529104 25.8423529,17.0290527 25.5627165,17.0290527 L23.5534945,17.0290527 C23.2798987,17.0290527 23.0581055,17.2609863 23.0581055,17.5290527 C23.0581055,17.8051951 23.2738581,18.0290527 23.5534945,18.0290527 L25.5627165,18.0290527 C25.8363123,18.0290527 26.0581055,17.7971191 26.0581055,17.5290527 L26.0581055,17.5290527 L26.0581055,17.5290527 Z M7,17.5290527 C7,17.8051951 7.2157526,18.0290527 7.49538898,18.0290527 L9.50461102,18.0290527 C9.7782068,18.0290527 10,17.7971191 10,17.5290527 C10,17.2529104 9.7842474,17.0290527 9.50461102,17.0290527 L7.49538898,17.0290527 C7.2217932,17.0290527 7,17.2609863 7,17.5290527 L7,17.5290527 L7,17.5290527 Z M9.79099493,10.7909949 C9.59573278,10.9862571 9.59000166,11.2971084 9.78773445,11.4948412 L11.208469,12.9155758 C11.4019304,13.1090372 11.7227637,13.1018668 11.9123153,12.9123153 C12.1075774,12.7170531 12.1133085,12.4062018 11.9155758,12.208469 L10.4948412,10.7877344 C10.3013798,10.594273 9.9805465,10.6014434 9.79099493,10.7909949 L9.79099493,10.7909949 L9.79099493,10.7909949 Z M7.53725684,21 C7.25658346,21 7.02905273,20.7680664 7.02905273,20.5 C7.02905273,20.2238576 7.25566788,20 7.53725684,20 L13.6123861,20 L14.7790527,21 L16.5290527,22.5 L18.2790527,21 L19.4457194,20 L25.5208486,20 C25.801522,20 26.0290527,20.2319336 26.0290527,20.5 C26.0290527,20.7761424 25.8024376,21 25.5208486,21 L20.0290527,21 L16.5290527,24 L13.0290527,21 L7.53725684,21 L7.53725684,21 Z"
            />
        </g>
        </g>
    </svg>
    </slot>
    <slot name="theme-icon-dark">
    <svg
        width="32px"
        height="32px"
        viewBox="0 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
    >
        <g
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
        >
        <g id="fill">
            <path
            d="M21.3364888,14.8310925 C20.7394286,17.222796 18.5766283,18.9946037 16,18.9946037 C12.9624337,18.9946037 10.5,16.5321699 10.5,13.4946037 C10.5,10.9179753 12.2718077,8.75517509 14.6635112,8.15811484 C15.0148964,8.07039573 15.379662,8.01647312 15.7541551,8 C15.589541,8.46764261 15.5,8.97066642 15.5,9.49460366 C15.5,11.9798852 17.5147185,13.9946037 20,13.9946037 C20.5239372,13.9946037 21.0269611,13.9050627 21.4946037,13.7404486 C21.4781305,14.1149417 21.4242079,14.4797073 21.3364888,14.8310925 L21.3364888,14.8310925 Z M11.5,13.4946037 C11.5,11.5332594 12.7547894,9.86498709 14.5053963,9.24875875 C14.5018113,9.33025889 14.5,9.41221974 14.5,9.49460366 C14.5,12.5321699 16.9624337,14.9946037 20,14.9946037 C20.0823839,14.9946037 20.1643448,14.9927923 20.2458449,14.9892073 C19.6296166,16.7398142 17.9613443,17.9946037 16,17.9946037 C13.5147185,17.9946037 11.5,15.9798852 11.5,13.4946037 L11.5,13.4946037 Z M7.5082041,22 C7.22753073,22 7,21.7680664 7,21.5 C7,21.2238576 7.22661515,21 7.5082041,21 L13.5833333,21 L14.75,22 L16.5,23.5 L18.25,22 L19.4166667,21 L25.4917959,21 C25.7724693,21 26,21.2319336 26,21.5 C26,21.7761424 25.7733849,22 25.4917959,22 L20,22 L16.5,25 L13,22 L7.5082041,22 L7.5082041,22 Z"
            />
        </g>
        </g>
    </svg>
    </slot>
`;

@customElement('ae-theme-switcher')
export class AeThemeSwitcher extends LitElement {
    /* Properties */
    @property()
    target: any;

    @property({type: Boolean, attribute: 'debug-mode'})
    debugMode: boolean = false;

    /* Queries */
    @query('slot[name=theme-icon-light]')
    iconLight: HTMLElement;
    @query('slot[name=theme-icon-dark]')
    iconDark: HTMLElement;

    /* Styles - LitElement */
    static styles = [styles];

    /* Render template */
    protected render() {
        return template;
    }

    themeLightActive() {
        let el = document.querySelector(this.target);
        this.iconLight.style.display = 'none';
        this.iconDark.style.display = 'block';
        el.setAttribute('theme', 'light');
        localStorage.setItem("theme", 'light');   
        aeEvent(this, 'theme-switcher', '*', 'theme-changed', {
            theme: 'light'
        }, this.debugMode)
    }
    themeDarkActive() {
        let el = document.querySelector(this.target);
        this.iconLight.style.display = 'block';
        this.iconDark.style.display = 'none';
        el.setAttribute('theme', 'dark');
        localStorage.setItem("theme", 'dark');    
        aeEvent(this, 'theme-switcher', '*', 'theme-changed', {
            theme: 'dark'
        }, this.debugMode)  
    }

    /* First updated - LitElement */
    firstUpdated() {
        const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

        this.addEventListener('click', () => {
            if (localStorage.getItem("theme") == "dark") {
                this.themeLightActive();   
            } else {
                this.themeDarkActive()
            } 
        });
        
        if(localStorage.getItem("theme") != null) {
            if (localStorage.getItem("theme") == "dark") {
                this.themeDarkActive();
    
            } else {
                this.themeLightActive()
            }           
        }
        if(localStorage.getItem("theme") == null) {
            if (prefersDarkScheme.matches) {
                this.themeDarkActive();
            } else {
                this.themeLightActive();    
            }
        }
        
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'ae-theme-switcher': AeThemeSwitcher
    }
}
