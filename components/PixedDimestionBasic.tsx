import React from 'react'
import { StyleSheet, View } from 'react-native'

export default function PixedDimestionBasic() {
  return (
    <View style={{flex: 1}}>
        <View style={styles.box1} />
        <View style={styles.box2} />
        <View style={styles.box3} />
    </View>
  )
}

const styles = StyleSheet.create({
    box1: {
        height: '15%',
        backgroundColor: 'powderblue',
    },
    box2: {
        width: '66%',
        height: '35%',
        backgroundColor: 'skyblue',
    },
    box3: {
        width: '33%',
        height: "50%",
        backgroundColor: 'steelblue',
    }
})