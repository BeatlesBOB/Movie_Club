import React, {useState, useEffect} from 'react';
import {View, FlatList, StyleSheet, SafeAreaView, ActivityIndicator} from "react-native";
import {CategoryItem} from "../components/CategoryItem";

export const GenreList = (props) => {
    const {navigation,genre} = props;


    return (
        <FlatList
        data={genre}
        renderItem={({item}) => <CategoryItem
        category={item.name}
        columnWrapperStyle={{justifyContent: 'space-around'}}
        goToGenre={() => navigation.navigate('GenreScreen', {genreId: item.id,title:item.name})}
        />}
        keyExtractor={({id})=> id.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        />
    )
}

