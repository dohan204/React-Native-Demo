import React from 'react';
import { Alert, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function Modals() {
    const [modalVisible, setModalVisible] = React.useState(false);
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => setModalVisible(true)}>
                    <Text style={styles.textStyle}>Mở modal</Text>
                </Pressable>
                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has bên close");
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.container}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>hello world</Text>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.textStyle}>Hiden modal</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export const ConfirmDelete = () => {
    const [visible, setVisible] = React.useState(false);

    return <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
            <Modal animationType='slide'
                transparent
                visible={visible}
            >
                <View style={styles.container}>

                </View>
            </Modal>
        </SafeAreaView>
    </SafeAreaProvider>
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalView: {
        margin: 20,
        width: 300,
        height: 200,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        color: 'red'
    },
    buttonOpen: {
        backgroundColor: '#F194FF'
    },
    buttonClose: {
        backgroundColor: '#2196F3'
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center'
    }
})