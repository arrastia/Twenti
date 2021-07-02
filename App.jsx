import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RecoilRoot } from 'recoil-react-native';

import { routes } from '@configuration/routes';

import { Authentication } from '@views/Authentication';
import { Login } from '@views/Login';
import { Welcome } from '@views/Welcome';

const Stack = createStackNavigator();

export default function App() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator headerMode={'none'}>
          <Stack.Screen component={Welcome} name={routes.WELCOME} />
          <Stack.Screen component={Authentication} name={routes.AUTHENTICATION} />
          <Stack.Screen component={Login} name={routes.LOGIN} options={{ title: 'Overview' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
}
