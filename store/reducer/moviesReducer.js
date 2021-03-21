import { ACTIONS} from '../actions/action-types'

export const initialState = {
    loading: false,
    movies: [],
    error: null,
    selected: {
        id: null,
        title: '',
        poster_path: '',
        release_date: '',
        runtime: null,
        tagline: '',
        overview: '',
        vote_average: null,
        genres: null,
    },
};

const reformatMoviesData = value => {
    let moviesList = [];
    value.forEach(item => {
        moviesList.push({...item});
    });
    return moviesList;
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.GET_MOVIES_BEGIN:
            return {
                ...state,
                loading: true
            };
        case ACTIONS.GET_MOVIES_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                movies: reformatMoviesData(action.payload.value)
            };
        case ACTIONS.GET_MOVIES_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        case ACTIONS.ADD_MOVIE_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                movies: [...state.movies, action.payload.value]
            };

        case ACTIONS.DELETE_MOVIE_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                movies: state.movies.filter(item => item.id !== action.payload.id),
            };

        case ACTIONS.EDIT_MOVIE_SUCCESS: {
                state.movies.forEach((course) => {
                    if (course.id === action.payload.movie.id) {
                        course.title = action.payload.movie.title;
                        course.overview = action.payload.movie.overview;
                        course.release_date = action.payload.movie.release_date;
                        course.runtime = action.payload.movie.runtime;
                        course.poster_path = action.payload.movie.poster_path;
                        course.genres = action.payload.movie.genres ;

                    }
                    return course;
                })
            };

        case ACTIONS.SET_MOVIE_SELECTED:
            return {
                ...state,
                selected: {
                    id: action.payload.movie.id,
                    title: action.payload.movie.title,
                    poster_path: action.payload.movie.poster_path,
                    release_date: action.payload.movie.release_date,
                    tagline: action.payload.movie.tagline,
                    runtime: action.payload.movie.runtime,
                    overview: action.payload.movie.overview,
                    vote_average: action.payload.movie.vote_average,
                    genres: action.payload.movie.genres
                }
            };

        case ACTIONS.GET_MOVIE_BY_ID_STARTED:
            return {
                ...state,
                loading: true
            };
        case ACTIONS.GET_MOVIE_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                movie: action.payload.movie
            };
        case ACTIONS.GET_MOVIE_BY_ID_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };

        default:
            return state;
    }
}

export default reducer;
