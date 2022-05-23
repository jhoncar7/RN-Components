import React, { useRef } from 'react'
import { Animated, Button, Easing, StyleSheet, Text, View } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';

export const Animation101Screen = () => {

    const { fadeIn, fadeOn, opacity, position, startMovingPosition } = useAnimation()

    return (
        <View style={styles.container}>
            <Animated.View style={{
                ...styles.purpleBox,
                opacity,
                marginBottom: 20,
                transform: [{ translateY: position }]
            }} />

            <Button title='Fade In' onPress={()=>{
                fadeIn();
                startMovingPosition(-100, 1000);
            }} />
            <Text />
            <Button title='Fade On' onPress={fadeOn} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    purpleBox: {
        backgroundColor: '#5856D6', // #800080 | #5856D6
        width: 150,
        height: 150,
    }
});