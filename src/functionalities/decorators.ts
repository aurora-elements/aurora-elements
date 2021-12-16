// @auroraElement is an decorator to register an element only one time
const validateSelector = (element: string) => {
    if (element.indexOf('-') <= 0) {
        throw new Error('You need at least 1 dash in the custom element name!');
    }
};

export const auroraElement = (element:string) => (cls:any) => {  
    validateSelector(element);

    if (!window.customElements.get(element)) {
        window.customElements.define(element, cls);
    }
}

