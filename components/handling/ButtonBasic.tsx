import React from 'react'
import { Alert, Button, Platform, Pressable, StyleSheet, Text, TouchableHighlight, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function ButtonBasic() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Button onPress={() => Alert.alert("You tapped the button!")} title='pressMe' />
                </View>
                <View style={styles.buttonContainer}>
                    <Button onPress={() => Alert.alert("You tapped the button!")} title='pressMe' color={'purple'}  />
                </View>
                <View style={styles.alternativeLayoutButtonContainer}>
                    <Button onPress={() => Alert.alert("You tapped the button!")} title='pressme' />
                    <Button onPress={() => Alert.alert("you tapped the button!")} title='pessMe' color='purple' />
                </View>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    buttonContainer: {
        margin: 20,
        borderRadius: 10
    },
    alternativeLayoutButtonContainer: {
        margin: 20,
        flexDirection: 'row'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
        margin: 10
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'medium',
        letterSpacing: 0.25,
        color: 'red'
    }
})

export function CustomButton(){
    return <Pressable style={styles.button} onPress={() => Alert.alert("hello anh em nhé")}>
        <Text style={styles.text}>CustomButton</Text>
    </Pressable>
}

export const Touchables = () => {
    const onPressButton = () => {
        Alert.alert("hello anh em, tôi là hàn nhé heheh")
    }
    const onLongPressButton = () => {
        Alert.alert("You long-pressed the button!")
    }

    return (
        <View style={styles.container}>
            <TouchableHighlight onPress={onPressButton} underlayColor={'white'}>
                <View style={styles.button}>
                    <Text style={styles.text}>TouchableHightliht</Text>
                </View>
            </TouchableHighlight>
            <TouchableNativeFeedback
                onPress={onPressButton}
                background={
                    Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : undefined
                }
            >
                <View style={styles.button}>
                    <Text style={styles.text}>
                        TouchableNativeFeedback
                        {Platform.OS !== 'android' ? '(Android only)': ""}
                    </Text>
                </View>
            </TouchableNativeFeedback>
            <TouchableWithoutFeedback onPress={onPressButton}>
                <View style={styles.button}>
                    <Text style={styles.text}>
                        TouchableWithoutFeedback
                    </Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableHighlight
                onPress={onPressButton}
                onLongPress={onLongPressButton}
                underlayColor={'white'}
            >
                <View style={styles.button}>
                    <Text style={styles.text}>
                        Tu
                    </Text>
                </View>
            </TouchableHighlight>
        </View>
    )
}