import { StyleSheet } from 'react-native';

const BACKGROUND_COLOR = '#77b3d8';
const BANNER_COLOR = '#cee4ef';
const BOX_COLOR = 'white';
const FONT_SIZE = 30;
const TEXT_COLOR = '#000';

export const styles = StyleSheet.create({
  bannerTitle: {
    backgroundColor: BANNER_COLOR,
    padding: 10
  },
  box: {
    backgroundColor: BOX_COLOR,
    display: 'flex',
    margin: 20
  },
  container: {
    backgroundColor: BACKGROUND_COLOR,
    flex: 1,
    justifyContent: 'center'
  },
  footer: {
    backgroundColor: BANNER_COLOR,
    padding: 10
  },
  title: {
    padding: 40
  }
});
