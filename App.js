import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import WelcomeScreen from "./screens/WelcomeScreen";
import { AppTabNavigator } from "./components/AppTabNavigator";
import NotificationScreen from './screens/NotificationScreen'

export default function App() {
  return <AppContainer />;
}

const switchNavigator = createSwitchNavigator({
  WelcomeScreen: { screen: WelcomeScreen },
  BottomTab: { screen: AppTabNavigator },
  Notification: {screen: NotificationScreen}
});

const AppContainer = createAppContainer(switchNavigator);
