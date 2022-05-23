import React from 'react'
import { Alert, Button, Text, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

export const AlertScreen = () => {

    const showAlert = () => {
        Alert.alert(
            'Titulo',
            'Este el el cuerpo de la alerta',
            [
                {
                    text: 'Cancelar!',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'destructive',
                },
                {
                    text: 'Aceptar',
                    onPress: () => console.log('OK Pressed'),
                }
            ],
            {
                cancelable: true,// en true es para que pueda dar touch fuera del alert y se cierre
                onDismiss: () => console.log('Cancel Pressed'),
            }
        )
    }

    const showPromt = () => { //solo funciona para IOS, para android toca un paquete de terceros
        Alert.prompt(
            'Estas Seguro?',
            'Esta es una alerta de promt', //el cuerpo de la alerta
            (valor: string) => console.log('info: ', valor),
            'secure-text', //el tipo de input que se va a mostrar
            'default', //el valor por defecto
            'number-pad' //tipo de teclado el 'email-address' muestra el teclado con el @
        )
    }

    return (
        <View style={styles.globalMargin}>

            <HeaderTitle title="Alerts" />

            <Button
                title="Mostrar Alerta"
                onPress={showAlert}
            />
            <Text />
            <Button
                title="Mostrar Prompt"
                onPress={showPromt}
            />
        </View>
    )
}
