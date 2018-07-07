import store from './../store';
import axios from './../http';

export const getCharacterInfo = url => {
    return axios
        .get(url)
        .then(response => {
            return Promise.resolve(grabFilms(response.data.films));
        })
        .catch(error => {

            store.dispatch({
                type: 'FILMS/STORE_FILMS_FAILURE',
                payload: error
            });

            return Promise.reject();
        });
};

const grabFilms = filmUrls => {
    const requests = filmUrls.map(url => grabFilm(url));

    return axios
        .all(requests)
        .then(response => {

            store.dispatch({
                type: 'FILMS/STORE_FILMS',
                payload: response
            });

            return Promise.resolve();
        })
        .catch(error => {

            store.dispatch({
                type: 'FILMS/STORE_FILMS_FAILURE',
                payload: error
            });

            return Promise.reject();
        })
};

const grabFilm = filmUrl => {
    return axios
        .get(filmUrl)
        .then(response => {
            return Promise.resolve(response.data);
        })
        .catch(error => {
            return Promise.reject();
        });
};