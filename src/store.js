import {createStore, combineReducers} from 'redux';
import movieReducer from './reducers/movieReducer'

const rootReducer = combineReducers({
    movies:movieReducer
})

export const configureStore = createStore(rootReducer);

