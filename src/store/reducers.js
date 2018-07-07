import { combineReducers } from 'redux';
import characters from './reducer.characters.js';
import films from './reducer.films.js';

export default combineReducers({
    characters,
    films
});