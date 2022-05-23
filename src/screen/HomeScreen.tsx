import React from 'react'
import { FlatList, View } from 'react-native'
import { FlatListMenuItem } from '../components/FlatListMenuItem'
import { HeaderTitle } from '../components/HeaderTitle'
import { menuItems } from '../data/menuItems'
import { styles } from '../theme/appTheme'




export const HomeScreen = () => {

    const itemSeparator = () => {
        return (
            <View style={{
                borderBottomWidth: 1,
                opacity: 0.4,
                marginVertical: 8
            }} />
        )
    }

    return (
        <View style={{ flex: 1, ...styles.globalMargin }}>



            <FlatList
                data={menuItems}
                keyExtractor={item => item.name}
                renderItem={({ item }) => <FlatListMenuItem menuItem={item} />}
                ListHeaderComponent={() => <HeaderTitle title='Opciones del Menú!' />}
                ItemSeparatorComponent={() => itemSeparator()}
            />
        </View>
    )
}
