import React, { useState } from 'react'
import { RefreshControl, ScrollView, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const PullToRefreshScreen = () => {

    const [refreshing, setRefreshing] = useState(false);
    const [data, setData] = useState<string>();
    const { top } = useSafeAreaInsets()

    const onRefresh = () => {
        setRefreshing(true);

        setTimeout(() => {
            console.log('Terminado de actualizar');
            setRefreshing(false);
            setData('Nuevo dato');
        }, 4000);
    }

    return (
        <ScrollView
            style={{ marginTop: refreshing ? top : 0 }} //solo para ios para que se vea el cargando
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    progressViewOffset={40}//Para que el progressView no se vea en el header, solo en android
                    progressBackgroundColor='#5856D6'//Color de fondo del progressView o recargar solo en android
                    colors={['white', 'red', 'blue', 'orange']}// solo en android
                    style={{ backgroundColor: '#5856D6' }}//solo en IOS
                    tintColor='white'//solo en IOS
                    title='Recargando...'//solo en IOS
                    titleColor='white'//solo en IOS color del texto del titulo
                />
            }
        >
            <View style={{
                ...styles.globalMargin,
            }}>
                <HeaderTitle title="Pull to refresh" />
                {
                    data && <HeaderTitle title={data} />
                }
            </View>
        </ScrollView>
    )
}
