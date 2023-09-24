
import { LitElement, html, css } from "lit";

class ContadorComponent extends LitElement{

    static properties = {
        contador: {type: Number}
    };

    constructor(){
        super();
        this.contador = 0;
    };

    render(){
        return html`
            <div>
                <p>Contador: ${this.contador}</p>
                <button @click="${() => {this.contador--}}">Decrementar</button>
                <button @click="${() => {this.contador++}}">Incrementar</button>
            </div>
        `;
    }
}

customElements.define('contador-element', ContadorComponent);