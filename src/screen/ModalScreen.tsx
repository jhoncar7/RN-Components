import React, { useState } from 'react'
import { Button, Modal, Text, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

export const ModalScreen = () => {

    const [isVisible, setIsVisible] = useState(false)

    return (
        <View style={{ ...styles.globalMargin }}>
            <HeaderTitle title="Modal Screen" />

            <Button
                title='Open Modal'
                onPress={() => setIsVisible(true)}
            />

            <Modal
                animationType='fade' // fade
                visible={isVisible}
                transparent//vuelve la pantalla de atras en transparente y se puede ver
            >
                <View style={{
                    flex: 1,
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>

                    {/* Cuerpo del Modal */}

                    <View style={{
                        backgroundColor: 'white',
                        width: 200,
                        height: 200,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 10,
                        shadowOffset: { width: 10, height: 10 },
                        shadowOpacity: 0.5, //IOS
                        elevation: 10, //Android
                    }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>MODAL</Text>
                        <Text style={{ fontSize: 16, fontWeight: '300', marginBottom: 20 }}>Cuerpo del Modal</Text>
                        <Button title='Cerrar' onPress={() => setIsVisible(false)} />
                    </View>

                </View>

            </Modal>
        </View>
    )
}
