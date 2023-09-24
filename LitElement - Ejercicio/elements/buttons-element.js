
import { LitElement, html, css } from "lit";

class ButtonsElement extends LitElement{

    constructor(){
        super();
        this.buttonClicked = '';
    }

    static styles = css`
        .box-btns{
            padding: 20px;
            border-radius: 5px;
            border: 1px solid gray;
            display: flex;
            justify-content: space-evenly;
        }
        .box-btns button{
            font-size: 18px;
            border: none;
            outline: none;
            padding: 8px;
            color: white;
            cursor: pointer;
            border-radius: 5px;
        }
        .box-btns .back{
            background: #F98649;
        }
        .box-btns .next{
            background: #22B3D0;
        }
    `;

    getButtonClicked(nameButton){
        this.buttonClicked = nameButton;
        this.dispatchEvent(new CustomEvent('button-clicked', {
            detail: { nameButton },
            bubbles: true,
            composed: true
        }))
    }

    render(){
        return html `
            <div class="box-btns">
                <button class="back" @click="${() => this.getButtonClicked('prev')}">Anterior</button>
                <button class="next" @click="${() => this.getButtonClicked('next')}">Siguiente</button>
            </div>
        `;
    }


}

customElements.define('buttons-element', ButtonsElement);