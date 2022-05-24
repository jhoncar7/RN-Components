import React from 'react'
import { SectionList, Text, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { ItemSeparator } from '../components/ItemSeparator';
import { styles } from '../theme/appTheme';

interface Casas {
    casa: string;
    data: string[];
}

const casas: Casas[] = [
    {
        casa: "DC Comics",
        data: ["Batman", "Superman", "Robin",]
    },
    {
        casa: "Marvel Comics",
        data: ["Antman", "Thor", "Spiderman", "Antman",]
    },
    {
        casa: "Anime",
        data: ["Kenshin", "Goku", "Saitama",]
    },

];

export const CustomSectionListScreen = () => {
    return (
        <View style={{
            ...styles.globalMargin,
            flex: 1,
        }}>

            <SectionList
                sections={casas}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <Text>{item}</Text>}
                ListHeaderComponent={() => <HeaderTitle title="Custom SectionList" />}
                ListFooterComponent={() => (
                    <View style={{marginBottom:70}}>
                        <HeaderTitle title={"Total de casas:" + casas.length} />
                    </View>
                )}
                stickySectionHeadersEnabled //Para que el header no se desplace al hacer scroll
                //renderSectionHeader={({ section: { casa } }) => <HeaderTitle title={casa} />}
                renderSectionHeader={({ section }) => (
                    <View style={{ backgroundColor: 'white' }}>
                        <HeaderTitle title={section.casa} />
                    </View>
                )}
                renderSectionFooter={({ section }) => (
                    <HeaderTitle title={"Total de personajes:" + section.data.length} />
                )}

                ItemSeparatorComponent={() => <ItemSeparator />}
                SectionSeparatorComponent={() => <ItemSeparator />}

                showsVerticalScrollIndicator={false} // no se vea la barra del scroll
            />
        </View>
    )
}


