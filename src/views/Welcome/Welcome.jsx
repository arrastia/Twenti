import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { routes } from '@configuration/routes';

import { styles } from './Welcome.styles';

import Button from '@views/_components/Button/Button';

export const Welcome = ({ navigation }) => {
  const onNavigate = view => navigation.navigate(view);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>🎉 ¡Bienvenido!</Text>
      <Text style={styles.paragraph}>
        Twenti es una plataforma social privada, a la que se accede únicamente por invitación. Cada día la usan millones de personas para comunicarse
        entre ellas y compartir información.
      </Text>
      <Text style={styles.paragraph}>Conéctate, comparte y comunícate con tus amigos, compañeros de trabajo y familia.</Text>
      <View style={styles.buttonsWrapper}>
        <Button raised label="Ya tienes una invtiación? Entra" onPress={() => onNavigate(routes.AUTHENTICATION)} />
        <Button label="Pide una invitación" />
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
};
