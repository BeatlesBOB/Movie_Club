import React from 'react';
import {SafeAreaView, Button, View, StyleSheet, Text, FlatList, ActivityIndicator ,Animated,Easing} from "react-native";
import {Header} from "../components/Header";
import {GenreList} from "../components/GenreList"
import { colors } from '../constants/variables';
import {getGenres} from "../services/movie";

export default class HomeeScreen extends React.Component {
    
    state = {
        genre: [],
    }
    constructor(props) {
        super(props); 
    }
    componentDidMount(){
        try{
            getGenres()
            .then(data=>{
                this.setState({genre:data.genres});
                console.log(data.genres)
            })
        }catch(e){
            console.log(e)
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Header/>
                <View style={styles.category_container}>
                    <GenreList navigation={this.props.navigation} genre={this.state.genre}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  category_container: {
      flex: 3,
      alignItems: 'center',
      padding: 20,
      justifyContent: 'center'
  }
});
