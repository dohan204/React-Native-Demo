import React from 'react';
import { Button, Platform, StatusBar, StatusBarStyle, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const style = ['default', 'dark-content', 'light-content'] as const;
const transitions = ['fade', 'slide', 'none'] as const;

export default function StatusBarExample() {
    const [hidden, setHidden] = React.useState(false);
    const [statusBarStyle, setStatusBarStyle] = React.useState<StatusBarStyle>(style[0]);
    const [statusBarTransion, setStatusBarTransion] = React.useState<'fade' | 'slide' | 'none'>(transitions[0]);

    const changeStatusBarVisibility = () => setHidden(!hidden);

    const changeStatusBarStyle = () => {
        const styleId = style.indexOf(statusBarStyle) + 1;
        if (styleId === style.length) {
            setStatusBarStyle(style[0]);
        } else {
            setStatusBarStyle(style[styleId]);
        }
    }

    const changeStatusBarTransition = () => {
        const transion = transitions.indexOf(statusBarTransion) + 1;
        if (transion === transitions.length) {
            setStatusBarTransion(transitions[0]);
        } else {
            setStatusBarTransion(transitions[transion]);
        }
    }
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <StatusBar
                    animated={true}
                    backgroundColor='#61dafb'
                    barStyle={statusBarStyle}
                    showHideTransition={statusBarTransion}
                    hidden={hidden}
                />
                <Text>
                    Status Style: {hidden ? "hidden" : "visible"}
                </Text>
                <Text style={styles.textStyle}>
                    StatusBar Style:{'\n'}
                    {statusBarStyle}
                </Text>
                {Platform.OS === 'ios' ? (
                    <Text style={styles.textStyle}>
                        StatusBar Transition:{'\n'}
                        {statusBarTransion}
                    </Text>
                ) : null}
                <View style={styles.buttonsContainer}>
                    <Button
                        title="Toggle StatusBar"
                        onPress={changeStatusBarVisibility}
                    />
                    <Button
                        title="Change StatusBar Style"
                        onPress={changeStatusBarStyle}
                    />
                    {Platform.OS === 'ios' ? (
                        <Button
                            title="Change StatusBar Transition"
                            onPress={changeStatusBarTransition}
                        />
                    ) : null}
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ECF0F1',
  },
  buttonsContainer: {
    padding: 10,
  },
  textStyle: {
    textAlign: 'center',
    marginBottom: 8,
  },
});