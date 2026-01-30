import React from 'react'
import { Alert, Dimensions, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

const { width, height } = Dimensions.get('window')
export default function Images() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.logo}
          source={{
            uri: 'https://i.pinimg.com/236x/c0/a4/58/c0a458ad8593facfdd5964e5130b2ee3.jpg'
          }}
          onLoad={() => Alert.alert("Tải ảnh xong")}
          onLoadStart={() => console.log('bắt đầu tải ảnh')}
          onError={() => Alert.alert("Không tải được ảnh lên")}
        />
        <Text>Mèo già</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
export const BackgroundImage = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View>
          <ImageBackground
            style={styles.backgroundImage}
            source={{
              uri: 'https://lh5.googleusercontent.com/proxy/X5NNR-N2lQDrjYbez2oAHj5Sm83Gh3Tv6yWd2PPdgUr47sbTVyV9K8ZcaK-iQSskmjOXRBSuGmTr7xqcYwPE-gcbMxeFwf-XX4eQFCsIS1BVDu7Rk5_SisyQLuazi2KebWC1drtj58RAOD0RL5bn0Do8xUAqFV0w6Q'
            }}
            resizeMode='contain'
            onError={() => Alert.alert("Lỗi đéo load được")}
            blurRadius={5} // làm mờ ảnh(từ 10-100) số càng lớn càng mờ
            tintColor={'#ff0000'} // đổi màu ảnh(dùng cho icon hoặc đơn sắc)
            imageStyle={{ opacity: 0.5, paddingVertical: 10 , paddingHorizontal: 10, borderRadius: 5}} // ảnh trong suốt
          >
            <View style={styles.overlay}>
              <Text style={styles.text}>Nội dung nổi bật</Text>
            </View>
          </ImageBackground>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tinyLogo: {
    width: 50,
    height: 50
  },
  logo: {
    width: 250,
    height: 250,
    borderRadius: 125,
    resizeMode: 'cover'
  },
  backgroundImage: {
    width: '100%',
    height: 400,
    padding: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 32,
    color: 'black',
    fontFamily: 'Arial',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.3)', // lớp phủ tối
    padding: 20,
    borderRadius: 10,
  },
})