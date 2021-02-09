import React from 'react';
import {Text,View,Image,StyleSheet} from "react-native";

export const NoMovies = (props) => {


    return (
        <View style={styles.container}>
            <Image source={require('../../assets/bad.png')} style={styles.image} resizeMode={"cover"}/>
            <Text>Aucune recherche effectué</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image:{
        width:100,
        height:100
    }
});
