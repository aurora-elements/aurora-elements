import { LitElement } from "lit";
import { property, query } from "lit/decorators.js";
import { aeEvent, attr } from "../../functionalities/directive";
import { styles } from "./theme-switcher.styles";
import { template } from "./theme-switcher.template";
import { auroraCustomElement } from "../../functionalities/decorators";
import { AuroraElement } from "../../functionalities/mixins";

function themeAttr(t:any, action:string, theme:string) {
    attr({
        target: t,
        action: action,
        key: 'theme',
        value: theme
    });
}

function themeSwitcherEvent(t:any, theme:string) {
    return aeEvent({
        dispatchElement: t, 
        trigger: 'theme-switcher', 
        target: '*', 
        activity: 'theme-changed', 
        eventDetails: {
            theme: theme
        }, 
        debug: t.debugMode
    })
}

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
    @query('slot[name=ae-theme-switcher--icon-light]')
    iconLight:HTMLElement;

    @query('slot[name=ae-theme-switcher--icon-dark]')
    iconDark:HTMLElement;

    /* Methods */
    private themeLightActive() {
        let el = document.querySelector(this.target);
        this.iconLight.style.display = 'none';
        this.iconDark.style.display = 'block';
        themeAttr(el, 'set', 'light');
        localStorage.setItem("theme", 'light');   
        themeSwitcherEvent(this, 'light');
    }
    private themeDarkActive() {
        let el = document.querySelector(this.target);
        this.iconLight.style.display = 'block';
        this.iconDark.style.display = 'none';
        themeAttr(el, 'set', 'dark');
        localStorage.setItem("theme", 'dark');    
        themeSwitcherEvent(this, 'dark'); 
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
