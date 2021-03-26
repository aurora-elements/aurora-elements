import { LitElement } from "lit-element";
import { template } from "./ScrollNavigationTemplate.js";
import { styles } from './ScrollNavigationStyles.js';

class AuroraScrollNavigation extends LitElement {
    
        /* Properties - LitElement */
        static get properties() {
            return {
                scrollElements: { 
                    type: String, 
                    attribute: 'scroll-elements' 
                },
                scrollContainer: { 
                    type: String, 
                    attribute: 'scroll-container' 
                },
                stickyPos: { 
                    type: String, 
                    attribute: 'sticky-position' 
                },
                linkLabel: { 
                    type: String, 
                    attribute: 'link-label' 
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

    scrollHandler(event) {
        let element = document.querySelector("[scrollid=" + event.target.getAttribute('scroll-target') + "]");
        let activeEl = this.shadowRoot.querySelector('[is-active]');
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });  
        activeEl.removeAttribute('is-active');
        event.target.setAttribute('is-active', '');    
      }

    firstUpdated() {
        super.firstUpdated();
        
        const scrollCon = document.querySelector(this.scrollContainer);
        const stickyPos = this.stickyPos || 0;

        if(stickyPos !== 0) {
            scrollCon.onscroll = () => {
                if (scrollCon.scrollTop > stickyPos) {
                    this.setAttribute('is-sticky', '');
                } else {
                    this.removeAttribute('is-sticky');
                }
            }
        } else {
            this.setAttribute('is-sticky', '');    
        }
    }
}
customElements.define('aurora-scroll-navigation', AuroraScrollNavigation);




/*
dummy code

let nav = document.querySelector('.jump-nav');
let navItems = document.querySelectorAll('.jump-nav-item');

window.addEventListener('scroll', function(e) {
    document.body.classList.toggle('jump-nav--sticky', window.scrollY > 104);
});

function _scrollTo(selector, yOffset = 0) {
    let el = document.querySelector(selector);
    let y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({top: y, behavior: 'smooth'});
}
if(document.querySelector('.jump-nav').firstElementChild !== null) {
    for (let i = 0; i < navItems.length; i++) {
        navItems[i].addEventListener('click', (event) => {
            event.preventDefault();
            let activeEl = document.querySelector('a.jump-nav-item--active');
            let activeTarget = event.currentTarget.getAttribute('href');

            if (activeEl !== null) {
                if (activeEl === event.currentTarget) {
                    event.currentTarget.classList.remove('jump-nav-item--active');
                } else if (activeEl !== event.currentTarget) {
                    activeEl.classList.remove('jump-nav-item--active');
                    event.currentTarget.classList.add('jump-nav-item--active');
                }
            } else {
                event.currentTarget.classList.add('jump-nav-item--active');
            }

            _scrollTo(activeTarget, -95);

        });
    }
}

function onScroll(event){
    let sections = document.querySelectorAll('.jump-nav a');
    let scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

    for( let i = 0; i < sections.length; i++ ){
        let currLink = sections[i];
        let val = currLink.getAttribute('href');
        let refElement = document.querySelector(val);
        if( refElement.offsetTop <= scrollPos && ( refElement.offsetTop + refElement.offsetHeight > scrollPos )){
            document.querySelector('.jump-nav a').classList.remove('jump-nav-item--active');
            currLink.classList.add('jump-nav-item--active');
        } else {
            currLink.classList.remove('jump-nav-item--active');
        }
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            sections[i].classList.remove('jump-nav-item--active');
            document.getElementById('jump-nav').lastElementChild.classList.add('jump-nav-item--active');
        }
    }
    if(scrollPos < 200) {
        document.getElementById('jump-nav').firstElementChild.classList.add('jump-nav-item--active');
    }
}
if(document.querySelectorAll('.jump-nav a').length > 0) {
    window.document.addEventListener('scroll', onScroll);
}


*/