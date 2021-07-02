import { atom, selector } from 'recoil-react-native';

export const backgroundColorState = atom({
  key: 'backgroundColorState',
  default: 'white'
});

export const languageState = atom({
  key: 'languageState',
  default: 'es'
});

export const messagesState = selector({
  key: 'messagesState',
  default: 'es'
});
