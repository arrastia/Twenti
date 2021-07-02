import React from 'react';

import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const Icon = ({ color, name, outline, size }) => {
  let iconName = Platform.OS === 'android' ? `md-${name}` : `ios-${name}`;
  if (Platform.OS === 'ios' && outline) {
    iconName = `${iconName}-outline`;
  }
  return <Ionicons name={iconName} size={size} color={color} />;
};
