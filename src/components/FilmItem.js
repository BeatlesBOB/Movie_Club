import React,{useEffect,useRef} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity,Animated,Dimensions,Easing} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import {colors} from '../constants/variables';
import { deleteMovie } from '../actions/movie';

export const FilmItem = (props) => {
    const {film, goToDetail, isFav,addMovie,deletemovie} = props;
    const translateX = useRef(new Animated.Value(Dimensions.get('window').width)).current;
    let iconName;

    useEffect(() => {
        Animated.timing(translateX, {
            toValue: 0,
            duration: 2000,
            easing:Easing.ease,
            useNativeDriver:true
          }).start();
    }, [])


    return(
        <Animated.View style={[styles.main_container,{transform:[{translateX:translateX}]}]}>
            <TouchableOpacity style={styles.main_container} onPress={goToDetail}>
                <View style={styles.main_information_container}>
                    <Image source={{uri: `https://image.tmdb.org/t/p/original${film.poster_path}`}} style={styles.image} />
                    <View style={styles.content_container}>
                        <View>
                            <Text style={styles.title_text}>{film.title}</Text>
                        </View>
                        <View>
                            <Text>{film.release_date}</Text>
                        </View>
                    </View>
                    <View style={styles.dynamix_container}>
                        <View style={{justifyContent: 'center', flex:1}}>
                            <Text style={{color: colors.primary, fontSize: 18}}>{film.vote_average}</Text>
                        </View>
                        <View style={{justifyContent: 'center', flex:1}}>
                            {isFav ? 
                                <TouchableOpacity onPress={()=>deletemovie(film.id)}>
                                    <FontAwesome name={'star'} size={30} color={colors.star} />
                                </TouchableOpacity>
                            :   <TouchableOpacity onPress={()=>addMovie(film)}>
                                    <FontAwesome name={'star-o'} size={30} color={colors.star}  />
                                </TouchableOpacity>
                            }
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </Animated.View>

    )
}

const styles = StyleSheet.create({
    main_container: {
        height: 150,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        shadowColor: colors.primary,
        elevation: 5,
    },
    content_container: {
        flex: 3,
        margin: 5,
        justifyContent: 'center',
        
    },
    main_information_container: {
        flexDirection: 'row',
        flex: 1
    },
    dynamix_container: {
        flexDirection: 'row',
        flex: 1,
    },
    image: {
        width: 80,
        height: 120,
        margin: 5,
    },
    title_text: {
        fontWeight: 'bold',
        fontSize: 16,
        flexWrap: 'wrap',
        paddingRight: 5
    },
    picto: {
        width: 30,
        height: 30,
    }
})
