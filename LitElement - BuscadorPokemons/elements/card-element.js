
import { LitElement, html, css } from "lit";

class CardElement extends LitElement{

    static properties = {
        pokemons: {type: Array},
        newPokemons: {type: Array}
    }

    static styles = css`
        .input-box{
            width: 70%;
            height: auto;
            margin: 20px auto;
            display: flex;
            justify-content: center;
        } 
        .input-box input{
            width: 70%;
            height: 30px;
            border: none;
            outline: none;
            border-bottom: 1px solid gray;
            padding-left: 10px;
        }
        .container{
            width: 70%;
            padding: 10px;
            margin: 20px auto;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px; 
        }
        .container .card{
            box-shadow: 0px 0px 5px gray;
            border-radius: 5px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        .container .card img{
            width: 70%
        }
        .container .card strong{
            font-family: Arial;
            font-size: 26px;
        }
        .container .card strong span{
            color: gray;
        }
        .search-box{
            display: flex;
            justify-content: center;
        }
        .search-box strong{
            padding: 30px;
            font-size: 30px;
            font-family: Arial;
        }
    `;

    constructor(){
        super();
        this.pokemons = [];
        this.newPokemons = [];
    }

    connectedCallback(){
        super.connectedCallback()
        setTimeout(() => {
            this.newPokemons = this.pokemons;
        },200)
    }

    searchPokemon(e){
        const searchPokemon = e.target.value
        this.newPokemons = this.pokemons.filter(pokemon => {
            return pokemon.name.includes(searchPokemon)
        })
    }

    render(){
        return html`
            <div class='input-box'>
                <input placeholder="Buscar Pokemon" @input="${this.searchPokemon}">
            </div>
            ${this.newPokemons.length !== 0 ?html`<div class="container">
                ${this.newPokemons.map(pokemon => html`
                    <div class="card">
                        <img src="${pokemon.sprites.front_default}">
                        <strong><span>#0${pokemon.id}</span> ${pokemon.name}</strong>
                    </div>`
                )}
            </div>` : 
            html`<div class="search-box"><strong>No se encontraron Pokemones</strong></div>`
        }
        `;
    }

}

customElements.define('card-element', CardElement);
