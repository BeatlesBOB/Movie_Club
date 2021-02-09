import React, {useState} from 'react';
import {Text, View, TextInput, StyleSheet, TouchableOpacity,KeyboardAvoidingView} from "react-native";
import { FontAwesome } from '@expo/vector-icons';

export const Search = (props) => {
    const [isDisabled, setIsDisabled] = useState(true);
    const onChangeText = (text) => {
        setIsDisabled(text === '')
        props.handleSearch(text);
    }

    return (

        <View style={styles.main_container}>
            <View style={styles.input_container}>
                <FontAwesome name="search" size={24} color="#B00020" />
                <TextInput
                    style={styles.textinput}
                    placeholder='Titre film'
                    onChangeText={onChangeText}
                />
            </View>
            <View style={styles.button_container}>
                <TouchableOpacity disabled={isDisabled} title='RECHERCHE' onPress={() => props.handleClickButton()} style={styles.button}>
                    <Text style={styles.button_txt}>RECHERCHE</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main_container: {
        flex:1,
        padding: 30,
        backgroundColor: '#B00020',
        borderRadius:15
    },
    input_container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        paddingLeft: 10,
        alignItems: 'center',
        marginBottom: 10
    },
    textinput: {
        height: 50,
        paddingLeft: 10
    },
    button_container:{
        alignItems:"flex-end"
    },
    button:{
        width:150,
        padding: 10,
        alignItems: "center",
        backgroundColor:"#B5A90F"
    },
    button_txt:{
        color:"#fff",
    }

})
