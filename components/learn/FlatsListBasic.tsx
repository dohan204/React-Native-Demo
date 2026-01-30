import React from 'react'
import { ActivityIndicator, FlatList, RefreshControl, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
const data = Array.from({ length: 20 }, (_, i) => ({
    id: i.toString(),
    name: "test " + i
}))
export default function FlatsListBasic() {
    return (
        <FlatList
            data={data} // dữ liệu được truyền vào
            keyExtractor={(item) => item.id} // đặt khóa thủ công cho phần tử 
            renderItem={({ item }) => (
                <View key={item.id} style={styles.container}>
                    <Text style={styles.text}>{item.name}</Text>
                </View>
            )}
            numColumns={3} // hiển thị lại số cột
        />
    )
}
type ItemData = {
    id: string,
    title: string
}
const DATA: ItemData[] = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
];

export function App() {
    const [selectedId, setSelectedId] = React.useState<string>();

    const renderItem = ({ item }: { item: ItemData }) => {
        const backgroundColor = item.id === selectedId ? "#6e3b6e" : '#f9c2ff';

        const color = item.id === selectedId ? 'white' : 'black'
        return <Item
            backgroundColor={backgroundColor}
            color={color}
            onPress={() => setSelectedId(item.id)}
            item={item}
        />

    }
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={DATA}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    extraData={selectedId}
                // ListEmptyComponent={<Text>Không có dữ liệu</Text>} // hiển thị Khi không có dữ liệu được truyền vào
                // contentContainerStyle={{ padding: 16 }} // dùng đúng chỗ để padding
                // onRefresh={() => {

                // }} // kéo xuông reload lại data
                />
            </SafeAreaView>
        </SafeAreaProvider>
    )
}
type ItemProps = {
    item: ItemData,
    onPress: () => void,
    backgroundColor: string,
    color: string
}
const Item = ({ item, onPress, backgroundColor, color }: ItemProps) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.item, { backgroundColor }]}>
            <Text style={[styles.text, { color: color }]}>
                {item.title}
            </Text>
        </TouchableOpacity>
    )
}


type Item = {
    id: string,
    name: string
}
export function FlatListExample() {
    const [data, setData] = React.useState<Item[]>([
        { id: '1', name: 'React Native' },
        { id: '2', name: 'Expo' },
        { id: '3', name: 'FlatList' },
    ]);

    const loadingMore = React.useRef(false);

    const [refreshing, setRefreshing] = React.useState(false);
    const [selectedId, setSelectedId] = React.useState<string | null>(null);

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            setData([
                { id: '4', name: 'New item A' },
                { id: '5', name: 'New item B' },
            ]);
            setRefreshing(false);
        }, 1500);
    }

    const loadMore = () => {
        if(loadingMore.current) return;

        loadingMore.current = true;
        setTimeout(() => {
            setData(prev => [
                ...prev,
                { id: Math.random().toString(), name: 'loadMore data' }
            ])
            loadingMore.current = false;
        }, 1000)
    }

    return (
        <FlatList
            data={data}
            renderItem={({ item }) => (
                <Text
                    style={[styles.item, item.id === selectedId && styles.selected]}
                    onPress={() => setSelectedId(item.id)}>
                    {item.name}
                </Text>
            )}

            // set Key with keyExxtractor
            keyExtractor={(item) => item.id}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
            }
            // Nếu list rống
            ListEmptyComponent={<Text style={styles.selected}>Không có dữ liệu</Text>}
            ListFooterComponent={loadingMore.current ? <ActivityIndicator /> : null}
            // padding cho list 
            contentContainerStyle={{ padding: 16 }}
            // load thêm 
            onEndReached={loadMore}
            onEndReachedThreshold={0.4}

            // extraData bắt buộc khi dùng id
            extraData={selectedId}
        />
    )
}









const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: StatusBar.currentHeight || 0
    },
    text: {
        color: 'white',
        fontSize: 36
    },
    item: {
        padding: 20,
        backgroundColor: 'purple',
        marginHorizontal: 16,
        marginVertical: 8
    },
    selected: {
        backgroundColor: 'blue'
    }
})
