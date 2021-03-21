import { ACTIONS } from './action-types'

export const getMoviesBegin = () => ({
    type: ACTIONS.GET_MOVIES_BEGIN,
});

export const getMoviesSuccess = (value) => ({
    type: ACTIONS.GET_MOVIES_SUCCESS,
    payload: {
        value
    }
});

export const getMoviesError = (error) => ({
    type: ACTIONS.GET_MOVIES_ERROR,
    payload: {
        error
    }
});

export const addMovieBegin = () => ({
    type: ACTIONS.ADD_MOVIE_BEGIN,
});

export const addMovieSuccess = (value) => ({
    type: ACTIONS.ADD_MOVIE_SUCCESS,
    payload: {
        value
    }
});

export const addMovieError = (error) => ({
    type: ACTIONS.ADD_MOVIE_ERROR,
    payload: {
        error
    }
});

export const deleteMovieBegin = () => ({
    type: ACTIONS.DELETE_MOVIE_BEGIN,
});

export const deleteMovieSuccess = (id) => ({
    type: ACTIONS.DELETE_MOVIE_SUCCESS,
    payload: {
        id
    }
});

export const deleteMovieError = (error) => ({
    type: ACTIONS.DELETE_MOVIE_ERROR,
    payload: {
        error
    }
});

export const editMovieBegin = (movie) => ({
    type: ACTIONS.EDIT_MOVIE_BEGIN,
    payload: {
        movie
    }
});

export const editMovieSuccess = ( movie) => ({
    type: ACTIONS.EDIT_MOVIE_SUCCESS,
    payload: {
        movie
    }
});

export const editMovieError = (error) => ({
    type: ACTIONS.EDIT_MOVIE_ERROR,
    payload: {
        error
    }
});

export const setMovieSelected = (movie) => ({
    type: ACTIONS.SET_MOVIE_SELECTED,
    payload: {
        movie
    }
});

export const getSelectedMovieInfo = state => state.moviesReducer.selected;

export const getMoviesList = (offset, limit, filter, sortBy, sortOrder, search, searchBy='title') => {
    return dispatch => {
        dispatch(getMoviesBegin());
        return fetch(`http://localhost:4000/movies?search=${search}&searchBy=${searchBy}filter=${filter}?sortBy=${sortBy}&sortOrder=${sortOrder}?offset=${offset}&limit=${limit}`)
            .then(response => response.json())
            .then(json => {
                dispatch(getMoviesSuccess(json.data));
            })
            .catch(error => dispatch(getMoviesError(error)));
    };
};

export const getMoviesFilterList = (offset, limit, filter) => {
    return dispatch => {
        dispatch(getMoviesBegin());
        return fetch(`http://localhost:4000/movies?filter=${filter}&offset=${offset}&limit=${limit}`)
            .then(response => response.json())
            .then(json => {
                dispatch(getMoviesSuccess(json.data));
            })
            .catch(error => dispatch(getMoviesError(error)));
    };
};

export const getMoviesSortingList = (offset, limit, sortBy, sortOrder) => {
    return dispatch => {
        dispatch(getMoviesBegin());
        return fetch(`http://localhost:4000/movies?sortBy=${sortBy}&sortOrder=${sortOrder}&offset=${offset}&limit=${limit}`)
            .then(response => response.json())
            .then(json => {
                dispatch(getMoviesSuccess(json.data));
            })
            .catch(error => dispatch(getMoviesError(error)));
    };
};

export const getMoviesSearchList = (search, searchBy='title') => {
    return dispatch => {
        dispatch(getMoviesBegin());
        return fetch(`http://localhost:4000/movies?search=${search}&searchBy=${searchBy}`)
            .then(response => response.json())
            .then(json => {
                dispatch(getMoviesSuccess(json.data));
            })
            .catch(error => dispatch(getMoviesError(error)));
    };
};

export const addMoviesList = (movie) => {
    return dispatch => {
        dispatch(addMovieBegin(movie));
        return fetch(`http://localhost:4000/movies`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(movie, null, 2)
        })
           .then(response => response.json())
            .then(json => {
                dispatch(addMovieSuccess(json));
            })
            .catch(error => dispatch(addMovieError(error)));
    };
};

export const deleteMoviesList = (id) => {
    return dispatch => {
        dispatch(deleteMovieBegin(id));
        return fetch(`http://localhost:4000/movies/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': '*/*',
            },
            body: JSON.stringify(id, null, 2)
        })
            .then(json => {
                dispatch(deleteMovieSuccess(id));
            })
            .catch(error => dispatch(deleteMovieError(error)));
    };
};


export const editMoviesList = (movie) => {
    return dispatch => {
        dispatch(editMovieBegin(movie));
        return fetch(`http://localhost:4000/movies`, {
            method: 'PUT',
            headers: {
                'Accept': '**content-length: 0**',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(movie)
        })
            .then(response => response.json())
            .then(response => {
                dispatch(editMovieSuccess(response));
            })
            // .catch(error => dispatch(editMovieError(error)));
             .catch(error => dispatch(editMovieError(error)));
    };
};

export const getMovieById = (id) => {
    const url = `http://localhost:4000/movies/${id}`;
    const options = {
        headers: {
            accept: "application/json"
        }
    };
    return dispatch => {
        dispatch(getMovieByIdStarted());
        return fetch(url, options)
            .then(res => res.json())
            .then(data => {
                dispatch(getMovieByIdSuccess(data));
            })
            .catch(err => {
                dispatch(getMovieByIdError(err.message));
            });
    };
};
export const getMovieByIdStarted = () => ({
    type: ACTIONS.GET_MOVIE_BY_ID_STARTED,
});
const getMovieByIdSuccess = (movie) => ({
    type: ACTIONS.GET_MOVIE_BY_ID_SUCCESS,
    payload: {
        movie
    }
});
const getMovieByIdError = (error) => ({
    type: ACTIONS.GET_MOVIE_BY_ID_ERROR,
    payload: {
        error
    }
});
