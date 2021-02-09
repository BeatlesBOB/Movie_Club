import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { color } from 'react-native-reanimated';
import {colors, shadow} from '../constants/variables';

export const CategoryItem = (props) => {
    const {category, goToGenre} = props;

    return(
        <TouchableOpacity onPress={goToGenre}>
            <View style={styles.container}>
                <Text style={styles.title}>{category}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        shadowColor: colors.primary,
        elevation: 5,
        paddingTop: 15,
        paddingBottom: 15,
        margin: 10,
        width: 140,
        flex: 1,
        backgroundColor: '#FFF'
    },
    title: {
        color: colors.primary,
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
    }
})
