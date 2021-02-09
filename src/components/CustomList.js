import React, {useState} from 'react';
import {FlatList,Animated} from "react-native";
import {FilmItem} from "./FilmItem";

export const CustomList = (props) => {
    const {moviedata,navigation,page,totalPages,_loadFilms} = props;
    return (
        <FlatList
            data={moviedata}
            renderItem={({item}) => <FilmItem film={item} goToDetail={() => navigation.navigate('Details', {title: item.title, id: item.id})} />}
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
