import React, { useReducer } from 'react';
import { Button, SafeAreaView, Text, View, TextInput } from 'react-native';
import { useRecoilValue } from 'recoil-react-native';

import { styles } from './Login.styles';

import { loginReducer } from './tools/Reducers/loginReducer';

import { AuthenticationService } from '../../core/services/Authentication';
import { backgroundColorState } from '../_tools/Recoil/atoms';

export const Login = ({ route, navigation }) => {
  const { itemId, otherParam } = route.params;
  const backgroundColor = useRecoilValue(backgroundColorState);

  const [loginState, loginDispatch] = useReducer(loginReducer, { email: '', password: '', number: '' });

  const onChangeInput = (input, value) => loginDispatch({ type: 'ON_CHANGE_INPUT', payload: { input, value } });

  const onSubmit = async () => {
    try {
      const response = await AuthenticationService.checkAuthorization(loginState.email);
      console.log('response :>> ', response);
    } catch (error) {
      console.log('error :>> ', error);
    }
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <Text>Login Screen</Text>
      <View>
        <TextInput
          keyboardType="email-address"
          onChangeText={event => {
            console.log(`event`, event);
            onChangeInput('email', event);
          }}
          textContentType={'emailAddress'}
          // placeholder="useless placeholder"
          style={styles.input}
          value={loginState.email}
        />
        <TextInput
          onChangeText={event => onChangeInput('number', event)}
          // placeholder="useless placeholder"
          style={styles.input}
          textContentType={'newPassword'}
          value={loginState.number}
        />
        <TextInput
          keyboardType="numeric"
          onChangeText={event => onChangeInput('password', event)}
          // placeholder="useless placeholder"
          style={styles.input}
          value={loginState.password}
        />
      </View>

      <Button title="Go to Login... again" onPress={() => navigation.push('Login', { itemId: Math.floor(Math.random() * 100) })} />
      <Button title="SUBMIT" onPress={() => onSubmit()} />
      <Button title="Go to Welcome" onPress={() => navigation.navigate('Welcome')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
};
