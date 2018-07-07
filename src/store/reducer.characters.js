const INITIAL_STATE = [{
      "name": "Luke Skywalker",
      "url": "https://swapi.co/api/people/1/"
    }, {
      "name": "Darth Vader",
      "url": "https://swapi.co/api/people/4/"
    }, {
      "name": "Obi-wan Kenobi",
      "url": "https://swapi.co/api/people/unknown/"
    }, {
      "name": "R2-D2",
      "url": "https://swapi.co/api/people/3/"
}];

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'CHARACTERS/GET_CHARACTERS':
            return action.payload;

        default:
            return state;
    }
};