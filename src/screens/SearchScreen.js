import React from 'react';
import {SafeAreaView, View, StyleSheet} from "react-native";
import CustomList from '../components/CustomList';
import {Search} from "../components/Search";

import {searchMovie} from "../services/movie";
import { Header } from '../components/Header';
import { NoMovies } from '../components/NoMovies';

export default class SearchScreen extends React.Component {
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


    _searchFilms = () => {
        this.page = 0;
        this.totalPages = 0;
        this.setState({filmsState: []});
        this._loadFilms();
    }

    handleSearchText = (text) => {
        this.setState({searchText: text})
    }

    _loadFilms = () => {
        this.setState({isLoading: true})
        searchMovie(this.state.searchText, this.page + 1)
            .then(data => {
                this.page = data.page;
                this.totalPages = data.total_pages;
                this.setState({filmsState: [...this.state.filmsState, ...data.results], isLoading: false});
            })
    }



    render() {
        return (

            <SafeAreaView style={styles.main_container}>
                <View style={styles.header_container}>
                        <Header/>
                    </View>
                    <View style={styles.header_container}>
                        <Search handleSearch={this.handleSearchText} handleClickButton={this._searchFilms}/>
                    </View>
                    <View style={styles.result_container}>
                        {this.state.filmsState.length>0 ?<CustomList  isDataFromStore={false} navigation={this.props.navigation} moviedata={this.state.filmsState} page={this.page} totalPages={this.totalPages} _loadFilms={this._loadFilms}/> : <NoMovies/>}
                    </View>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    main_container: {
        flex:1,
    },
    header_container:{
        flex:1
    },
    result_container:{
        flex:2,
    }

})
