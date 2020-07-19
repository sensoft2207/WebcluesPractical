import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Colors from '../styles/Colors';

const StyleHomeScreen = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  toolBarContainer: {
    paddingTop: hp('5%'),
    paddingBottom: hp('5%'),
    backgroundColor: Colors.black
  },
  listContainer: {
    flex: 1
  },
  dialogMainContainer: {
    backgroundColor: Colors.white,
    flexDirection: 'column',
    borderRadius: 10
  },
  filterHeaderDialog: {
    paddingTop: 20,
    paddingBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.Blue,
    borderTopLeftRadius: 10,
    borderTopEndRadius: 10,
  },
  filterHeaderText: {
    fontSize: 15,
    color: Colors.white
  },
  filterImgClose: {
    width: 40,
    height: 40,
  },
  filterImgCloseContainer: {
    position: 'absolute',
    right: 0,
    marginRight: 15,
  },
  filterDialogMiddle: {
    flexDirection: 'column',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 8,
  },
  submitBtn: {
    height: hp('5%'),
    width: wp('30%'),
    borderRadius: wp('1.5%'),
    backgroundColor: Colors.Blue,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 15
  },
  submitText: {
    fontSize: 14,
    color: Colors.white
  }
});

export { StyleHomeScreen };
