import React, { useEffect,useState } from "react";
import { Button, Modal, StyleSheet , View,Platform } from "react-native";

export const CustomModal = (props) => {
  const {modalVisible,setModalVisibility,youtubeID} = props;

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>

            <Button
              title="Hide"
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisibility()}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};
//video.results[0].site === "Youtube"?`https://www.youtube.com/watch?v=${video.results[0].key}`: `https://vimeo.com/${video.results[0].key}`
const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    modalView: {
      backgroundColor: "white",
      borderRadius: 20,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },
    WebViewContainer: {
      width: "100%",
    }
  });
