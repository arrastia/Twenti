import { StyleSheetUtils } from '../../_tools/Utils/StyleSheetUtils';

const { create } = StyleSheetUtils;

const IOS_BLUE = '#007AFF';
const MATERIAL_BLUE = '#2196F3';

export const styles = create({
  button: {
    alignItems: 'center',
    // height: 50,
    borderWidth: 1,
    borderColor: '#0f80ae',
    borderRadius: 4,
    color: '#FFF',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 0,
    marginRight: 0.25,
    opacity: 0.7,
    padding: 10,
    alignSelf: 'flex-start',
    width: 'auto',
    textAlign: 'center'
    // textDecoration: 'none'
    // transition: 'background-color 0.2s, box-shadow 0.2s'
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
    color: 'white',
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
      //   color: IOS_BLUE
      fontSize: 20,
      color: 'white'
    },
    android: {
      color: MATERIAL_BLUE
    }
  }
});
