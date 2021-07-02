import React, { useReducer } from 'react';
import { SafeAreaView, Text, View, TextInput } from 'react-native';

import { styles } from './Authentication.styles';

import { InputText } from '@views/_components/InputText/InputText';
import { MyButton } from '@views/_components/MyButton/MyButton';

import { AuthenticationService } from '@core/services/Authentication';

import { authenticationReducer } from './_tools/Reducers/authenticationReducer';
import { AuthUtils } from './_tools/Utils/AuthUtils';

export const Authentication = ({ navigation }) => {
  const { isEmail } = AuthUtils;

  const [authenticationState, authenticationDispatch] = useReducer(authenticationReducer, {
    email: '',
    isAuthorized: false,
    loading: 'idle',
    password: ''
  });

  const onFillField = (option, value) => authenticationDispatch({ type: 'ON_FILL_FIELD', payload: { option, value } });

  const onAskAuthorization = async () => {
    try {
      const { data } = await AuthenticationService.checkAuthorization(authenticationState.email);
      console.log('data :>> ', data);
      if (data.message === 'Authorized') {
        authenticationDispatch({ type: 'SET_AUTHORIZED', payload: { value: true } });
      }
    } catch (error) {
      console.log('error :>> ', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Login Screen</Text>
      <View style={styles.box}>
        <Text style={styles.bannerTitle}>Entrar</Text>
        <InputText
          keyboardType="email-address"
          label={'E-mail'}
          onInputChange={event => onFillField('email', event)}
          placeholder="E-mail"
          textContentType={'emailAddress'}
          value={authenticationState.email}
        />
        {authenticationState.isAuthorized && (
          <InputText
            keyboardType="visible-password"
            label={'Pass'}
            onInputChange={event => onFillField('email', event)}
            placeholder="Pass"
            textContentType={'newPassword'}
            value={authenticationState.password}
          />
        )}
        <MyButton disabled={!isEmail(authenticationState.email)} label="Entrar" onPress={onAskAuthorization} />
        <Text style={styles.footer}>Tienes problemas para entrar?</Text>
      </View>
    </SafeAreaView>
  );
};
