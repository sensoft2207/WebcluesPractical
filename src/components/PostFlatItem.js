import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {StylePostFlatItem} from '../styles';

const PostFlatItem = ({postTitle, postCategory,styleChangeView,isChangeView}) => {
  return (
    
      <View
        style={
            styleChangeView
        }>
        <View style={StylePostFlatItem.itemSubViewStyle}>
          <View style={StylePostFlatItem.itemFirstViewMainStyle}>
            <View style={StylePostFlatItem.itemFirstMiddleStyle}>
              <View
                style={{
                  flexDirection: 'column'
                }}>
                <Text
                  style={
                    StylePostFlatItem.textPostTitleStyle
                  }>
                  {postTitle}
                </Text>
                <Text
                  style={
                    StylePostFlatItem.textPostCatTitleStyle
                  }>
                  {postCategory}
                </Text>
              </View>
            </View>
          </View>
          <View style={isChangeView == true ? null:StylePostFlatItem.underline} />
        </View>
      </View>
    
  );
};

export {PostFlatItem} ;
