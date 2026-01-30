import React, { useState } from 'react';
import { Alert, Button, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
// khi người dùng nhập vào form thì tự động đẩy form lên trên cho dễ nhìn thấy, tránh mù gõ
export default function KeyboardAvoidingViewComponent() {
    const [username, setUsername] = useState<string>('');

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // 
            style={styles.container}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.inner}>
                    <Text style={styles.header}>Header</Text>
                    <TextInput
                        placeholder='username...'
                        onChangeText={value => setUsername(value)}
                        defaultValue={username}
                        style={styles.textInput}
                    />
                    <View style={styles.btnContainer}>
                        <Button title='Submit' onPress={() => Alert.alert(`Hello ${username}`)} />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}
export const FormLogin = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = () => {
        if (!username.trim() || username.length === 0) {
            Alert.alert("Tên đăng nhập không được để trống");
            return;
        }
        if (password.length < 6) {
            Alert.alert("Mật khẩu phải lớn hơn 6 ký tự")
            return;
        }
        Alert.alert("Đăng nhập thành công")
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.inner}>
                    <Text style={styles.header}>
                        Form Login
                    </Text>
                    <TextInput
                        onChangeText={(name) => setUsername(name)}
                        style={styles.textInput}
                        value={username}
                        placeholder='enter name...'
                    />
                    <TextInput
                        onChangeText={(name) => setPassword(name)}
                        style={styles.textInput}
                        value={password}
                        placeholder='enter password...'
                        secureTextEntry
                    />
                    <View style={styles.btnContainer}>
                        <Button onPress={handleSubmit} title='submit' />
                    </View>
                </View>

            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    inner: {
        padding: 24,
        flex: 1,
        justifyContent: 'space-around'
    },
    textInput: {
        height: 40,
        borderColor: '#000000',
        borderBottomWidth: 1,
        marginBottom: 36
    },
    btnContainer: {
        backgroundColor: 'white',
        marginTop: 12
    },
    header: {
        fontSize: 36,
        marginBottom: 48
    }
})
