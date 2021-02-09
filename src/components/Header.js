import React,{useRef} from 'react';
import {View,StyleSheet, Image, Animated} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

export const Header = () => {
    const rotate = useRef(new Animated.Value(0)).current;

    useFocusEffect(
        React.useCallback(() => {
            Animated.spring(rotate, {
                toValue: 1,
                velocity: 50,
                bounciness: 20,
                useNativeDriver:false
              }).start();
      
          }, [])
    );
    return(
        
        <Animated.View style={[styles.container,{transform:[{rotate:rotate.interpolate({inputRange: [0, 1],outputRange: ['90deg', '0deg']})}]}]}>
            <View style={styles.image_container}>
                <Image style={styles.image} source={require('../../assets/logo.png')}/>
            </View>
        </Animated.View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        margin:40
    },
    image: {
        width: 150,
        height: 150,
        backgroundColor:"#fff",
        borderRadius:100,
    },
    image_container:{
        backgroundColor:"#B00020",
        borderRadius:100,
        padding:10,
    }
})
