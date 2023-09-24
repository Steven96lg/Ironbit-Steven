
import { LitElement, html, css } from "lit";

class CardElement extends LitElement{

    static properties = {
        image: {type: String},
        name: {type: String},
        species: {type: String},
        gender: {type: String},
        status: {type: String},
    };

    constructor() {
        super();
        this.image = '';
        this.name = '';
        this.species = '';
        this.genter = '';
        this.status = '';
    };

    static styles = css`
        .card{
            padding: 10px;
            box-shadow: 0px 0px 5px gray;
            border-radius: 5px;
            margin-bottom: 10px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-family: Arial;
        }
        .card .info-char{
            padding: 9px;
            border-radius: 5px;
            background: #8F9899;
            width: 90%;
            display: flex;
            justify-content: space-evenly;
            color: white;
        }
    `;


    render(){
        return html`
            <div class="card">
                <img class="" src="${this.image}">
                <h2 class="">${this.name}</h2>
                <div class="info-char">
                    <strong>${this.species}</strong>
                    <strong>${this.gender}</strong>
                    <strong style="color: ${this.status === 'Alive' ? '#059021': this.status === 'Dead' ? '#EC0303' : 'white'}">${this.status}</strong>
                </div>
            </div>
        `;
    }
    
}

customElements.define('card-element', CardElement);