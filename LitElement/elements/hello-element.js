
import { LitElement, html } from "lit";

class HelloElement extends LitElement{
    
    render(){
        return html`
            <div>
                <h2>Hello World desde Lit: este es mi primer Elemento</h2>
            </div>
        `;
    }
}

customElements.define('hello-element', HelloElement);