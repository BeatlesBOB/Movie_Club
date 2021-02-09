import {ADD_MOVIE,DELETE_MOVIE} from '../actions/types';

const initialState = {
    movieList : []
}

const movieReducer = (state = initialState,action)=>{
    switch(action.type){
        case ADD_MOVIE:
            return {...state,movieList:state.movieList.concat({
                id:action.data.id,
                data:action.data
            })};
        case DELETE_MOVIE:
            console.log("delete");
            return {...state,movieList:state.movieList.filter((item) => item.id !== action.id)};
        default:
            return state;
    }
}

export default movieReducer