const ENDPOINT = 'https://hp-api.herokuapp.com/api/characters';

const fetchCharacters = () => fetch(ENDPOINT).then(response => response.json());

export { fetchCharacters };