import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { IMainStackNavigatorParams } from './MainStackNavigator.interface';
import { defaultNavigationStack } from './navigationConfig';
import { HomeScreen } from '@screen/Home/HomeScreen';
import { BounceScreen } from '@screen/Bounce';
import { FlashScreen } from '@screen/Flash';
import { PulseScreen } from '@screen/Pulse';
import { RubberBandScreen } from '@screen/RubberBand';
import { ShakeXScreen } from '@screen/ShakeX';
import { ShakeYScreen } from '@screen/ShakeY';
import { SwingScreen } from '@screen/Swing';
import { TadaScreen } from '@screen/Tada';
import { WobbleScreen } from '@screen/Wobble';
import { JelloScreen } from '@screen/Jello';
import { HeartBeatScreen } from '@screen/HeartBeat';
import { BackInDownScreen } from '@screen/BackInDown';
import { BackInLeftScreen } from '@screen/BackInLeft';
import { BackInRightScreen } from '@screen/BackInRight';
import { BackInUpScreen } from '@screen/BackInUp';
import { BackOutDownScreen } from '@screen/BackOutDown';
import { BackOutLeftScreen } from '@screen/BackOutLeft';
import { BackOutRightScreen } from '@screen/BackOutRight';
import { BackOutUpScreen } from '@screen/BackOutUp';

const Stack = createStackNavigator<IMainStackNavigatorParams>();

export const MainStackNavigator = (): React.ReactElement => {
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => {
        return {
          ...defaultNavigationStack,
          detachPreviousScreen: !navigation.isFocused(),
        };
      }}
      initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
      <Stack.Screen
        name="BounceScreen"
        component={BounceScreen}
        options={{ title: 'Bounce' }}
      />

      <Stack.Screen
        name="FlashScreen"
        component={FlashScreen}
        options={{ title: 'Flash ⚡️' }}
      />

      <Stack.Screen
        name="PulseScreen"
        component={PulseScreen}
        options={{ title: 'Pulse' }}
      />

      <Stack.Screen
        name="RubberBandScreen"
        component={RubberBandScreen}
        options={{ title: 'Rubber Band 🧼' }}
      />

      <Stack.Screen
        name="ShakeXScreen"
        component={ShakeXScreen}
        options={{ title: 'Shake X' }}
      />

      <Stack.Screen
        name="ShakeYScreen"
        component={ShakeYScreen}
        options={{ title: 'Shake Y' }}
      />

      <Stack.Screen
        name="SwingScreen"
        component={SwingScreen}
        options={{ title: 'Swing 🐤' }}
      />

      <Stack.Screen
        name="TadaScreen"
        component={TadaScreen}
        options={{ title: 'Tada 🛵' }}
      />

      <Stack.Screen
        name="WobbleScreen"
        component={WobbleScreen}
        options={{ title: 'Wobble ⚓️' }}
      />

      <Stack.Screen
        name="JelloScreen"
        component={JelloScreen}
        options={{ title: 'Jello' }}
      />

      <Stack.Screen
        name="HeartBeatScreen"
        component={HeartBeatScreen}
        options={{ title: 'Heart Beat' }}
      />

      <Stack.Screen
        name="BackInDownScreen"
        component={BackInDownScreen}
        options={{ title: 'BackInDown' }}
      />

      <Stack.Screen
        name="BackInLeftScreen"
        component={BackInLeftScreen}
        options={{ title: 'BackInLeft' }}
      />

      <Stack.Screen
        name="BackInRightScreen"
        component={BackInRightScreen}
        options={{ title: 'BackInRight' }}
      />

      <Stack.Screen
        name="BackInUpScreen"
        component={BackInUpScreen}
        options={{ title: 'BackInUp' }}
      />

      <Stack.Screen
        name="BackOutDownScreen"
        component={BackOutDownScreen}
        options={{ title: 'BackOutDown' }}
      />

      <Stack.Screen
        name="BackOutLeftScreen"
        component={BackOutLeftScreen}
        options={{ title: 'BackOutLeft' }}
      />

      <Stack.Screen
        name="BackOutRightScreen"
        component={BackOutRightScreen}
        options={{ title: 'BackOutRight' }}
      />

      <Stack.Screen
        name="BackOutUpScreen"
        component={BackOutUpScreen}
        options={{ title: 'BackOutUp' }}
      />
    </Stack.Navigator>
  );
};
