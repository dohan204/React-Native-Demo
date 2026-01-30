import React from 'react';
import { Alert, FlatList, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

type Todo = {
  id: number,
  name: string
}
export default function TodoApp() {
  const [todo, setTodo] = React.useState('');

  const [listTodo, setListTodo] = React.useState<Todo[]>([]);

  const addTodo = (todoName: string) => {
    if(!todo) {
      Alert.alert("Empty todo")
      return;
    }
    setListTodo(prev => [
      ...prev,
      {id: Math.floor(Math.random() * 100), name: todoName}
    ])
    setTodo('')
  }
  const removeTodo = (id: number) => {
    const deleteTodo = listTodo.filter(todo => todo.id !== id);
    setListTodo(deleteTodo);
  }
  console.log(listTodo)
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textHeader}>Todo App</Text>
      </View>
      <View style={styles.form}>
        <TextInput style={styles.textInput} placeholder='enter todo...' value={todo} onChangeText={(value) => setTodo(value)} />
          <Pressable
            onPress={() => addTodo(todo)}
            style={({pressed}) => [
              styles.button, pressed && styles.pressedButton
            ]}
          >
            {({pressed}) => (
              <Text style={styles.textButton}>Add todo</Text>
            )}
          </Pressable>
      </View>
      <View>
          <FlatList
            data={listTodo}
            keyExtractor={item => item.id + ""}
            renderItem={({item}) => (
              <TouchableOpacity  onPress={() => removeTodo(item.id)}>
                <Text style={styles.itemData}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textHeader: {
    fontSize: 32,
    textAlign: 'center',
    fontWeight: '600'
  },
  form: {
    padding: 10,
    marginHorizontal: 16,
    marginVertical: 10
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgreen',
    padding: 10
  },
  button: {
    padding: 10,
    backgroundColor: 'lightgreen'
  },
  textButton: {
    padding: 5,
    fontSize: 20,
    textAlign: 'center'
  },
  pressedButton: {
    opacity: 0.7,
    transform: [{scale: 1}],
    backgroundColor: 'lightblue'
  },
  viewData: {
    marginHorizontal: 16,
    padding: 5
  },
  itemData: {
    fontSize: 20,
    padding: 10,
    backgroundColor: 'lightgray',
  }
})