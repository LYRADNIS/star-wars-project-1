import { combineReducers } from 'redux';

import pageLoader from './_reducer.pageLoader.js';
import characters from './reducer.characters.js';
import films from './reducer.films.js';

export default combineReducers({
    pageLoader,
    characters,
    films
});