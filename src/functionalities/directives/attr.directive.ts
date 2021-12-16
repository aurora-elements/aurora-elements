import { AttrConfig } from "../../interfaces/attr.interface";

export function attr(attr: AttrConfig):any {
    if(attr.action === 'set' && attr.value == undefined) {
        attr.value = '';
    }
    switch (attr.action) {
        case 'set': 
            return attr.target.setAttribute(attr.key, attr. value);
        case 'remove':
            return attr.target.removeAttribute(attr.key);
        case 'get': 
            return attr.target.getAttribute(attr.key);
        default: 
            return console.log('attribute function error')
    }
}