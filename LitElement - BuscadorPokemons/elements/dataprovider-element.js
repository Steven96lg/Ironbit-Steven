import { LitElement } from "lit";

class DataProvider extends LitElement {

    static properties = {
        pokemons: { type: Array }
    }

    constructor() {
        super();
        this.pokemons = [];
        this.getPokemons();
    }

    async getPokemons() {
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20');
            const data = await response.json();
            
            // Obtén las URLs de los Pokémon
            const pokemonUrls = data.results.map(pokemon => pokemon.url);

            // Realiza todas las solicitudes de forma concurrente
            const pokemonResponses = await Promise.all(pokemonUrls.map(url => fetch(url)));
            const pokemonData = await Promise.all(pokemonResponses.map(response => response.json()));

            // Agrega los datos de los Pokémon al arreglo
            this.pokemons = pokemonData;

            this.dispatchEvent(new CustomEvent('send-data', {
                detail: this.pokemons,
                bubbles: true,
                composed: true
            }));
        } catch (error) {
            console.log('Error al Obtener Datos:', error);
        }
    }
}

customElements.define('dataprovider-element', DataProvider);
