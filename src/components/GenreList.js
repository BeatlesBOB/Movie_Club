import React, {useState, useEffect} from 'react';
import {View, FlatList, StyleSheet, SafeAreaView, ActivityIndicator} from "react-native";
import {getGenres} from "../services/movie";
import {CategoryItem} from "../components/CategoryItem";

export const GenreList = (props) => {
    const {navigation} = props;
    const [genre, setGenre] = useState(null);

    useEffect(() => {
        getGenres()
        .then(data=>{setGenre(data.genres)})
    }, [])

    return (
        <FlatList
        data={genre}
        renderItem={({item}) => <CategoryItem
        category={item.name}
        goToGenre={() => navigation.navigate('GenreScreen', {genreId: item.id})}
        />}
        keyExtractor={({id})=> id.toString()}
        style={{width: 350}}
        numColumns={2}
        />
    )
}
