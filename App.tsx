import 'react-native-gesture-handler';
import React from 'react'
//import { NavigationContainer, DefaultTheme, DarkTheme, Theme } from '@react-navigation/native';
import { Navigator } from './src/navigator/Navigator';
import { ThemeProvider } from './src/context/theme/ThemeContext';
import { LogBox } from 'react-native';

/* const customTheme: Theme = {
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    //primary: '',
    //background: 'black',
    //card: '',
    //text: '#fff',
    //border: '',
    //notification: '',
  }
} */

const App = () => {

  LogBox.ignoreLogs([
    'ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from \'deprecated-react-native-prop-types\'.',
    'NativeBase: The contrast ratio of',
    "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
  ])

  return (
    <AppState>
      {/* <NavigationContainer
      //theme={customTheme}
      > */}
      <Navigator />
      {/* </NavigationContainer> */}
    </AppState>
  )
}

const AppState = ({ children }: any) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}

export default App;