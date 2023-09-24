
import { LitElement } from "lit";

class DataManagerElement extends LitElement{

    static properties = {
        data: {type: Array},
        currentCharacter: {type: Number},
    }

    constructor(){
        super();
        this.data = [];
        this.currentCharacter = 0;
    }


    handleButtonClicked(buttonName) {

        if(buttonName === 'next'){
            if(this.currentCharacter === 19 && buttonName === 'next'){
                this.currentCharacter = -1;
            }
            this.currentCharacter++
            this.dispatchEvent(new CustomEvent('send-position', {detail: this.currentCharacter, bubbles: true, composed: true}));
        }else{
            if(this.currentCharacter === 0 && buttonName === 'prev'){
                 this.currentCharacter = 20;
            }
            this.currentCharacter--
            this.dispatchEvent(new CustomEvent('send-position', {detail: this.currentCharacter, bubbles: true, composed: true}));
        }
    }
}

customElements.define('datamanager-element', DataManagerElement)