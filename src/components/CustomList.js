import React, {useState} from 'react';
import {FlatList,Animated} from "react-native";
import {FilmItem} from "./FilmItem";
import {connect} from "react-redux";
import {deleteMovie,addMovie} from '../actions/movie'

const CustomList = (props) =>{
    const {moviedata,navigation,page,totalPages,_loadFilms} = props;
    return (
        <FlatList
            data={moviedata}
            renderItem={({item}) => <FilmItem film={item} goToDetail={() => navigation.navigate('Details', {title: item.title, id: item.id})} />}
            keyExtractor={item => item.id.toString()}
            onEndReachedThreshold={0.5}
            showsVerticalScrollIndicator={false}
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
