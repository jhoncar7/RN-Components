import React, { useContext, useState } from 'react'
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import { CustomSwitch } from '../components/CustomSwitch';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/theme/ThemeContext';
import { useForm } from '../hooks/useForm';
import { styles } from '../theme/appTheme';

export const TextInputScreen = () => {

    const { form, onChange, isSusbscribed } = useForm(
        {
            name: '',
            email: '',
            phone: '',
            isSusbscribed: false
        }
    );

    const { theme: { colors, dividerColor }, } = useContext(ThemeContext);
    const { text } = colors;

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.globalMargin}>

                        <HeaderTitle title="TextInput" />

                        <TextInput
                            style={{
                                ...stylesScreen.inputStyle,
                                borderColor: text,
                                color: text
                            }}
                            placeholder='Ingrese nombre'
                            autoCorrect={false}
                            autoCapitalize="words"
                            onChangeText={(value) => onChange(value, 'name')}
                            placeholderTextColor={dividerColor}
                        />
                        <TextInput
                            style={{
                                ...stylesScreen.inputStyle,
                                borderColor: text,
                                color: text
                            }}
                            placeholder='Ingrese email'
                            autoCorrect={false}
                            autoCapitalize="none"
                            keyboardType='email-address'
                            onChangeText={(value) => onChange(value, 'email')}
                            keyboardAppearance='dark' // solo en IOS el color de fondo del teclado
                            placeholderTextColor={dividerColor}
                        />
                        <Text>Suscribirme</Text>
                        <View style={stylesScreen.switchRow}>
                            <Text style={stylesScreen.switchText}>{(isSusbscribed) ? 'Activo' : 'No Activo'}</Text>
                            <CustomSwitch isOn={isSusbscribed} onChange={(value) => onChange(value, 'isSusbscribed')} />
                        </View>

                        <HeaderTitle title={JSON.stringify(form, null, 5)} />
                        <HeaderTitle title={JSON.stringify(form, null, 5)} />
                        <TextInput
                            style={{
                                ...stylesScreen.inputStyle,
                                borderColor: text,
                                color: text
                            }}
                            placeholder='Ingrese telefono'
                            onChangeText={(value) => onChange(value, 'phone')}
                            keyboardType="numeric"
                            placeholderTextColor={dividerColor}
                        />

                        <HeaderTitle title={JSON.stringify(form, null, 5)} />
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const stylesScreen = StyleSheet.create({
    inputStyle: {
        borderWidth: 1,
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginVertical: 5,
    },
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