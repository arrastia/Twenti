import { StyleSheet } from 'react-native';

const BACKGROUND_COLOR = '#77b3d8';
const TEXT_COLOR = '#000';

export const styles = StyleSheet.create({
  buttonsWrapper: { alignItems: 'center' },
  container: { backgroundColor: BACKGROUND_COLOR, flex: 1 },
  paragraph: { color: TEXT_COLOR, fontSize: 20, padding: 40 },
  title: { color: TEXT_COLOR, fontSize: 35, padding: 40 }
});
