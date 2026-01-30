import React from 'react';
import { FlatList, RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function RefreshControls() {
    const [refreshing, setRefreshing] = React.useState(false);

    // optimize bằng useCallback
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000)
    }, []);


    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <ScrollView
                    contentContainerStyle={styles.scrollView}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                            titleColor={'purple'}
                            title='Đang tải'
                            tintColor={'red'} // điều chình màu của cái xoáy khi kéo cuông làm mới
                        />}
                >
                    <Text>Pull down to see RefreshControl indicator</Text>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}


export const ExampleWithFlatlist = () => {
    const [refreshing, setRefreshing] = React.useState(false);
    const [data, setData] = React.useState([
        { id: 1, name: 'hanf' },
        { id: 2, name: 'tuyet' },
        { id: 3, name: 'ngan' }
    ])
    const onRefresh = React.useCallback(() => {
        setRefreshing(true)
        setTimeout(() => {
            setData([
                { id: 1, name: 'hanf(update)' },
                { id: 2, name: 'tuyet(update)' },
                { id: 3, name: 'ngan(update)' },
                { id: 4, name: 'chi(update)' },
            ])
            setRefreshing(false);
        }, 2000)
    }, []);

    return (
        <FlatList
            data={data}
            renderItem={({ item }) => (
                <View style={styles.item} key={item.id}>
                    <Text style={styles.title}>{item.name}</Text>
                </View>
            )}
            keyExtractor={item => item.id + ''}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    title='Dang load du lieu'
                    tintColor={'red'}
                    titleColor={'blue'}
                />
            }
        />
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
        backgroundColor: 'purple',
        alignItems: 'center',
        justifyContent: 'center'
    },
    item: {
        backgroundColor: '#f9f9f9',
        padding: 20,
        marginHorizontal: 16,
        marginVertical: 8,
        borderRadius: 8
    },
    title: {
        fontSize: 16
    }
})