import {
  SafeAreaView,
  StatusBar,
  View,
  ScrollView,
  Text,
  StyleSheet,
  Platform,
  Image,
} from 'react-native';
import React, { Children } from 'react';
import {
  background_variant_1,
  background_variant_2,
  background_variant_1_light,
  text_variant_1,
  text_variant_2,
  text_variant_3,
} from '@/constants/colors';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
const mockAvatar1 = require('../../assets/images/img-8.jpg');
const mockAvatar2 = require('../../assets/images/img-10.png');
const mockAvatar3 = require('../../assets/images/img-11.png');
const mockAvatar4 = require('../../assets/images/img-12.png');

const TabScreensLayout = ({ children }: ChildProp) => {
  return (
    <SafeAreaView
      className='flex-1 justify-center items-center flex-col gap-4'
      style={{ backgroundColor: background_variant_1_light }}
    >
      <StatusBar
        backgroundColor={background_variant_1_light}
        barStyle={'light-content'}
      />
      <ScrollView className='flex flex-1' style={styles.safePadding}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

export default TabScreensLayout;

const styles = StyleSheet.create({
  safePadding: {
    paddingTop: Platform.OS === 'android' ? 50 : 0,
    backgroundColor: background_variant_1,
  },
});
