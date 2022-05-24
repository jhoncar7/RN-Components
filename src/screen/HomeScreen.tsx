import React from 'react'
import { FlatList, View } from 'react-native'
import { FlatListMenuItem } from '../components/FlatListMenuItem'
import { HeaderTitle } from '../components/HeaderTitle'
import { ItemSeparator } from '../components/ItemSeparator'
import { menuItems } from '../data/menuItems'
import { styles } from '../theme/appTheme'




export const HomeScreen = () => {

    return (
        <View style={{ flex: 1, ...styles.globalMargin }}>

            <FlatList
                data={menuItems}
                keyExtractor={item => item.name}
                renderItem={({ item }) => <FlatListMenuItem menuItem={item} />}
                ListHeaderComponent={() => <HeaderTitle title='Opciones del Menú!' />}
                ItemSeparatorComponent={() => <ItemSeparator />}
            />
        </View>
    )
}
