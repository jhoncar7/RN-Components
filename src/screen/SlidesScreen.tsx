import React, { useState } from 'react'
import { Dimensions, Image, ImageSourcePropType, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Animated } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';

import Carousel, { Pagination } from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import { useAnimation } from '../hooks/useAnimation';
import { useRef } from 'react';
import { StackScreenProps } from '@react-navigation/stack';

const { width: screenWidth } = Dimensions.get('window');

interface Slide {
    title: string;
    desc: string;
    img: ImageSourcePropType
}

const items: Slide[] = [
    {
        title: 'Titulo 1',
        desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
        img: require('../assets/slide-1.png')
    },
    {
        title: 'Titulo 2',
        desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
        img: require('../assets/slide-2.png')
    },
    {
        title: 'Titulo 3',
        desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
        img: require('../assets/slide-3.png')
    },
]

interface Props extends StackScreenProps<any, any> { };

export const SlidesScreen = ({ navigation }: Props) => {

    console.log(navigation);

    const [activeIndex, setActiveIndex] = useState(0);
    const { fadeIn, opacity, fadeOn } = useAnimation();
    const isVisible = useRef(false);

    const renderItem = (item: Slide) => {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: '#fff',
                    borderRadius: 5,
                    padding: 40,
                    justifyContent: 'center',
                }}
            >
                <Image
                    source={item.img}
                    style={{
                        //width: screenWidth - 80,
                        //height: screenHeight / 2,
                        width: 250,
                        height: 300,
                        resizeMode: 'center',
                    }}
                />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.sutTitle}>{item.desc}</Text>
            </View>
        )
    }

    return (
        <SafeAreaView
            style={{
                flex: 1,
                paddingTop: 50,
            }}
        >

            <Carousel
                //ref={(c) => { this._carousel = c; }}
                data={items}
                renderItem={({ item }) => renderItem(item)}
                sliderWidth={screenWidth}
                itemWidth={screenWidth}
                layout={'default'}
                onSnapToItem={(index) => {
                    setActiveIndex(index)
                    if (index === items.length - 1) {
                        fadeIn();
                        isVisible.current = true;
                    } else {
                        fadeOn();
                        isVisible.current = false;
                    }
                }}
            />

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, alignItems: 'center' }}>
                <Pagination
                    dotsLength={items.length} // cantidad de punticos que se muestran
                    activeDotIndex={activeIndex} // el punto que se muestra
                    dotStyle={{
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        backgroundColor: '#5856D6'
                    }}
                />
                {
                    isVisible &&
                    <Animated.View
                        style={{
                            opacity
                        }}
                    >
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => { 
                                navigation.navigate('Home');
                             }}
                            style={{
                                width: 120,
                                height: 50,
                                borderRadius: 10,
                                flexDirection: 'row',
                                backgroundColor: '#5856D6',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Text style={{ fontSize: 20, color: 'white' }}>Entrar</Text>
                            <Icon name="chevron-forward-outline" size={30} color="#fff" />
                        </TouchableOpacity>
                    </Animated.View>
                }
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#5856D6',
    },
    sutTitle: {
        fontSize: 16,
    }
});