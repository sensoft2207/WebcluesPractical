import { StyleSheet} from 'react-native';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Colors from '../styles/Colors';

const StyleToolBar = StyleSheet.create({
    containerView: {
        flexDirection: 'column'
    },
    innerContainerStyle: {
        flexDirection: 'row',
        width: wp('100%'),
        height: hp('10%'),
        alignItems: 'center',
        backgroundColor: Colors.black,
    },
    titleViewStyle: {
        position: 'absolute',
        width: wp('100%'),
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    titleTextStyle: {
        justifyContent: 'center',
        alignSelf: 'center',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 20,
        color: Colors.white
    },
    changeBtnContainer: {
        position: 'absolute',
        right: wp('4%'),
        flexDirection: 'row',
    },
    filterBtnContainer: {
        position: 'absolute',
        left: wp('4%'),
        flexDirection: 'row',
    },
    btnContainerStyle: {
        height: hp('5%'),
        width: wp('18%'),
        borderRadius: wp('1%'),
        backgroundColor: Colors.Blue,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10
    },
    btnTitleStyle: {
        fontSize: 10,
        color: Colors.white,
        fontWeight: 'bold'
    }
});

export { StyleToolBar };
