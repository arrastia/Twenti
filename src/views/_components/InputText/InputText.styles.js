import { StyleSheet } from 'react-native';

const BACKGROUND_COLOR = '#77b3d8';
const BANNER_COLOR = '#cee4ef';
const BOX_COLOR = 'white';
const TEXT_COLOR = '#000';

export const styles = StyleSheet.create({
  input: {
    borderWidth: 0.5
  },
  inputWrapper: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    margin: 10
  },
  label: {
    color: TEXT_COLOR
  }
});
