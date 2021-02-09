import {ADD_MOVIE,DELETE_MOVIE} from './types';

export const addMovie= (movie)=>({
    type:ADD_MOVIE,
    data:movie
})

export const deleteMovie= (key)=>({
    type:DELETE_MOVIE,
    key:key
})