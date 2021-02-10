import React from 'react';
import {SafeAreaView, Button, View, StyleSheet, Text, FlatList, ActivityIndicator ,Animated,Easing} from "react-native";
import { getMovieByGenres } from '../services/movie';
import CustomList  from '../components/CustomList';
import { NoMovies } from '../components/NoMovies';

export default class GenreScreen extends React.Component {
    state = {
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

    componentDidMount(){
        getMovieByGenres(this.props.route.params.genreId)
        .then(data => {
            this.page = data.page;
            this.totalPages = data.total_pages;
            this.setState({filmsState: [...this.state.filmsState, ...data.results], isLoading: false});
            })
        }

    _loadFilms = () => {
        this.setState({isLoading: true})
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    {this.state.filmsState.length > 0 ?
                    <CustomList isDataFromStore={false} navigation={this.props.navigation} moviedata={this.state.filmsState} page={this.page} totalPages={this.totalPages} _loadFilms={this._loadFilms}/>
                    : <NoMovies/>}
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
});
