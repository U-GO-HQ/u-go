import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {
  background_variant_1,
  background_variant_2,
  background_variant_1_light,
  text_variant_1,
  text_variant_2,
  text_variant_3,
} from '@/constants/colors';

const UnreadChatsTabMenuIndicator = () => {
  return (
    <Text
      className='chat-count-wrapper min-w-[22px] absolute left-[15px] top-[8px] h-[18px] rounded-full 
              px-[3px] py-[3px] text-center bg-red-600 text-white'
      style={{
        // backgroundColor: background_variant_1,
        // color: text_variant_1,
        fontFamily: 'font_600',
        fontSize: 10,
      }}
    >
      99+
    </Text>
  );
};

export default UnreadChatsTabMenuIndicator;
