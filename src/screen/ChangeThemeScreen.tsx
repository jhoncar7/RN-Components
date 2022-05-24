import React, { useContext } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/theme/ThemeContext';
import { styles } from '../theme/appTheme';
import useReducer from 'react';
import { themeReducer } from '../context/theme/themeReducer';

export const ChangeThemeScreen = () => {

    const { setDarkTheme, setLightTheme, theme: { colors } } = useContext(ThemeContext);


    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title='Change Theme' />

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <TouchableOpacity
                    onPress={setLightTheme}
                    activeOpacity={0.6}
                    style={{
                        width: 150,
                        height: 50,
                        backgroundColor: '#5856D6',
                        borderRadius: 10,
                        justifyContent: 'center',
                    }}>
                    <Text style={{ color: 'white', textAlign: 'center', fontSize: 18 }}>Light</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={setDarkTheme}
                    activeOpacity={0.6}
                    style={{
                        width: 150,
                        height: 50,
                        backgroundColor: '#5856D6',
                        borderRadius: 10,
                        justifyContent: 'center',
                    }}>
                    <Text style={{ color: 'white', textAlign: 'center', fontSize: 18 }}>Dark</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
