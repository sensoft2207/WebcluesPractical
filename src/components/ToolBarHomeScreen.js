import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StyleToolBar } from '../styles';

const ToolBarHomeScreen = ({
    titleName,
    onFilterBtnPress,
    onChangeBtnPress,
}) => (
        <View style={StyleToolBar.containerView}>

            <View
                style={StyleToolBar.innerContainerStyle}>

                <View style={StyleToolBar.filterBtnContainer}>

                    <TouchableOpacity onPress={onFilterBtnPress}>
                        <View style={StyleToolBar.btnContainerStyle}>
                            <Text style={StyleToolBar.btnTitleStyle}>Filter</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={StyleToolBar.titleViewStyle}>
                    <Text style={StyleToolBar.titleTextStyle}>{titleName}</Text>
                </View>

                <View style={StyleToolBar.changeBtnContainer}>

                    <TouchableOpacity onPress={onChangeBtnPress}>
                        <View style={StyleToolBar.btnContainerStyle}>
                            <Text style={StyleToolBar.btnTitleStyle}>Change</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
export { ToolBarHomeScreen };
