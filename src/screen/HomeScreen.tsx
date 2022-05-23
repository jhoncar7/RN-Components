import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { FlatListMenuItem } from '../components/FlatListMenuItem'
import { MenuItem } from '../interfaces/appInterfaces'
import { styles } from '../theme/appTheme'


const menuItems: MenuItem[] = [
    {
        name: 'Animacion 101',
        icon: 'cube-outline',
        component: 'Animation1'
    },
    {
        name: 'Animacion 102',
        icon: 'albums-outline',
        component: 'Animation2'
    }
]

export const HomeScreen = () => {

    const { top } = useSafeAreaInsets()

    const renderListHeader = () => {
        return (
            <View style={{ marginTop: top + 3, marginBottom: 20 }}>
                <Text style={styles.title}>Opciones del Menú</Text>
            </View>
        )
    }

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
                ListHeaderComponent={renderListHeader}
                ItemSeparatorComponent={() => itemSeparator()}
            />
        </View>
    )
}
