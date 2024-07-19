import {
  SafeAreaView,
  StatusBar,
  View,
  ScrollView,
  Text,
  StyleSheet,
  Platform,
  Image,
  Pressable,
  TextInput,
} from 'react-native';
import React, { useState } from 'react';
import {
  background_variant_1,
  background_variant_2,
  background_variant_1_light,
  background_variant_3,
  background_variant_4,
  background_variant_6,
  text_variant_1,
  text_variant_2,
  text_variant_3,
} from '@/constants/colors';
import { Link, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const AuthSectionReturnButton = () => {
  return (
    <Pressable
      className='w-[50px] h-[50px] rounded-full flex items-center justify-center mb-[50px]'
      style={{ backgroundColor: background_variant_6 }}
      onPress={() => router.back()}
    >
      <Ionicons name='arrow-back-outline' size={22} color={text_variant_3} />
    </Pressable>
  );
};

export default AuthSectionReturnButton;

const styles = StyleSheet.create({});
