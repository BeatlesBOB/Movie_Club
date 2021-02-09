import React, {useState} from 'react';
import {FlatList,Animated} from "react-native";
import {FilmItem} from "./FilmItem";
import {connect} from "react-redux";
import {deleteMovie,addMovie} from '../actions/movie'

const CustomList = (props) =>{
    const {moviedata,navigation,page,totalPages,_loadFilms,movies} = props;

    const isInFav =(id)=>{
        return movies.find(movie => movie.key === id) !== undefined
     }
     
     const handleaddMovie = (movie)=>{
         this.props.add(movie)
     }
     
     const handledeleteMovie = (id)=>{
         this.props.delete(id)
     }
    return (
        <FlatList
            data={moviedata}
            renderItem={({item}) => <FilmItem film={item} addMovie={handleaddMovie} isFav={isInFav(item.id)} deletemovie={handledeleteMovie} goToDetail={() => navigation.navigate('Details', {title: item.title, id: item.id})} />}
            keyExtractor={item => item.id.toString()}
            onEndReachedThreshold={0.5}
            onEndReached={() => {
                if (page < totalPages) {
                    _loadFilms();
                }
            }}
        />
    )
}


const mapStateToProps = (state) =>{
    return{
        movies:state.movieReducer.movieList
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        delete:(key)=>dispatch(deleteMovie(key)),
        add:(movie)=>dispatch(addMovie(movie))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CustomList)
