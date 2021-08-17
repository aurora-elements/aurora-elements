class EmbeddedWebview extends HTMLElement {
    connectedCallback() {
      fetch(this.getAttribute('src'))
        .then(function (response) {
            // The API call was successful!
            return response.text();
        }).then(function (html) {
            let parser = new DOMParser();
            let doc:any = parser.parseFromString(html, 'text/html'); 
            return doc
        })
        .then(doc => {
          const shadow = this.attachShadow({ mode: 'closed' });
          shadow.innerHTML = doc;
        });
    }
  }
  
  window.customElements.define(
    'embedded-webview',
    EmbeddedWebview
  );
  