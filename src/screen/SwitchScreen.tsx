import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { CustomSwitch } from '../components/CustomSwitch';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/theme/ThemeContext';

export const SwitchScreen = () => {

    const [state, setState] = useState({
        isActive: true,
        isHungry: false,
        isHappy: true,
    })

    const { isActive, isHungry, isHappy } = state;

    const { theme: { colors } } = useContext(ThemeContext);
    const { text } = colors;

    const onChange = (value: boolean, field: keyof typeof state) => {
        setState({
            ...state,
            [field]: value
        })
    }

    return (
        <View style={{ marginHorizontal: 20 }}>

            <HeaderTitle title="Switches" />
            <View style={styles.switchRow}>
                <Text style={{...styles.switchText,color:text}}>{(isActive) ? 'Activo' : 'No Activo'}</Text>
                <CustomSwitch isOn={isActive} onChange={(value) => onChange(value, 'isActive')} />
            </View>

            <View style={styles.switchRow}>
                <Text style={{...styles.switchText,color:text}}>{(isHungry) ? 'Activo' : 'No Activo'}</Text>
                <CustomSwitch isOn={isHungry} onChange={(value) => onChange(value, 'isHungry')} />
            </View>

            <View style={styles.switchRow}>
                <Text style={{...styles.switchText,color:text}}>{(isHappy) ? 'Activo' : 'No Activo'}</Text>
                <CustomSwitch isOn={isHappy} onChange={(value) => onChange(value, 'isHappy')} />
            </View>

            <Text style={{...styles.switchText,color:text}}>
                {JSON.stringify(state, null, 5)}
            </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    switchText: {
        fontSize: 25,
    },
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    }
});