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
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import React, { useState } from 'react';
import {
  background_variant_1,
  background_variant_2,
  background_variant_3,
  background_variant_1_light,
  text_variant_1,
  text_variant_2,
  text_variant_3,
} from '@/constants/colors';
import { Link, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
const mockAvatar1 = require('../../assets/images/img-8.jpg');
const mockAvatar2 = require('../../assets/images/img-10.png');
const mockAvatar3 = require('../../assets/images/img-11.png');
const mockAvatar4 = require('../../assets/images/img-12.png');

const Profile = () => {
  const [showNameInput, setShowNameInput] = useState(false);
  const [showAboutInput, setShowAboutInput] = useState(false);

  return (
    <KeyboardAvoidingView
      className='flex flex-1 justify-center items-center flex-col w-full'
      style={{ backgroundColor: background_variant_1 }}
      behavior='padding'
      keyboardVerticalOffset={Platform.OS === 'ios' ? 45 : 0}
    >
      <ScrollView
        className='flex flex-1 w-full min-h-screen'
        style={styles.safePadding}
      >
        <View
          className='header flex flex-row justify-between items-center w-full 
        px-3 py-2 mb-[20px]'
          style={{ backgroundColor: background_variant_1_light }}
        >
          <View className='flex flex-row items-center'>
            <Pressable onPress={() => router.back()}>
              <Ionicons
                name='arrow-back-outline'
                size={22}
                color={text_variant_1}
              />
            </Pressable>
            <View className='chat-card flex flex-row items-center gap-x-4 ml-2'>
              <Image
                style={{
                  width: 50,
                  objectFit: 'contain',
                  height: 50,
                  borderRadius: 50,
                }}
                source={mockAvatar4}
                // resizeMethod='scale'
                accessibilityLabel='user avatar'
              />
              <View className='chat-info-wrapper flex justify-between'>
                <Text
                  className='text-[16px]'
                  style={{ color: text_variant_1, fontFamily: 'font_600' }}
                >
                  Judith Ham
                </Text>
              </View>
            </View>
          </View>
          {/* <Ionicons name='grid-outline' size={22} color={text_variant_1} /> */}
        </View>
        <View className='messages-area px-3 flex flex-col gap-y-6 mb-16 relative z-10'>
          <View
            className='px-3 py-3 max-w-[80%] flex flex-row items-center rounded-[15px] 
            rounded-tr-none ml-auto'
            style={{ backgroundColor: background_variant_1_light }}
          >
            <Text style={{ color: text_variant_1, fontFamily: 'font_300' }}>
              Hello Judith, How you're doing fine?
            </Text>
          </View>
          <View
            className='px-3 py-3 max-w-[80%] flex flex-row items-center rounded-[15px] 
            rounded-tl-none relative right-0'
            style={{ backgroundColor: background_variant_2 }}
          >
            <Text style={{ color: text_variant_2, fontFamily: 'font_300' }}>
              Yes I am Andrew, How you doing? Lorem ipsum dolor sit amet.
            </Text>
          </View>
          <View
            className='px-3 py-3 max-w-[80%] flex flex-row items-center rounded-[15px] 
            rounded-tr-none ml-auto'
            style={{ backgroundColor: background_variant_1_light }}
          >
            <Text style={{ color: text_variant_1, fontFamily: 'font_300' }}>
              Yes I am Andrew, How you doing? Lorem ipsum dolor sit amet. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
              maxime voluptatum?
            </Text>
          </View>
          <View
            className='px-3 py-3 max-w-[80%] flex flex-row items-center rounded-[15px] 
            rounded-tl-none relative right-0'
            style={{ backgroundColor: background_variant_2 }}
          >
            <Text style={{ color: text_variant_2, fontFamily: 'font_300' }}>
              I'm doing well, thanks. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Nulla aperiam eveniet eos.
            </Text>
          </View>
          <View
            className='px-3 py-3 max-w-[80%] flex flex-row items-center rounded-[15px] 
            rounded-tr-none ml-auto'
            style={{ backgroundColor: background_variant_1_light }}
          >
            <Text style={{ color: text_variant_1, fontFamily: 'font_300' }}>
              Hello Judith, How you're doing fine?
            </Text>
          </View>
          <View
            className='px-3 py-3 max-w-[80%] flex flex-row items-center rounded-[15px] 
            rounded-tl-none relative right-0'
            style={{ backgroundColor: background_variant_2 }}
          >
            <Text style={{ color: text_variant_2, fontFamily: 'font_300' }}>
              Yes I am Andrew, How you doing? Lorem ipsum dolor sit amet.
            </Text>
          </View>
          <View
            className='px-3 py-3 max-w-[80%] flex flex-row items-center rounded-[15px] 
            rounded-tr-none ml-auto'
            style={{ backgroundColor: background_variant_1_light }}
          >
            <Text style={{ color: text_variant_1, fontFamily: 'font_300' }}>
              Yes I am Andrew, How you doing? Lorem ipsum dolor sit amet. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
              maxime voluptatum?
            </Text>
          </View>
          <View
            className='px-3 py-3 max-w-[80%] flex flex-row items-center rounded-[15px] 
            rounded-tl-none relative right-0'
            style={{ backgroundColor: background_variant_2 }}
          >
            <Text style={{ color: text_variant_2, fontFamily: 'font_300' }}>
              I'm doing well, thanks. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Nulla aperiam eveniet eos.
            </Text>
          </View>
          <View
            className='px-3 py-3 max-w-[80%] flex flex-row items-center rounded-[15px] 
            rounded-tr-none ml-auto'
            style={{ backgroundColor: background_variant_1_light }}
          >
            <Text style={{ color: text_variant_1, fontFamily: 'font_300' }}>
              Hello Judith, How you're doing fine?
            </Text>
          </View>
          <View
            className='px-3 py-3 max-w-[80%] flex flex-row items-center rounded-[15px] 
            rounded-tl-none relative right-0'
            style={{ backgroundColor: background_variant_2 }}
          >
            <Text style={{ color: text_variant_2, fontFamily: 'font_300' }}>
              Yes I am Andrew, How you doing? Lorem ipsum dolor sit amet.
            </Text>
          </View>
          <View
            className='px-3 py-3 max-w-[80%] flex flex-row items-center rounded-[15px] 
            rounded-tr-none ml-auto'
            style={{ backgroundColor: background_variant_1_light }}
          >
            <Text style={{ color: text_variant_1, fontFamily: 'font_300' }}>
              Yes I am Andrew, How you doing? Lorem ipsum dolor sit amet. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
              maxime voluptatum?
            </Text>
          </View>
          <View
            className='px-3 py-3 max-w-[80%] flex flex-row items-center rounded-[15px] 
            rounded-tl-none relative right-0'
            style={{ backgroundColor: background_variant_2 }}
          >
            <Text style={{ color: text_variant_2, fontFamily: 'font_300' }}>
              I'm doing well, thanks. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Nulla aperiam eveniet eos.
            </Text>
          </View>
          <View
            className='px-3 py-3 max-w-[80%] flex flex-row items-center rounded-[15px] 
            rounded-tr-none ml-auto'
            style={{ backgroundColor: background_variant_1_light }}
          >
            <Text style={{ color: text_variant_1, fontFamily: 'font_300' }}>
              Hello Judith, How you're doing fine?
            </Text>
          </View>
          <View
            className='px-3 py-3 max-w-[80%] flex flex-row items-center rounded-[15px] 
            rounded-tl-none relative right-0'
            style={{ backgroundColor: background_variant_2 }}
          >
            <Text style={{ color: text_variant_2, fontFamily: 'font_300' }}>
              Yes I am Andrew, How you doing? Lorem ipsum dolor sit amet.
            </Text>
          </View>
          <View
            className='px-3 py-3 max-w-[80%] flex flex-row items-center rounded-[15px] 
            rounded-tr-none ml-auto'
            style={{ backgroundColor: background_variant_1_light }}
          >
            <Text style={{ color: text_variant_1, fontFamily: 'font_300' }}>
              Yes I am Andrew, How you doing? Lorem ipsum dolor sit amet. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
              maxime voluptatum?
            </Text>
          </View>
          <View
            className='px-3 py-3 max-w-[80%] flex flex-row items-center rounded-[15px] 
            rounded-tl-none relative right-0'
            style={{ backgroundColor: background_variant_2 }}
          >
            <Text style={{ color: text_variant_2, fontFamily: 'font_300' }}>
              I'm doing well, thanks. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Nulla aperiam eveniet eos.
            </Text>
          </View>
        </View>
        {/* </View> */}
        <View
          className='px-3 bg-transparent fixed flex flex-row 
      z-20'
        >
          <View className='w-[80%] mr-auto'>
            <TextInput
              className='rounded-full'
              placeholder='type your message'
              style={{
                width: '100%',
                paddingHorizontal: 20,
                paddingVertical: 12,
                backgroundColor: `${background_variant_3}`,
                borderRadius: 7,
                color: `${text_variant_1}`,
                fontSize: 14,
                fontFamily: 'font_400',
              }}
              placeholderTextColor={text_variant_1} // Set the placeholder color here
              // value={loginForm.email}
              onChangeText={(text) => {
                // console.log('email input in progress...');
                // setLoginForm({
                //   ...loginForm,
                //   email: text,
                // });
              }}
            />
          </View>
          <View className='w-[10%] mr-3'>
            <Pressable
              className='w-[50px] h-[50px] flex flex-row items-center justify-center rounded-full mr-4'
              style={{ backgroundColor: background_variant_2 }}
              onPress={() => router.back()}
            >
              <Ionicons name='send-outline' size={22} color={text_variant_2} />
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  safePadding: {
    paddingTop: Platform.OS === 'android' ? 45 : 0,
    backgroundColor: background_variant_1,
  },
});
