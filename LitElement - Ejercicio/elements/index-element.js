
import { LitElement, html } from "lit";
// importacion de elementos hijos
import './dataprovider-element.js';
import './datamanager-element.js';
import './card-element.js';
import './buttons-element.js';

class IndexElement extends LitElement{

    static properties = {
        currentPosition: {type: Number},
        data: {type: Array}
    }

    constructor(){
        super();
        this.currentPosition = 0;
        this.data = [];
    }

    customHandleClick(event){
        const buttonName = event.detail.nameButton;
        const dataManagerElement = this.shadowRoot.querySelector('datamanager-element');
        dataManagerElement.handleButtonClicked(buttonName)
    }

    getDataProvider(event){
        const dataProvider = event.detail;
        this.data = dataProvider;
    }

    getCharPosition(event){
        const position = event.detail;
        this.currentPosition = position;
    }

    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('button-clicked', this.customHandleClick);
        this.addEventListener('data-loaded', this.getDataProvider);
        this.addEventListener('send-position', this.getCharPosition);
    }
    
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener('button-clicked', this.customHandleClick);
    }

    render(){
        return html`
            <div>
                <dataprovider-element></dataprovider-element>
                <datamanager-element></datamanager-element>
                ${this.data.length > 0 ? html`
                    <card-element 
                        image="${this.data[this.currentPosition].image}"
                        name="${this.data[this.currentPosition].name}"
                        species="${this.data[this.currentPosition].species}"
                        gender="${this.data[this.currentPosition].gender}"
                        status="${this.data[this.currentPosition].status}"
                        ></card-element>
                    ` : ''}
                <buttons-element></buttons-element>
            </div>
        `;
    }
}

customElements.define('index-element', IndexElement);