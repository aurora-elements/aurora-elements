import { LitElement } from "lit";
import { template } from "./themeSwitcher.template.js";
import { styles } from './themeSwitcher.styles.js';

class AeThemeSwitcher extends LitElement {
    /* Properties - LitElement */
    static get properties() {
        return {
            target:      { 
                type: String
             }
        };
    }

    /* Styles - LitElement */
    static get styles() {
        return [styles]
    }

    /* Render template */
    render() {
        return template(this)
    }

    /* Get root */
    get root() {
        return this.shadowRoot || this
    }

    /* First updated - LitElement */
    firstUpdated() {
        
        const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

        let targetEl = document.querySelector(this.target);

        let iconLight = this.root.querySelector('slot[name=theme-icon-light]');

        let iconDark = this.root.querySelector('slot[name=theme-icon-dark]');

        this.addEventListener('click', () => { 

            if(prefersDarkScheme.matches) { 
                iconLight.style.display = 'none';
                iconDark.style.display = 'block';
                targetEl.toggleAttribute('theme-light');

                if(targetEl.hasAttribute('theme-light')) {

                    localStorage.setItem("theme", 'light');   

                } else { 
                    iconLight.style.display = 'block';
                    iconDark.style.display = 'none';
                    localStorage.setItem("theme", 'dark');

                }

            } else { 

                targetEl.toggleAttribute('theme-dark');  
                
                if(targetEl.hasAttribute('theme-dark')) {

                    localStorage.setItem("theme", 'dark');    

                } else {

                    localStorage.setItem("theme", 'light');

                }
            }
                   
        });

        if (localStorage.getItem("theme") == "dark") { 
            iconLight.style.display = 'block';
            iconDark.style.display = 'none';
            targetEl.toggleAttribute('theme-dark');   

        } else if (localStorage.getItem("theme") == "light") { 
            iconLight.style.display = 'none';
            iconDark.style.display = 'block';
            targetEl.toggleAttribute('theme-light');   
        }
    }
}

customElements.define('ae-theme-switcher', AeThemeSwitcher);