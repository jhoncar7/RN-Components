import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MenuItem } from '../interfaces/appInterfaces'
import Icon from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation, useTheme } from '@react-navigation/native'
import { ThemeContext } from '../context/theme/ThemeContext'

interface Props {
    menuItem: MenuItem
}

export const FlatListMenuItem = ({ menuItem }: Props) => {

    const { theme:{colors} } = useContext(ThemeContext);
    const {primary, text} = colors;


    const { navigate }: any = useNavigation()
    const { name, icon, component } = menuItem;
    //const { colors } = useTheme();

    return (
        <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigate(component)}
        >
            <View style={styles.container}>
                <Icon name={icon} color={primary} size={23} />
                <Text style={{
                    ...styles.itemText,
                    color:text
                    }}>{name}</Text>
                <View style={{ flex: 1 }} />
                {/* Como es row, se estira lo que pueda */}
                <Icon name={'arrow-redo-outline'} color={primary} size={23} />
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