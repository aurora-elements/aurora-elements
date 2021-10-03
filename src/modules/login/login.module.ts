import { html, LitElement } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { aeEvent } from "../../functionalities/directives/event.directive";
import { styles } from "./login.style";
import { masterTemplate } from "./login.template";

@customElement('ae-login')
export class Login extends LitElement {
    @property()
    targetUrl:string;

    @property({type: Boolean, attribute: 'debug-mode'})
    debugMode:boolean = true;

    @property({type: Boolean, attribute: false})
    rememberMe: boolean = false;
    
    @query('#username')
    username: HTMLInputElement;

    @query('#password')
    password: HTMLInputElement;

    @query('#iconPassword')
    iconPassword: HTMLElement;

    @query('#iconText')
    iconText: HTMLElement;

    @query('#remember')
    remember: HTMLInputElement;
    
    loginHandler() {
      sessionStorage.setItem('authenticated', 'true');

      if(this.targetUrl) {
        window.location.replace(window.location.origin + this.targetUrl);
      } 
      aeEvent(this, 'login', '*', 'authenticated', {}, this.debugMode) 
    }


    togglePasswordVisibility() {
      let type = this.password.type;

      if(type === 'password') {
        this.password.type = 'text';
        this.iconText.style.display = 'block';
        this.iconPassword.style.display = 'none';

      } else {
        this.password.type = 'password';
        this.iconText.style.display = 'none';
        this.iconPassword.style.display = 'block';
      }
    }

    submit(e:Event) {
      let user = this.username.value;
      let pass = this.password.value;

      e.preventDefault();

      switch (true) {
        case (user === 'lis.kramer' && pass === 'test1234') :
          this.loginHandler();
           break;
        case (user === 'marcus.kramer' && pass === 'test1234') :
          this.loginHandler();
          break;
        case (user === 'besucher' && pass === 'besucher1234') :
          this.loginHandler();
           break;
        default:
           alert('Logindaten nicht korrekt');
     }

      return false; 
    }

    static get styles() { return [styles] }
    
    render() { return html`${masterTemplate(this)}`; }
}

declare global {
    interface HTMLElementTagNameMap {
        'ae-login': Login
    }
}