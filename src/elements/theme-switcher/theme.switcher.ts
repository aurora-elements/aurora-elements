import { LitElement } from "lit";
import { property, query } from "lit/decorators.js";
import { aeEvent } from "../../functionalities/directive";
import { styles } from "./theme-switcher.styles";
import { template } from "./theme-switcher.template";
import { auroraCustomElement } from "../../functionalities/decorators";
import { AuroraElement } from "../../functionalities/mixins";

@auroraCustomElement('ae-theme-switcher')
export class AeThemeSwitcher extends AuroraElement(LitElement, {
    styles,
    template
}) {
    /* Properties */
    @property()
    target:any = 'body';

    @property({type: Boolean, attribute: 'debug-mode'})
    debugMode:boolean = false;

    /* Queries */
    @query('slot[name=theme-icon-light]')
    iconLight:HTMLElement;

    @query('slot[name=theme-icon-dark]')
    iconDark:HTMLElement;

    /* Methods */
    private themeLightActive() {
        let el = document.querySelector(this.target);
        this.iconLight.style.display = 'none';
        this.iconDark.style.display = 'block';
        el.setAttribute('theme', 'light');
        localStorage.setItem("theme", 'light');   
        aeEvent({
            dispatchElement: this, 
            trigger: 'theme-switcher', 
            target: '*', 
            activity: 'theme-changed', 
            eventDetails: {
                theme: 'light'
            }, 
            debug: this.debugMode
        })
    }
    private themeDarkActive() {
        let el = document.querySelector(this.target);
        this.iconLight.style.display = 'block';
        this.iconDark.style.display = 'none';
        el.setAttribute('theme', 'dark');
        localStorage.setItem("theme", 'dark');    
        aeEvent({
            dispatchElement: this, 
            trigger: 'theme-switcher', 
            target: '*', 
            activity: 'theme-changed', 
            eventDetails: {
                theme: 'dark'
            }, 
            debug: this.debugMode
        })  
    }
    private themeCheck() {
        if (localStorage.getItem("theme") == "dark") {
            this.themeLightActive();   
        } else {
            this.themeDarkActive()
        } 
    }

    /* First updated - LitElement */
    protected firstUpdated(_changedProperties: Map<string | number | symbol, unknown>): void {
        const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

        this.addEventListener('click', () => {
            this.themeCheck();
        });
        this.addEventListener('ae-theme-switcher:*|theme-changed', () => {
            this.themeCheck();
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
