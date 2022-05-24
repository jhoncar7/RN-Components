import 'react-native-gesture-handler';
import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screen/HomeScreen';
import { Animation101Screen } from '../screen/Animation101Screen';
import { Animation102Screen } from '../screen/Animation102Screen';
import { SwitchScreen } from '../screen/SwitchScreen';
import { AlertScreen } from '../screen/AlertScreen';
import { TextInputScreen } from '../screen/TextInputScreen';
import { PullToRefreshScreen } from '../screen/PullToRefreshScreen';
import { CustomSectionListScreen } from '../screen/CustomSectionListScreen';
import { ModalScreen } from '../screen/ModalScreen';
import { InfiniteScrollScreen } from '../screen/InfiniteScrollScreen';
import { SlidesScreen } from '../screen/SlidesScreen';
import { ChangeThemeScreen } from '../screen/ChangeThemeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeContext } from '../context/theme/ThemeContext';
import { View } from 'react-native';

const Stack = createStackNavigator();

export const Navigator = () => {

  const { theme } = useContext(ThemeContext);

  return (
    <View style={{ backgroundColor: theme.colors.background, flex: 1 }}>
      <NavigationContainer
        theme={theme}
      >
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            //cardStyle: { backgroundColor: '#fff' },
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Animation1" component={Animation101Screen} />
          <Stack.Screen name="Animation2" component={Animation102Screen} />
          <Stack.Screen name="Switch" component={SwitchScreen} />
          <Stack.Screen name="Alert" component={AlertScreen} />
          <Stack.Screen name="TextInput" component={TextInputScreen} />
          <Stack.Screen name="PullToRefresh" component={PullToRefreshScreen} />
          <Stack.Screen name="CustomSectionList" component={CustomSectionListScreen} />
          <Stack.Screen name="Modal" component={ModalScreen} />
          <Stack.Screen name="InfiniteScroll" component={InfiniteScrollScreen} />
          <Stack.Screen name="Slides" component={SlidesScreen} />
          <Stack.Screen name="Theme" component={ChangeThemeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}