import React from 'react'
import { ActivityIndicator, StyleSheet } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

export default function Activityinvicatosr() {
  return (
    <SafeAreaProvider>
        <SafeAreaView style={[styles.container, styles.horizontal]}>
            <ActivityIndicator />
            <ActivityIndicator size={'large'} color='#00ff00' />
            <ActivityIndicator size={'small'} color='#0000ff' />
        </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    }
})