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
        width: 150,
        height: 50,
        // borderWidth: 1,
        // borderColor: colors.primary,
        // justifyContent: 'space-between',
        alignItems: 'center',
        // shadowColor: shadow.color,
        // shadowOffset: shadow.offSet,
        // shadowOpacity: shadow.opacity,
        elevation: 12,
        paddingTop: 10,
        paddingBottom: 10,
        flex: 3
    },
    title: {
        color: colors.primary,
        fontSize: 16,
        fontWeight: 'bold',
    }
})
