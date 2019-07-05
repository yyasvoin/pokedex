// Wait until DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const elements = {
    searchForm: document.getElementById('search'),
    pokemonImage: document.querySelector('#pokemon-image'),
    pokemonLabel: document.querySelector('#pokemon-label'),
  };

  function handleSearchFailure() {
    elements.pokemonImage.src = './placeholder.png';
    elements.pokemonImage.alt = 'No results';
    elements.pokemonLabel.textContent = 'No Results';
  }

  // On form submit, search for the pokemon
  elements.searchForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form from reloading page
    let query = document.querySelector('.form-control').value;

    /**
     * Make HTTP request
     * Example URL: https://pokeapi.co/api/v2/pokemon/ditto/
     * TODO: Use `query` to create valid URL as seen in above example
     */
    fetch(`https://pokeapi.co/api/v2/pokemon/${query}/`)
      .then(function (response) {
        return response.json();
      })
      .then(function (pokemon) { // On success change image and name label
        /**
         * TODO: On success use the data from the response to:
         *  1. Change `pokemonImage` `src` attribute to the `front_default` sprite
         *  2. Change `pokemonImage` `alt` attribute to the pokemon name
         *  3. Change `pokemonLabel` text to the pokemon name
         */

        let imgSrc = pokemon.sprites.front_default;
        let pokemonName = pokemon.name;

        elements.pokemonImage.src = imgSrc;
        elements.pokemonImage.alt = pokemonName;
        elements.pokemonLabel.textContent = pokemonName;
      })
      .catch(handleSearchFailure);
  });
});
