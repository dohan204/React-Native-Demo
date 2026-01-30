import React, { useCallback, useRef } from 'react';
import { Alert, SectionList, StyleSheet, Text, View } from 'react-native';
const DATA = [
    {
        title: 'Hoa quả', // Section header
        data: ['Táo', 'Chuối', 'Cam'] // Items trong section
    },
    {
        title: 'Rau củ',
        data: ['Cà rốt', 'Khoai tây', 'Cà chua']
    },
];

export default function SectionLists() {
    const ref = useRef(null);
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true)
        setTimeout(() => {
            setRefreshing(false);
        }, 2000)
    },[])
    return (
        <SectionList
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => (
                <View style={styles.item}>
                    <Text style={styles.itemText}>{item}</Text>
                </View>
            )}
            renderSectionHeader={({ section: { title } }) => (
                <View style={styles.header}>
                    <Text style={styles.headerText}>
                        {title}
                    </Text>
                </View>
            )}
            stickySectionHeadersEnabled
            ListEmptyComponent={<Text style={styles.NoData}>Không có dữ liệu</Text>} // hiển thị khi không có dữ liệu
            SectionSeparatorComponent={() => (
                <View style={{ height: 2 }} />
            )}
            ItemSeparatorComponent={() => (
                <View style={{ height: 1, backgroundColor: '#eee' }} />
            )}
            onEndReached={() => Alert.alert("hello ")} // load thêm data
            onEndReachedThreshold={0.5} // thời gian
            ListFooterComponent={<Text style={styles.NoData}>Hết dữ liệu</Text>} // hiển thị text ở cuối section
            refreshing={refreshing} // vuốt để cào thêm data
            onRefresh={onRefresh}
            
        // ListHeaderComponent={<Text>Thực phẩm</Text>}
        />
    )
}
const data = [
    {
        title: "Hôm nay",
        data: [
            { id: "1", text: "Ê mày ăn cơm chưa?" },
            { id: "2", text: "Chiều code không?" },
        ],
    },
    {
        title: "Hôm qua",
        data: [{ id: "3", text: "Gửi file cho tao nhé" }],
    },
];
export const ChatByDate = () => {
    return <SectionList
        sections={data}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item }) => (
            <View style={styles.item}>
                <Text style={styles.itemText}>{item.text}</Text>
            </View>
        )}
        renderSectionHeader={({ section }) => (
            <View style={styles.header}>
                <Text style={styles.headerText}>{section.title}</Text>
            </View>
        )}
        stickySectionHeadersEnabled
    />
}
const styles = StyleSheet.create({
    header: {
        backgroundColor: '#f0f0f0',
        padding: 10,
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    item: {
        backgroundColor: 'white',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    itemText: {
        fontSize: 16,
    },
    NoData: {
        color: 'red',
        fontSize: 32,
        fontWeight: '400'
    }
});