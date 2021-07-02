import { StyleSheetUtils } from '../../_tools/Utils/StyleSheetUtils';

const { create } = StyleSheetUtils;

const IOS_BLUE = '#007AFF';
const MATERIAL_BLUE = '#2196F3';

export const styles = create({
  button: {
    padding: 20,
    margin: 10,
    width: 200
  },
  buttonRaised: {
    borderRadius: 2,
    ios: {
      backgroundColor: IOS_BLUE
    },
    android: {
      backgroundColor: MATERIAL_BLUE,
      elevation: 3
    }
  },
  buttonFlat: {},
  buttonLabel: {
    textAlign: 'center',
    android: {
      fontWeight: 'bold'
    }
  },
  buttonLabelRaised: {
    color: '#FFFFFF'
  },
  buttonLabelFlat: {
    ios: {
      color: IOS_BLUE
    },
    android: {
      color: MATERIAL_BLUE
    }
  }
});
