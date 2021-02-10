import {ADD_MOVIE,DELETE_MOVIE} from './types';

export const addMovie= (movie)=>({
    type:ADD_MOVIE,
    data:movie
});

export const deleteMovie= (id)=>({
    type:DELETE_MOVIE,
    id:id
});
