import React, {useState, useEffect} from 'react';
import {Text, View, Image, StyleSheet, ScrollView, Button, Linking,SafeAreaView,TouchableOpacity} from "react-native";
import {getMovie,getVideo} from "../services/movie";
import { FontAwesome } from '@expo/vector-icons'; 
import {CustomModal} from "../components/CustomModal";

export const DetailsScreen = (props) => {
    const {route, navigation} = props;
    const [movie, setMovie] = useState(null);
    const [isVisible,setIsVisible] = useState(false)
    const [video, setVideo] = useState(null);

    useEffect(() => {
        getMovie(route.params.id)
        .then(data =>{setMovie(data); console.log(data.video)})
        getVideo(route.params.id).then(data=>{
            setVideo(data);
        })
    }, [])

    const handlePress = () =>{
        if (movie) {
            Linking.canOpenURL(movie.homepage).then((supported) => {
                if (supported) {
                    Linking.openURL(movie.homepage);
                } else {
                    console.log("Don't know how to open URI: " + movie.homepage);
                }
            });
        }
    }

    const setModalVisibility = ()=>{
        setIsVisible(!isVisible)
    }

    if (!movie) {
        return null;
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Image source={{ uri: `https://image.tmdb.org/t/p/original${movie.backdrop_path}` }}style={styles.imageBg}/>
                <View style={styles.movie_container}>
                    <View style={styles.header}>
                        <Image source={{ uri: `https://image.tmdb.org/t/p/original${movie.poster_path}` }} style={styles.image}/>
                        <View style={styles.headerInfo}>
                            {movie.title !== '' && <Text style={styles.title}>{movie.title}</Text>}
                           
                        </View>
                        {/* {movie.video && (
                            <TouchableOpacity style={styles.headerPlay} onPress={()=>{setModalVisibility()}}>
                                <View style={styles.imagePlay}>
                                    <FontAwesome name="play" size={20} color="#B5A90F"/>
                                </View>
                            </TouchableOpacity>
                        )} */}
                            <TouchableOpacity style={styles.headerPlay} onPress={()=>{setModalVisibility()}}>
                                <View style={styles.imagePlay}>
                                    <FontAwesome name="play" size={20} color="#B5A90F"/>
                                </View>
                            </TouchableOpacity>
               
                        
                    </View>
                    <Text style={styles.overviewTitle}>Synopsis</Text>
                    {movie.overview !== '' &&(
                        <Text style={styles.overview}>{movie.overview}</Text>
                    )}
                </View>
            </ScrollView>
            {movie.homepage !== '' && (
                <View style={styles.footer}>
                    <Button color="#B00020" onPress={()=>handlePress()} title="Visit website" />
                </View>
            )}
            {video && video.results[0] && (
                <CustomModal modalVisible={isVisible} setModalVisibility={setModalVisibility} youtubeID={video.results[0].key} />
            )}

        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    movie_container:{
        paddingBottom: 20,
        paddingLeft: 18,
        paddingRight: 18,
        top: -70,
        zIndex: 1,
    },
    imageBg: {
        height: 350,
        resizeMode: 'cover',
        width: "100%",
    },
    header: {
        flexDirection: "row",
        alignItems:"center"
    },
    headerInfo: {
        flex: 2,
        backgroundColor:"white",
        borderRadius:15,
        padding:15
    },
    headerPlay:{
        flex: 1,
        alignItems:"center",
    },
    image: {
        flex:1,
        borderColor: "#ffffff",
        borderRadius: 15,
        borderWidth: 4,
        height: 134,
        marginRight: 15,
        width: 84,
    },
    imagePlay: {
        alignItems:"center",
        justifyContent:"center",
        width:40,
        height:40,
        borderColor: "#B5A90F",
        borderRadius: 50,
        borderWidth: 4,
        backgroundColor:"#B00020",
        borderRadius:50,
    },
   
    overview: {
        lineHeight: 24,
    },
    overviewTitle: {
        fontSize: 14,
        fontWeight: "600",
        marginBottom: 10,
    },
    footer: {
        backgroundColor: "#ffffff",
        bottom: 0,
        left: 0,
        paddingBottom: 12,
        paddingLeft: 18,
        paddingRight: 18,
        paddingTop: 12,
        position: "absolute",
        right: 0,
        zIndex: 2
    },
})
