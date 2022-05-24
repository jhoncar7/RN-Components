import React from 'react'
import { StyleSheet, View, FlatList, Image, ActivityIndicator } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle'
import { useState } from 'react';
import { FadeInImage } from '../components/FadeInImage';

export const InfiniteScrollScreen = () => {

    const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    const loadMore = () => {

        const newArray: number[] = [];
        for (let i = 0; i < 5; i++) {
            newArray[i] = numbers.length + i;
        }
        setTimeout(() => {
            setNumbers([...numbers, ...newArray]);
        }, 1500);

    }

    const renderItem = (item: number) => {

        const uri = `https://picsum.photos/id/${item}/1024/1024`;
        return (
            /* <Image
                source={{ uri: `https://picsum.photos/id/${item}/200/300` }}
                style={{
                    width: '100%',
                    height: 400,
                }}
            /> */

            <FadeInImage uri={uri} />
        )
    }

    return (
        <View>

            <FlatList
                data={numbers}
                keyExtractor={(item) => item.toString()}
                renderItem={({ item }) => renderItem(item)}
                ListHeaderComponent={() => <HeaderTitle title="Infinite Scroll" />}

                onEndReached={loadMore}
                onEndReachedThreshold={0.5}//que tan cerca tenemos que estar del fondo para disparar onEndReached, 0.5 es la mitad de la pantalla

                ListFooterComponent={() => (
                    <View style={{
                        height: 50,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%'
                    }}>
                        <ActivityIndicator size={30} color='#5856D6' />
                    </View>
                )}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    textItem: {
        backgroundColor: 'green',
        height: 150,
    }
});