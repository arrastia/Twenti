import React from 'react';
import { Text, TextInput, View } from 'react-native';

import { styles } from './InputText.styles';

export const InputText = ({ keyboardType, label, onInputChange, placeholder, textContentType, value, ...rest }) => {
  const test = {};
  return (
    <View style={styles.inputWrapper}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        {...rest}
        keyboardType={keyboardType}
        onChangeText={onInputChange}
        placeholder={placeholder}
        style={styles.input}
        textContentType={textContentType}
        value={value}
      />
    </View>
  );
};
