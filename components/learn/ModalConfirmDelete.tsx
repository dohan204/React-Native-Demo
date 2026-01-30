import React, { useState } from 'react';
import { Alert, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function ModalConfirmDelete() {
  const [visible, setVisible] = useState(false);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* Nút mở modal */}
        <Pressable
          style={styles.openButton}
          onPress={() => setVisible(true)}
        >
          <Text style={styles.openButtonText}>Xóa</Text>
        </Pressable>

        {/* Modal */}
        <Modal 
          visible={visible} 
          transparent 
          animationType="slide"
          onRequestClose={() => setVisible(false)}
        >
          <View style={styles.overlay}>
            <View style={styles.modalView}>
              <Text style={styles.title}>⚠️ Cảnh báo</Text>
              <Text>Bạn có chắc muốn xóa không?</Text>
              
              <View style={{ flexDirection: 'row', gap: 10, marginTop: 20 }}>
                <Pressable 
                  style={[styles.button, { backgroundColor: '#ccc' }]}
                  onPress={() => setVisible(false)}
                >
                  <Text>Hủy</Text>
                </Pressable>
                
                <Pressable 
                  style={[styles.button, { backgroundColor: 'red' }]}
                  onPress={() => {
                    Alert.alert('Đã xóa!');
                    setVisible(false);
                  }}
                >
                  <Text style={{ color: 'white' }}>Xóa</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  openButton: {
    backgroundColor: '#ff3b30',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
  },
  openButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '80%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  button: {
    flex: 1,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
});