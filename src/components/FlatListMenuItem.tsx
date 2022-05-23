import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MenuItem } from '../interfaces/appInterfaces'
import Icon from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

interface Props {
    menuItem: MenuItem
}

export const FlatListMenuItem = ({ menuItem }: Props) => {

    const { navigate }: any = useNavigation()
    const { name, icon, component } = menuItem;

    return (
        <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigate(component)}
        >
            <View style={styles.container}>
                <Icon name={icon} color='#5856D6' size={23} />
                <Text style={styles.itemText}>{name}</Text>
                <View style={{ flex: 1 }} />
                {/* Como es row, se estira lo que pueda */}
                <Icon name={'arrow-redo-outline'} color='#5856D6' size={23} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    itemText: {
        color: '#000',
        marginLeft: 10,
        fontSize: 18,
    }
});