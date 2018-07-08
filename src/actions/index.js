import store from './../store';
import axios from './../http';

export const togglePageLoader = boolean => {
    store.dispatch({
        type: 'PAGE_LOADER/TOGGLE',
        payload: boolean
    });
};

export const clickCharacter = url => {
    return getCharacterInfo(url)
        .then(grabFilms)
        .then(films => {

            store.dispatch({
                type: 'FILMS/STORE_FILMS',
                payload: films
            });

            return Promise.resolve();
        })
        .catch(error => {

            store.dispatch({
                type: 'FILMS/STORE_FILMS_FAILURE',
                payload: error
            });

            return Promise.reject();
        });
};

const getCharacterInfo = url => {
    return axios
        .get(url)
        .then(character => Promise.resolve(character.data.films))
        .catch(Promise.reject);
};

const grabFilms = filmUrls => {
    const requests = filmUrls.map(url => grabFilm(url));

    return axios
        .all(requests)
        .then(films => Promise.resolve(films))
        .catch(Promise.reject);
};

const grabFilm = filmUrl => {
    return axios
        .get(filmUrl)
        .then(film => Promise.resolve(film.data))
        .catch(Promise.reject);
};