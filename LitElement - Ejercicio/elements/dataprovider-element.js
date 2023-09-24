
import { LitElement } from "lit";

class DataProviderElement extends LitElement{

    static properties = {
        data: {type: Array},
    };

    constructor(){
        super();
        this.data = [];
    };

    connectedCallback(){
        super.connectedCallback();
        this.fetchCharacters();
    }

    async fetchCharacters() {
        try {
          const response = await fetch('https://rickandmortyapi.com/api/character');
          const data = await response.json();
          this.data = data.results;
          this.dispatchEvent(new CustomEvent('data-loaded', {detail: this.data, bubbles: true, composed: true}));
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
}

customElements.define('dataprovider-element', DataProviderElement);