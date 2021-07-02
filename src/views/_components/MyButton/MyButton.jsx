import React from 'react';
import { Platform, Text, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './Button.styles';

export function MyButton({ children, icon, label, onPress, raised, disabled }) {
  const renderIcon = () => (icon ? <View>{icon}</View> : null);

  const renderLabel = () => {
    const labelStyles = [styles.buttonLabel];
    if (raised) {
      labelStyles.push(styles.buttonLabelRaised);
    } else {
      labelStyles.push(styles.buttonLabelFlat);
    }

    let labelText = label;
    if (Platform.OS === 'android') {
      labelText = labelText.toUpperCase();
    }

    return label ? <Text style={labelStyles}>{labelText}</Text> : null;
  };

  const renderButton = () => {
    if (Platform.OS === 'android') {
      // Raised Android buttons need a white ripple
      if (raised) {
        return (
          <TouchableNativeFeedback onPress={onPress} background={TouchableNativeFeedback.Ripple('#FFF')}>
            <View style={[styles.button, styles.buttonRaised]}>{children}</View>
          </TouchableNativeFeedback>
        );
      }

      // Normal Android buttons get a gray ripple
      return (
        <TouchableNativeFeedback onPress={onPress} background={TouchableNativeFeedback.Ripple()}>
          <View style={[styles.button, styles.buttonFLat]}>{children}</View>
        </TouchableNativeFeedback>
      );
    }

    // iOS raised buttons use TouchableHighlight
    if (raised) {
      return (
        <TouchableHighlight style={[styles.button, styles.buttonRaised]} underlayColor="#0052AC" onPress={onPress}>
          {children}
        </TouchableHighlight>
      );
    }

    // Normal iOS buttons use TouchableOpacity
    return (
      <TouchableOpacity disabled={disabled} onPress={onPress}>
        <LinearGradient colors={['#169bd0', '#0d7fae']} style={[styles.button, styles.buttonFlat, { opacity: disabled ? 0.5 : 1 }]}>
          {renderIcon()}
          {renderLabel()}
          {children}
        </LinearGradient>
      </TouchableOpacity>
    );
  };

  return renderButton();
}
