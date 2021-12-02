import { LitElement } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { aeEvent } from "../../functionalities/directives/event.directive";
import { styles } from "./theme-switcher.styles";
import { template } from "./theme-switcher.template";

@customElement('ae-theme-switcher')
export class AeThemeSwitcher extends LitElement {
    /* Properties */
    @property()
    target: any = 'body';

    @property({type: Boolean, attribute: 'debug-mode'})
    debugMode: boolean = false;

    /* Queries */
    @query('slot[name=theme-icon-light]')
    iconLight: HTMLElement;
    @query('slot[name=theme-icon-dark]')
    iconDark: HTMLElement;

    /* Methods */
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
    themeCheck() {
        if (localStorage.getItem("theme") == "dark") {
            this.themeLightActive();   
        } else {
            this.themeDarkActive()
        } 
    }

    /* First updated - LitElement */
    firstUpdated() {
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

    /* Styles - LitElement */
    static styles = [styles];

    /* Render template */
    protected render() {
        return template;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'ae-theme-switcher': AeThemeSwitcher
    }
}
