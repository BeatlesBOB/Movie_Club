import React,{useEffect,useRef} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity,Animated,Dimensions,Easing} from 'react-native';


export const FilmItem = (props) => {
    const {film, goToDetail} = props;
    const translateX = useRef(new Animated.Value(Dimensions.get('window').width)).current;

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
                    <View style={{justifyContent: 'center', flex:1}}>
                        <Text style={{color:"#B00020"}}>{film.vote_average}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </Animated.View>

    )
}

const styles = StyleSheet.create({
    main_container: {
        height: 150,
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center'
    },
    content_container: {
        flex: 3,
        margin: 5,
        justifyContent: 'center',
    },
    main_information_container: {
        flexDirection: 'row'
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
