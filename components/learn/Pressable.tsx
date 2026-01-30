import React from 'react'
import { Alert, Pressable, StyleSheet, Text } from 'react-native'

export default function Pressables() {
    return (
        <Pressable
            onPress={() => console.log('pressed!')}
            style={({ pressed }) => [styles.button, pressed && styles.pressed]}
        >
            <Text>Ấn vào đây nhe</Text>
        </Pressable>
    )
}
export const PressedCard = () => {
    const handlePress = () => {
        Alert.alert("hello anh em nhé");
    }

    const handleLongPress = () => {
        Alert.alert("Nhấn giữ đi có cái này hay lắm");
    }

    return <Pressable
        onPress={handlePress}
        // disabled : vô hiệu hóa
        hitSlop={20} // mở rộng vùn chạm
        pressRetentionOffset={50} // kéo ra ngoài 50px vẫn giữ pressed
        onPressIn={() => console.log("bat dau an nut nhe.")} // chạy khi bắt đầu ấn vào
        onPressOut={() => console.log("Tha nut ra roi nhe hehehe")} // chạy sau khi thả nút bấm ra
        onLongPress={handleLongPress} //bấm giữ
        onHoverIn={() => console.log('người dùng vùa hover vào')}
        onHoverOut={() => console.log('Nguuowif dùng thoát chuột')}
        delayLongPress={500} // 500 miliseconds: mới kích hoạt long press
        style={({ pressed }) => [
            styles.card, pressed && styles.cardPressed, {backgroundColor: pressed ? 'blue' : 'white'} // sử dụng link hoạt
        ]}> 

        {({ pressed }) => (
            <>
                <Text style={styles.title}>Tiêu đề Card</Text>
                <Text style={styles.subTitle}>
                    {pressed ? 'Đang nhấn...' : 'Nhấn nhanh hoặc nhấn giữ'}
                </Text>
            </>
        )}
    </Pressable>
}
const styles = StyleSheet.create({
    button: {
        padding: 10,
        backgroundColor: 'lightgray'
    },
    pressed: {
        opacity: 0.7
    },
    card: {
        padding: 20,
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: {
            width: 0, height: 2
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3
    },
    cardPressed: {
        transform: [{ scale: 0.98 }],
        backgroundColor: '#f5f5f5'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8
    },
    subTitle: {
        fontSize: 14,
        color: '#666'
    }
})