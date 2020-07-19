import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Colors from '../styles/Colors';

const StylePostFlatItem = StyleSheet.create({
  itemListViewStyle: {
    width: wp('100%'),
    backgroundColor: Colors.white,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemGridViewStyle: {
    width: wp('45%'),
    margin:10,
    borderColor:Colors.Blue,
    borderWidth:1,
    backgroundColor: Colors.white,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemSubViewStyle: {
    flexDirection: 'column',
    flex: 1,
  },
  itemFirstViewMainStyle: {
    width: '100%',
    height: hp('7%'),
    flexDirection: 'row',
    marginBottom: hp('1.5%'),
    marginTop: hp('1.5%'),
    marginLeft: hp('2%'),
  },
  itemFirstMiddleStyle: {
    flex: 7.3,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  textPostTitleStyle: {
    color: Colors.black,
    fontSize: 14
  },
  textPostCatTitleStyle: {
    color: Colors.black,
    fontSize: 12
  },
  underline: {
    height: 1,
    backgroundColor: Colors.black,
  },
});

export {StylePostFlatItem};
