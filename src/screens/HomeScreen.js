import React from 'react';
import {SafeAreaView, Button, View, StyleSheet, Text, FlatList, ActivityIndicator ,Animated,Easing} from "react-native";
import {Header} from "../components/Header";
import {GenreList} from "../components/GenreList"

export default class HomeeScreen extends React.Component {
    state = {
        searchText: '',
        filmsState: [],
        isLoading: false,
    }
    page;
    totalPages;

    constructor(props) {
        super(props);
        this.page = 0;
        this.totalPages = 0;
    }

    render() {
        return (
            <View style={styles.container}>
                <Header/>
                <View style={styles.category_container}>
                    <GenreList navigation={this.props.navigation}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  category_container: {
      flex: 3,
      alignItems: 'center',
      padding: 20,
      flexDirection: 'row',
      justifyContent: 'space-between'
  }
});
