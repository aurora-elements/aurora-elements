import {html, LitElement } from 'lit';
import { customElement, property, query, queryAll } from "lit/decorators.js";
import { aeEvent } from '../../functionalities/directive';
import { styles } from './tabs.styles.element';
import { masterTemplate } from './tabs.template.element';
import './tab/tab.element';

@customElement('ae-tabs')
export class Tabs extends LitElement {
    @property({type: Array}) 
    items:Array<any> = [];

    @property({type: Boolean}) 
    initialized = false;

    @property({type: Boolean, attribute: 'debug-mode'}) 
    debugMode = false;

    @property({type: Boolean, attribute: false})
    menuLayout: boolean = false;

    @property({type: Boolean})
    open: boolean = false;

/* Queries */
    @query('nav')
    nav: HTMLElement;

    @query('slot') 
    slotEl?: any;

    @queryAll('nav a')
    navItems: NodeList;

/* Methods */  
    navHandler() {
        let navWidth:number =       this.nav.offsetWidth;
        let navItemWidth:number =   0;

        this.navItems.forEach(item => {

            let el = item! as HTMLElement;

            if(el.offsetWidth != undefined) {
                navItemWidth += el.offsetWidth;
            }

        });
        
        if(navWidth <= navItemWidth) {           
            this.menuLayout = true;
        } 
    }

    getItems() {
        return this.slotEl ? this.slotEl.assignedElements() : [];
    }

    clickHandler(e:Event, id:number) {
        e.preventDefault();
        this.navItems.forEach(item => {
            let inactiveItem = item! as HTMLElement;
            inactiveItem.removeAttribute('active'); 
        });

        let target = e.target! as HTMLElement;
        target.setAttribute('active', '');

        aeEvent(this, 'tabs['+ this.id +']', 'tab', 'change', {id: id}, this.debugMode)
    }

    shouldUpdate(changedProperties:any) {
        if (!this.initialized) {
            this.items = Array.from(this.children);
            this.items.map((item:any) => item.setAttribute('tabIndex', '0'));
            this.initialized = true;
        }

        return changedProperties;
    }

/* Init */
    protected firstUpdated(_changedProperties: Map<string | number | symbol, unknown>): void {

        this.items[0].setAttribute('active', '');

        this.items.forEach((item, index:number) => { item.id = 'ae-tab-' + index });

        let tabs = []
        this.items.forEach(tab => { 
            tabs.push({
                id: tab.id,
                name: tab.name
            }) 
        });

        this.addEventListener('ae-tabs['+ this.id +']:tab|change', (e:CustomEvent) => {
            this.items.forEach(item => { 
               if(item.id === e.detail.id) {
                   item.setAttribute('active', '');
               } else {
                    item.removeAttribute('active');                                   
               }
            });           
        });

        this.navHandler();

        window.addEventListener("resize", () => setTimeout(() => this.navHandler(), 1000));
    }

/* Template */
    protected render() { return html`${masterTemplate(this)}`; }

/* CSS */
    static styles = [styles]; 

}

/* Declaration */
declare global {
    interface HTMLElementTagNameMap {
        'ae-tabs': Tabs;
    }
}