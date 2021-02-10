import React from 'react';
import {SafeAreaView, Button, View, StyleSheet, Text, FlatList, ActivityIndicator ,Animated,Easing} from "react-native";
import { getMovieByGenres } from '../services/movie';
import CustomList  from '../components/CustomList';
import { NoMovies } from '../components/NoMovies';
import {connect} from "react-redux";

class FavorieScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    
    render() {
        return (
            <View style={styles.container}>
                <View>
                    {this.props.movies && this.props.movies.length > 0 ?
                    <CustomList navigation={this.props.navigation} moviedata={this.props.movies} page={0} totalPages={0} _loadFilms={this._loadFilms} isDataFromStore={true}/>
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

const mapStateToProps = (state) =>{
    return{
        movies:state.movieReducer.movieList
    }
}


export default connect(mapStateToProps)(FavorieScreen)