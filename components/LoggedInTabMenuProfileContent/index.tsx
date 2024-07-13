import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
const mockAvatar1 = require('../../assets/images/img-8.jpg');

const LoggedInTabMenuProfileContent = () => {
  return (
    <View className='relative'>
      <Image
        style={{
          width: 28,
          objectFit: 'contain',
          height: 28,
          borderRadius: 50,
        }}
        source={mockAvatar1}
        // resizeMethod='scale'
        accessibilityLabel='user avatar'
      />
      <View
        className='chat-count-wrapper w-[12px] absolute left-[20px] top-[20px] h-[12px] rounded-full 
              px-[3px] py-[3px] text-center bg-green-500'
        style={
          {
            // backgroundColor: background_variant_1,
            // color: text_variant_1,
            //   fontFamily: 'font_600',
            //   fontSize: 10,
          }
        }
      ></View>
    </View>
  );
};

export default LoggedInTabMenuProfileContent;

const styles = StyleSheet.create({});
