import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import HomePage from './pages/HomePage';
import { NativeRouter, Route } from "react-router-native";
import Login from './pages/Login';
import AppLoading from "expo-app-loading";

export default function App() {

  const fetchFonts = async () => {
    await Font.loadAsync({
      MontserratBlack: require('./assets/fonts/Montserrat-Black.ttf'),
      MontserratBold: require('./assets/fonts/Montserrat-Bold.ttf'),
      MontserratExtraBold: require('./assets/fonts/Montserrat-ExtraBold.ttf'),
      MontserratExtraLight: require('./assets/fonts/Montserrat-ExtraLight.ttf'),
      MontserratExtraLightItalic: require('./assets/fonts/Montserrat-ExtraLightItalic.ttf'),
      MontserratItalic: require('./assets/fonts/Montserrat-Italic.ttf'),
      MontserratLight: require('./assets/fonts/Montserrat-Light.ttf'),
      MontserratLightItalic: require('./assets/fonts/Montserrat-LightItalic.ttf'),
      MontserratMedium: require('./assets/fonts/Montserrat-Medium.ttf'),
      MontserratMediumItalic: require('./assets/fonts/Montserrat-MediumItalic.ttf'),
      MontserratRegular: require('./assets/fonts/Montserrat-Regular.ttf'),
      MontserratSemiBold: require('./assets/fonts/Montserrat-SemiBold.ttf'),
      MontserratSemiBoldItalic: require('./assets/fonts/Montserrat-SemiBoldItalic.ttf'),
      MontserratThin: require('./assets/fonts/Montserrat-Thin.ttf'),
      MontserratThinItalic: require('./assets/fonts/Montserrat-ThinItalic.ttf')
    });
  }

  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={() => console.log("error")}
      />
    );
  } else {
    return (
      <NativeRouter>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={Login} />
      </NativeRouter>
    );
  }
}
