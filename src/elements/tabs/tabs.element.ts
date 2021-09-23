import {html, LitElement } from 'lit';
import { customElement, property, query, queryAll } from "lit/decorators.js";
import { aeEvent } from '../../functionalities/directives/event.directive';
import { styles } from './tabs.styles.element';
import { masterTemplate } from './tabs.template.element';

@customElement('ae-tabs')
export class Tabs extends LitElement {
    @property({type: Array}) 
    items:Array<any> = [];

    @property({type: Boolean}) 
    initialized = false;

    @property({type: Boolean, attribute: 'mode-debug'}) 
    modeDebug = false;

/* Queries */
    @query('slot') 
    slotEl?: any;

    @queryAll('nav a')
    navItems: NodeList;

/* Methods */  
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

        aeEvent(this, 'tabs', 'tab', 'change', {id: id}, this.modeDebug)
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
    firstUpdated() {
        this.items[0].setAttribute('active', '');

        this.items.forEach((item, index:number) => { item.id = 'ae-tab-' + index });

        let items = []
        this.items.forEach(item => { 
            items.push({
                id: item.id,
                name: item.name
            }) 
        });

        document.addEventListener('ae-tabs:tab|change', (e:CustomEvent) => {
            this.items.forEach(item => { 
               if(item.id === e.detail.id) {
                   item.setAttribute('active', '');
               }else {
                   item.removeAttribute('active');
               }
            });           
        });

        console.log('items: ', items)

    }

/* Template */
    render() { return html`${masterTemplate(this)}`; }

/* CSS */
    static get styles() { return [styles]; }

}

/* Declaration */
declare global {
    interface HTMLElementTagNameMap {
        'ae-tabs': Tabs;
    }
}