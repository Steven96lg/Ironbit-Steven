 
import { LitElement, html } from "lit";

//Importacion de Elementos
import './dataprovider-element.js';
import './card-element.js'

class IndexElement extends LitElement{

    static properties = {
        pokemons: {type: Array},
    }

    constructor(){
        super();
        this.pokemons = [];
    }

    connectedCallback(){
        super.connectedCallback();
        this.addEventListener('send-data', (e) => {
            this.pokemons = e.detail
        });
    }

    render(){
        return html`
            <dataprovider-element></dataprovider-element>
            <card-element .pokemons="${this.pokemons}"></card-element>
        `;
    }
}

customElements.define('index-element', IndexElement);